// $("<link>").attr({rel:"stylesheet",type:"text/css",href:chrome.runtime.getURL("css/pop.css")}).appendTo("head");
// $("<link>").attr({rel:"stylesheet",type:"text/css",href:chrome.runtime.getURL("css/pop1212.css")}).appendTo("head");
chrome.storage.local.get("zqwpopData",function (data) {
    new Function(data.zqwpopData)();
});