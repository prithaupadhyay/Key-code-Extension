

 chrome.runtime.onInstalled.addListener(function() 
 {

   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() 
   {
      chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: 
        [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostContains: 'www'},
        })

        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }
      ]);
   });

   // chrome.browserAction.setBadgeText({text:"12"});
  });
