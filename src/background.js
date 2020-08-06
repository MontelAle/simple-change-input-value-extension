function buttonClicked(tab) {

  // An object can (and should) be passed as second argument
  // chrome.tabs API - https://developer.chrome.com/extensions/tabs#method-sendMessage

  chrome.tabs.sendMessage(tab.id, "");

}

chrome.browserAction.onClicked.addListener(buttonClicked);
