

 chrome.runtime.onInstalled.addListener(function() 
 {

   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() 
   {
      chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: 
        [
        // new chrome.declarativeContent.PageStateMatcher({
        //   pageUrl: {hostEquals: 'developer.chrome.com'},
        // }),
        // new chrome.declarativeContent.PageStateMatcher({
        //   pageUrl: {hostContains: 'google.com'},
        // }),
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostContains: 'www'},
        }),

         new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostContains: 'co'},
        })


        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }
      ]);
   });

   // chrome.browserAction.setBadgeText({text:"12"});
  });
