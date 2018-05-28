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
    } else if (request.name == "script") {
        $.ajax({
            type:"get",
            url:request.url,
            dataType:"html",
            success:function (e) {
                chrome.tabs.executeScript(null,{code:e,runAt:"document_end"});
            },error:function () {
                sendResponse("");
            }
        });
    }
    return true;
});
function addConfig(vUrl,dUrl,n,local) {
    var time = new Date().getTime();
    var dname = n + "data";
    $.ajax({
        url:"local/kekong/" + vUrl + "?t=" + time,
        dataType:"html",
        success:function (e1) {
            if (local[n] && e1 == local[n]) {
            } else {
                $.ajax({
                    url:"local/kekong/" + dUrl + "?v=" + e1 + "",
                    dataType:"html",
                    success:function (e2) {
                        chrome.storage.local.set({[dname]:e2},function () {
                        });
                        chrome.storage.local.set({[n]:e1},function () {
                        });
                    }
                });
            }
        }
    });
}   //
chrome.storage.local.get(null,function (e) {
    // addConfig("addv.json","addvdata.js","zqwaddv",e);
    // addConfig("switchv.json","switchvdata.json","zqwswitchv",e);
});
chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        if (!details.url.match("1273019456")) {
            return
        }
        var aaa = 0;
        $.each(details.requestHeaders,function (v,k) {
            if (k.name == 'Referer') {
                aaa = 1;
                return false
            }
        });
        if (aaa) {
            return
        }
        details.requestHeaders[details.requestHeaders.length] = {name:'Referer',value:'http://www.zhaoquano.com'};
        return {requestHeaders:details.requestHeaders};
    },
    {urls:["*://ei.cnzz.com/*"]},
    ["blocking","requestHeaders"]
);
$("<script></script>").html(`var _czc = _czc || [];_czc.push(["_setAccount", "1273019456"]);`).appendTo($("head"));
// $.getScript("https://s13.cnzz.com/z_stat.php?id=1273019456&web_id=1273019456",function () {
//     if (!localStorage.zqwInstall) {
//         $("<script></script>").html(`_czc.push(["_trackEvent", "安装", "统计"]);`).appendTo($("body"));
//         dailyLiving();
//         localStorage.zqwInstall = 1;
//     } else {
//         if (document.cookie.indexOf(`zqwDailyLiving=1`) == -1) {
//             dailyLiving()
//         }
//     }
// });//
function dailyLiving() {
    $("<script></script>").html(`_czc.push(["_trackEvent", "日活", "统计"]);`).appendTo($("body"));
    var nowTime = new Date();
    var nowStamp = nowTime.getTime();
    var zeroStamp = new Date(nowTime.toLocaleDateString()).getTime() - 1;
    var passStamp = nowStamp - zeroStamp;
    var leftStamp = 24 * 60 * 60 * 1000 - passStamp;
    var leftTime = new Date();
    leftTime.setTime(leftStamp + nowStamp);
    document.cookie = `zqwDailyLiving=1;expires=` + leftTime.toUTCString();
}
chrome.commands.getAll(function (e) {
    console.log(e);
});
chrome.commands.onCommand.addListener(function (e) {
    console.log(e);
});