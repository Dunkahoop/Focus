//save newly created tab
chrome.tabs.onCreated.addListener(function(tab) {
    var tabId = tab.id;
    //check each tab
    chrome.tabs.query({currentWindow: true}, function(tabs) {
      tabs.forEach(function(tab){
        //if tab is not newly created tab, delete it
        if(tab.id !== tabId) chrome.tabs.remove(tab.id);
      });
    });
  });