#!/usr/bin/env node
import { rename, copyFile, mkdir, stat, readdir } from 'node:fs/promises';
import { join, dirname, basename, extname } from 'node:path';

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch (err) {
    return false;
  }
}

// Generate a unique target name in `parent` for base+ext, adding -1, -2, ... before the extension
async function uniqueTarget(parent, base, ext) {
  let target = join(parent, base + ext);
  let counter = 1;
  while (await exists(target)) {
    target = join(parent, `${base}-${counter}${ext}`);
    counter++;
  }
  return target;
}

// Rename a single path by removing leading/trailing underscores from the basename; preserve extension
async function normalizeName(oldPath) {
  const ext = extname(oldPath);
  const nameNoExt = basename(oldPath, ext);

  // remove leading and trailing underscores
  const newNameNoExt = nameNoExt.replace(/^_+|_+$/g, '');
  if (newNameNoExt === nameNoExt) return null; // nothing to do

  const parent = dirname(oldPath);
  const finalBase = newNameNoExt || 'unnamed'; // in case name was only underscores

  let target = join(parent, finalBase + ext);
  if (await exists(target)) {
    target = await uniqueTarget(parent, finalBase, ext);
  }

  await rename(oldPath, target);
  console.log(`Renamed ${oldPath} → ${target}`);
  return target;
}

// Walk directory depth-first (children first), normalizing names as we go
async function walkAndNormalize(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkAndNormalize(full);
      // rename directory after its children were processed
      await normalizeName(full);
    } else {
      await normalizeName(full);
    }
  }
}

async function moveAndCopy() {
  try {
    const outDir = 'out';

    // Ensure out/ exists
    await mkdir(outDir, { recursive: true });

    // Normalize all files/directories in out/ by removing leading/trailing underscores
    if (await exists(outDir)) {
      console.log(`Normalizing names under ${outDir}/ (removing leading/trailing underscores)`);
      await walkAndNormalize(outDir);
      console.log('Normalization complete');
    } else {
      console.log(`Directory ${outDir} not found — skipping normalization`);
    }

    // Copy manifest.json into out/
    const srcFile = 'manifest.json';
    const destFile = join(outDir, 'manifest.json');

    if (!(await exists(srcFile))) {
      console.error(`Source file ${srcFile} not found — cannot copy manifest`);
      process.exit(1);
    }

    await copyFile(srcFile, destFile);
    console.log(`Copied ${srcFile} → ${destFile}`);

  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

moveAndCopy();