chrome.runtime.sendMessage({type: "availablePlatform"}, function(response: { message: string }) {
  console.log(response.message);
});