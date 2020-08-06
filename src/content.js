console.log('Content script going!');

function gotMessage(request, sender, sendResponse) {

  // You can access data sent by the background script via req
  // chrome.runtime API - https://developer.chrome.com/extensions/runtime#event-onMessage

  // This console logs in the browser context -> is visible in dev tools console

  console.log('Called by Button!');

  // Select the target via document API


  // Either via getElementById -> You get one by id

  // const target = document.getElementById('fname');


  // Or via getElementsByTagName -> You get all inputs

  // Set id of the target input
  const targetId = 'fname';
  const newValue = 'John Smith';

  const targets = document.getElementsByTagName('input');

  // Iterate all inputs to find the right one
  for(const target of targets) {

    if (target.id === targetId) {

      // Set target value
      target.value = newValue;

    }

  }

}

chrome.runtime.onMessage.addListener(gotMessage);
