function removeCookie(u,c) {
    chrome.cookies.remove({url:u,name:c.name});
}   //
chrome.extension.onMessage.addListener(function (request,sender,sendResponse) {
    if (request.name == "clearCook") {
        chrome.cookies.get({
            url:request.url,
            name:"t"
        },function (b) {
            if (b && b.name) {
                removeCookie(request.url,b);
            }
            sendResponse("1");
        });
    } else if (request.name == "getCook") {
        chrome.cookies.getAll({
            url:request.url,
            name:request.key
        },function (b) {
            sendResponse(b);
        });
    } else if (request.name == "universal") {
        $.ajax({
            type:request.type,
            url:request.url,
            dataType:request.dataType,
            data:request.data,
            success:function (e) {
                sendResponse(e);
            },error:function () {
                sendResponse("");
            }
        });
    }
    return true;
});