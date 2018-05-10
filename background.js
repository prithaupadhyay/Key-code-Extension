 chrome.runtime.onInstalled.addListener(function() 
 {
    // chrome.storage.sync.set({color: '#D3D0CB'}, function() 
    // {
    //   console.log("This is the first color #D3D0CB ");
    // });
 

   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() 
   {
      chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: 
        [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        }),
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostContains: 'google.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }
      ]);
   });
  });