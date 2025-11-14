'use client';

import React from 'react';
import Link from "next/link";
// import { pushHash, Link } from '@/hooks/useHashRouter';

export default function Home() {
  // use hash-based navigation inside extension

  // Check localStorage for selected platforms and route accordingly
  // function handleNext(e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) {
  //   // When called from a Link onClick, we can prevent the Link fallback by calling e.preventDefault()
  //   try {
  //     const raw = typeof window !== 'undefined' ? localStorage.getItem('saoa_platforms_v1') : null;
  //     if (raw) {
  //       const parsed = JSON.parse(raw);
  //       if (Array.isArray(parsed) && parsed.length > 0) {
  //         // prevent the Link fallback navigation
  //         e?.preventDefault();
  //         pushHash('/dashboard');
  //         return;
  //       }
  //     }
  //   } catch {
  //     // if any error, fall back to onboarding
  //   }
  //   // if JS is running we'll push hash to onboarding; if not, the Link fallback will navigate to onboarding.html
  //   pushHash('/onboarding');
  // }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-6">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-md p-10">
        <header className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Smart AI Outreach Automation (SAOA)
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Automate personalized outreach across Whop, Telegram, Discord and more — without losing the human touch.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold mb-2">What SAOA does</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Create a library of reusable message templates and run automated campaigns that send a different,
              randomized message to each recipient. Keep it personal while scaling outreach.
            </p>

            <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Save and manage message templates</li>
              <li>• Connect platforms (Telegram, Discord, Whop)</li>
              <li>• Run campaigns with rate limits and analytics</li>
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-md font-medium mb-2">Quick start</h3>
              <ol className="list-decimal list-inside text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>Create or import messages on the Messages page</li>
                <li>Connect a platform on Platforms</li>
                <li>Start a campaign from Campaignsnn</li>
              </ol>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {/* Use our Link component so JS hydration intercepts clicks and we also get a static fallback href in the exported HTML */}
              {/*<Link*/}
              {/*  href="/onboarding"*/}
              {/*  // onClick={handleNext}*/}
              {/*  className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"*/}
              {/*>*/}
              {/*  Next →*/}
              {/*</Link>*/}

              <Link
                href="/messages"
                className="inline-flex items-center px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50"
              >
                Messages
              </Link>

              {/*<Link href="/platforms" className="inline-flex items-center px-3 py-2 text-sm text-gray-600 hover:underline">Platforms</Link>*/}
            </div>
          </div>
        </section>

        <footer className="mt-8 text-xs text-gray-500">
          Tip: Use the Messages page to add templates. You can clear the form after adding new messages for rapid entry.
        </footer>
      </div>
    </main>
  );
}
