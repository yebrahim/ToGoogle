chrome.browserAction.onClicked.addListener(function(tab) {
    url = tab.url;
    idx = url.indexOf("?q=");
    if (idx > 0) {
        query = url.substr(url.indexOf("?q="));
        newUrl = "http://www.google.com/search" + query;
        chrome.tabs.update(tab.id, {
            url: newUrl
        });
    }
});