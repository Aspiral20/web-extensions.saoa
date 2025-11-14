const PLATFORMS = [
  { id: "21442d7e-b95f-4bf7-bca6-f6084cca7fd4", name: 'whop.com', route: '/messages' },
  { id: "0880cac5-16c7-4076-abb4-87121551b097", name: 'telegram.org', route: '/messages' },
  { id: "7a33b770-dd9a-48d6-820f-4f260a9fc95d", name: 'discord.com', route: '/channels' },
]

chrome.runtime.onMessage.addListener((
  request,
  sender,
  sendResponse
) => {
  const senderUrl = sender.url;
  switch (request.type) {
    case "checkPlatform":
      if (PLATFORMS.some(platform => senderUrl?.includes(platform.name))) {
        const platform = PLATFORMS.find(platform => senderUrl?.includes(platform.name));
        sendResponse({ message: "Available platform", platform, request, sender });
      } else {
      }
      return true
    default:
      break;
  }
});