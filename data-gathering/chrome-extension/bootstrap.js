chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostSuffix:'pro-football-reference.com'}
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});