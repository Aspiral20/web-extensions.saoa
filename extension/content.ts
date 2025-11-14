chrome.runtime.sendMessage({type: "checkPlatform"}, function(response) {
  console.log(response)
});