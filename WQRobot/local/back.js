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
chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        if (details.url == "http://d1.web2.qq.com/channel/poll2") {
            post(details);
        } else {
            for (var i = 0; i < details.requestHeaders.length; ++i) {
                if (details.requestHeaders[i].name == 'Origin') {
                    details.requestHeaders[i].value = 'http://d1.web2.qq.com';
                } else if (details.requestHeaders[i].name == 'Referer') {
                    details.requestHeaders[i].value = 'http://d1.web2.qq.com/cfproxy.html?v=20151105001&callback=1';
                }
            }
            return {requestHeaders:details.requestHeaders};
        }
    },
    {urls:["http://d1.web2.qq.com/channel/poll2","http://d1.web2.qq.com/channel/send_qun_msg2"]},
    ["blocking","requestHeaders"]
);
function post(details) {
    chrome.tabs.sendMessage(details.tabId,{name:"QQ"},function () {
    });
}
