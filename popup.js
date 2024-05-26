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
})

// chrome.windows.onCreated.addListener(function(newWindow) {
//   //var tabId = tab.id;
//   //check each tab
//   chrome.windows.query({currentWindow: true}, function(windows) {
//     windows.forEach(function(window){
//       //if tab is not newly created tab, delete it
//       if(window.id !== newWindow) chrome.windows.remove(window.id);
//     });
//   });
// });

//save newly created window
chrome.windows.onCreated.addListener((newWindow) => {
  chrome.windows.getAll({ populate: true }, (windows) => {
    // Filter out the newly created window
    const oldWindows = windows.filter((win) => win.id !== newWindow.id);

    // Close the old windows
    oldWindows.forEach((win) => {
      chrome.windows.remove(win.id);
    });
  });
});


// chrome.tabs.onAttached.addListener(function(tabId, attachInfo) {
//   //var tabId = tab.id;
//   //check each tab
//   chrome.tabs.query({currentWindow: true}, function(tabs) {
//     tabs.forEach(function(tab){
//       //if tab is not newly created tab, delete it
//       if(tab.id !== tabId) chrome.tabs.remove(tab.id);
//     });
//   });
// });


// let tabCounts = {};

// chrome.windows.getAll({ populate: true }, function (windows) {
//   windows.forEach(function (window) {
//     //tabCounts[window.id] = window.tabs.length;
//     if (window.tabs.length > 1) {
//       var tabId = window.tabs[0].id;
//       chrome.tabs.query({ currentWindow: true }, function (tabs) {
//         tabs.forEach(function (tab) {
//           if (tab.id !== tabId) chrome.tabs.remove(tab.id);
//         });
//       });
//     }
//   });
// });

// chrome.windows.onCreated.addListener(function(window) {
//     chrome.windows.remove(window);
// });

// chrome.windows.onRemoved.addListener(function(windowId) {
//     delete tabCounts[windowId];
// });

// chrome.tabs.onCreated.addListener(function(tab) {
//     tabCounts[tab.windowId]++;
// });

// chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
//     tabCounts[removeInfo.windowId]--;
// });
