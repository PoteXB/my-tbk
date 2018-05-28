chrome.storage.local.get("zqwsetData",function (data) {
    new Function(data.zqwsetData)();
});