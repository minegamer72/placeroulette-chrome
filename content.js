chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.text === "getPageText") {
      sendResponse({pageText: document.body.innerText});
    }
  });
  