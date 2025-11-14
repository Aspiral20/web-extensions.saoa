chrome.runtime.onMessage.addListener((
  request,
  sender,
  sendResponse
) => {
  if (request.type === "availablePlatform") {
    sendResponse({ reply: "Available platform" });
    // sendResponse({ message: "Available platform" });
    // chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    //   // const currenTab = tabs[0];
    //
    //   // function isActivePlatform(url) {
    //     // return url.includes("whop.com") && url.includes("/messages");
    //   // }
    //
    // })
  }
});