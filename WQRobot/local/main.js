function md5(t) {
    function e(t,e) {
        return t << e | t >>> 32 - e
    }

    function n(t,e) {
        var n,i,r,o,a;
        return r = 2147483648 & t, o = 2147483648 & e, n = 1073741824 & t, i = 1073741824 & e, a = (1073741823 & t) + (1073741823 & e), n & i ? 2147483648 ^ a ^ r ^ o : n | i ? 1073741824 & a ? 3221225472 ^ a ^ r ^ o : 1073741824 ^ a ^ r ^ o : a ^ r ^ o
    }

    function i(t,e,n) {
        return t & e | ~t & n
    }

    function r(t,e,n) {
        return t & n | e & ~n
    }

    function o(t,e,n) {
        return t ^ e ^ n
    }

    function a(t,e,n) {
        return e ^ (t | ~n)
    }

    function s(t,r,o,a,s,u,l) {
        return t = n(t,n(n(i(r,o,a),s),l)), n(e(t,u),r)
    }

    function u(t,i,o,a,s,u,l) {
        return t = n(t,n(n(r(i,o,a),s),l)), n(e(t,u),i)
    }

    function l(t,i,r,a,s,u,l) {
        return t = n(t,n(n(o(i,r,a),s),l)), n(e(t,u),i)
    }

    function c(t,i,r,o,s,u,l) {
        return t = n(t,n(n(a(i,r,o),s),l)), n(e(t,u),i)
    }

    function p(t) {
        var e,n,i = "",r = "";
        for (n = 0; 3 >= n; n++) e = t >>> 8 * n & 255, r = "0" + e.toString(16), i += r.substr(r.length - 2,2);
        return i
    }

    var f,d,h,g,m,v,y,b,k,x = [];
    for (t = function (t) {
        t = t.replace(/\\r\\n/g,"\\n");
        for (var e = "",n = 0; n < t.length; n++) {
            var i = t.charCodeAt(n);
            128 > i ? e += String.fromCharCode(i) : i > 127 && 2048 > i ? (e += String.fromCharCode(i >> 6 | 192), e += String.fromCharCode(63 & i | 128)) : (e += String.fromCharCode(i >> 12 | 224), e += String.fromCharCode(i >> 6 & 63 | 128), e += String.fromCharCode(63 & i | 128))
        }
        return e
    }(t), x = function (t) {
        for (var e,n = t.length,i = n + 8,r = (i - i % 64) / 64,o = 16 * (r + 1),a = new Array(o - 1),s = 0,u = 0; n > u;) e = (u - u % 4) / 4, s = u % 4 * 8, a[e] = a[e] | t.charCodeAt(u) << s, u++;
        return e = (u - u % 4) / 4, s = u % 4 * 8, a[e] = a[e] | 128 << s, a[o - 2] = n << 3, a[o - 1] = n >>> 29, a
    }(t), v = 1732584193, y = 4023233417, b = 2562383102, k = 271733878, f = 0; f < x.length; f += 16) d = v, h = y, g = b, m = k, v = s(v,y,b,k,x[f + 0],7,3614090360), k = s(k,v,y,b,x[f + 1],12,3905402710), b = s(b,k,v,y,x[f + 2],17,606105819), y = s(y,b,k,v,x[f + 3],22,3250441966), v = s(v,y,b,k,x[f + 4],7,4118548399), k = s(k,v,y,b,x[f + 5],12,1200080426), b = s(b,k,v,y,x[f + 6],17,2821735955), y = s(y,b,k,v,x[f + 7],22,4249261313), v = s(v,y,b,k,x[f + 8],7,1770035416), k = s(k,v,y,b,x[f + 9],12,2336552879), b = s(b,k,v,y,x[f + 10],17,4294925233), y = s(y,b,k,v,x[f + 11],22,2304563134), v = s(v,y,b,k,x[f + 12],7,1804603682), k = s(k,v,y,b,x[f + 13],12,4254626195), b = s(b,k,v,y,x[f + 14],17,2792965006), y = s(y,b,k,v,x[f + 15],22,1236535329), v = u(v,y,b,k,x[f + 1],5,4129170786), k = u(k,v,y,b,x[f + 6],9,3225465664), b = u(b,k,v,y,x[f + 11],14,643717713), y = u(y,b,k,v,x[f + 0],20,3921069994), v = u(v,y,b,k,x[f + 5],5,3593408605), k = u(k,v,y,b,x[f + 10],9,38016083), b = u(b,k,v,y,x[f + 15],14,3634488961), y = u(y,b,k,v,x[f + 4],20,3889429448), v = u(v,y,b,k,x[f + 9],5,568446438), k = u(k,v,y,b,x[f + 14],9,3275163606), b = u(b,k,v,y,x[f + 3],14,4107603335), y = u(y,b,k,v,x[f + 8],20,1163531501), v = u(v,y,b,k,x[f + 13],5,2850285829), k = u(k,v,y,b,x[f + 2],9,4243563512), b = u(b,k,v,y,x[f + 7],14,1735328473), y = u(y,b,k,v,x[f + 12],20,2368359562), v = l(v,y,b,k,x[f + 5],4,4294588738), k = l(k,v,y,b,x[f + 8],11,2272392833), b = l(b,k,v,y,x[f + 11],16,1839030562), y = l(y,b,k,v,x[f + 14],23,4259657740), v = l(v,y,b,k,x[f + 1],4,2763975236), k = l(k,v,y,b,x[f + 4],11,1272893353), b = l(b,k,v,y,x[f + 7],16,4139469664), y = l(y,b,k,v,x[f + 10],23,3200236656), v = l(v,y,b,k,x[f + 13],4,681279174), k = l(k,v,y,b,x[f + 0],11,3936430074), b = l(b,k,v,y,x[f + 3],16,3572445317), y = l(y,b,k,v,x[f + 6],23,76029189), v = l(v,y,b,k,x[f + 9],4,3654602809), k = l(k,v,y,b,x[f + 12],11,3873151461), b = l(b,k,v,y,x[f + 15],16,530742520), y = l(y,b,k,v,x[f + 2],23,3299628645), v = c(v,y,b,k,x[f + 0],6,4096336452), k = c(k,v,y,b,x[f + 7],10,1126891415), b = c(b,k,v,y,x[f + 14],15,2878612391), y = c(y,b,k,v,x[f + 5],21,4237533241), v = c(v,y,b,k,x[f + 12],6,1700485571), k = c(k,v,y,b,x[f + 3],10,2399980690), b = c(b,k,v,y,x[f + 10],15,4293915773), y = c(y,b,k,v,x[f + 1],21,2240044497), v = c(v,y,b,k,x[f + 8],6,1873313359), k = c(k,v,y,b,x[f + 15],10,4264355552), b = c(b,k,v,y,x[f + 6],15,2734768916), y = c(y,b,k,v,x[f + 13],21,1309151649), v = c(v,y,b,k,x[f + 4],6,4149444226), k = c(k,v,y,b,x[f + 11],10,3174756917), b = c(b,k,v,y,x[f + 2],15,718787259), y = c(y,b,k,v,x[f + 9],21,3951481745), v = n(v,d), y = n(y,h), b = n(b,g), k = n(k,m);
    return (p(v) + p(y) + p(b) + p(k)).toLowerCase()
}
function getParam(url,name) {
    url = url.split("?")[1] ? url.split("?")[1] : "";
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = url.substr(0).match(reg);
    if (r != null) return r[2];
    return null;
}
setTimeout(function () {window.location.reload(true);},1800000);
var page = 1;
var getH5CouNum = 0;    //
var itemId = "";        //
var title = "";         //
var swith = 1;          //
var swith1 = 1;          //
var eventArr = [];
var msg_id = Date.parse(new Date()).toString();
msg_id = msg_id.substr(msg_id.length - 7).toString() + "1";
var useId = "";
var lunxun = setInterval(function () {
    if ($("#current_chat_list li").length) {
        startClick();
        clearInterval(lunxun);
    }
},1000);
function startClick() {
    $.each($("#current_chat_list li"),function () {
        $(this).click();
        $("#panelRightButton-5").click();
    })
}
$("body").after(`<div id="my-jiqiren" style="display:none"></div>`);
function pushArr() {
    if (swith) {
        swith = 0;
        var dom = $("#current_chat_list li.notify:first");
        var id = dom.attr("_uin");
        dom.click();
        var value = $("#panelBody-5 .chat_content:last").text();
        var name = $("#panelBody-5 .chat_nick:last").text();
        var nowId = $("#panelBody-5 .chat_content:last").parent().attr("_sender_uin");
        useId = useId ? useId : getParam($(".avatar_wrap img").attr("src"),"nk");
        if (useId == nowId) {
            $("#panelRightButton-5").click();
            swith = 1;
            return;
        }
        console.log("收到群消息" + "id" + id);
        console.log("收到群消息" + "内容" + value);
        eventArr.push({id:id,val:value,name:name});
        $("#panelRightButton-5").click();
        swith = 1;
        start();
    } else {
        setTimeout(function () {
            pushArr()
        },100)
    }
}
chrome.extension.onMessage.addListener(function (request) {
    if (request.name == "QQ") {
        if ($("#current_chat_list li.notify").length) {
            pushArr();
        }
    }
    return true;
});
function start() {
    if (swith1) {
        swith1 = 0;
        var value = eventArr[0].val;
        if (value.match("item.taobao.com/item.htm") || value.match("detail.tmall.com/item.htm")) {
            itemId = getParam(value,"id");
            if (!itemId) {
                answer(0);
                return;
            }
            $.ajax({
                url:"http://192.168.3.80:3000/?id=" + itemId,
                dataType:"json",
                success:function (d) {
                    if (d.results && d.results.n_tbk_item && d.results.n_tbk_item[0]) {
                        title = d.results.n_tbk_item[0].title;
                        getDan();
                    } else {
                        answer(1);
                    }
                },
                error:function () {
                    answer(3);
                }
            });
        } else if (value.match("标题+")) {
            value = value.split("标题+")[1].trim();
            title = value;
            getDan();
        } else if (value.match("@帅哥管家")) {
            value = value.split("@帅哥管家")[1].trim();
            title = value;
            getDan();
        } else {
            answer(0);
        }
    } else {
        setTimeout(function () {
            start(value)
        },100)
    }
}
function getDan() {
    chrome.extension.sendMessage({
        name:"getCook",url:"https://www.taobao.com/",key:"_m_h5_tk"
    },function (d) {
        if (d && d[0] && d[0].value) {
            var time = Date.now();
            var s = `{"q":"${title}","pid":"","page":${page},"useItemCouponPage":"1","lunaUrlParam": "{'algo_sort':'mixcoupon','rank':'rank_profile:FirstRankScorer_atbh5','PS':'tk_item_score_atbh5','appBucket':'h'}"}`;
            $.ajax({
                url:"https://acs.m.taobao.com/h5/mtop.aitaobao.item.search/7.0/",type:"get",dataType:"json",
                data:{
                    v:"7.0",api:"mtop.aitaobao.item.search",appKey:"12574478",t:time,
                    sign:md5(d[0].value.split("_")[0] + "&" + time + "&12574478&" + s),data:s
                },
                success:function (r) {
                    if (r && r.ret && r.ret[0] && r.ret[0].match("调用成功")) {
                        if (r && r.data && r.data.items && r.data.items.length) {
                            var data = r.data.items;
                            var hasSwi = 1;
                            if (!itemId) {
                                $.each(data,function (v,k) {
                                    if (k.couponAmount) {
                                        answer(4,k);
                                        hasSwi = 0;
                                        return false;
                                    }
                                });
                                if (hasSwi) {
                                    answer(5);
                                }
                                return
                            }
                            $.each(data,function (v,k) {
                                if (k.nid == itemId) {
                                    if (k.couponAmount) {
                                        answer(2,k);
                                    } else {
                                        answer(1);
                                    }
                                    hasSwi = 0;
                                    return false;
                                }
                            });
                            if (hasSwi) {
                                if (page == 3) {
                                    answer(1);
                                    return false
                                } else {
                                    page++;
                                    getDan();
                                }
                            }
                        } else {
                            if (!itemId) {
                                answer(5);
                            } else {
                                answer(1);
                            }
                        }
                    } else {
                        getH5CouNum++;
                        if (getH5CouNum == 3) {
                            answer(1);
                            getH5CouNum = 0;
                            return false
                        } else {
                            getDan();
                        }
                    }
                },
                error:function () {
                    answer(3);
                }
            });
        } else {
            $("body").append(`<iframe src="//h5.m.taobao.com/" id="douya-yangxue9527" style="display:none"></iframe>`);
            setTimeout(function () {
                $("#douya-yangxue9527").remove();
                getDan()
            },2000);
        }
    });
}
function answer(e,v) {
    if (e == 0) {
        eventArr.shift();
        msg_id = msg_id * 1 + 1;
        swith1 = 1;
        itemId = "";
    } else if (e == 1) {
        postMsg(`@${eventArr[0].name} 此链接暂无优惠券。请试试输入：标题+【你想找的商品名或关键字】，如：标题+五芳斋粽子`);
    } else if (e == 3) {
        postMsg(`@${eventArr[0].name} 请稍后再来试试`);
    } else if (e == 2 || e == 4) {
        var clickUrl = "https://uland.taobao.com/coupon/edetail?e=" + getParam(v.clickUrl,"e");
        $("#my-jiqiren").html(v.title);
        var title = $("#my-jiqiren").text();
        var baoyou = (v.realPostFee > 0) ? "" : "【包邮】";
        var price = v.discountPrice;
        var nprice = (v.discountPrice - v.couponAmount / 100).toFixed(2);
        var couponAmount = v.couponAmount / 100;
        $.ajax({
            url:"http://192.168.3.80:3000/users?url=" + clickUrl,
            dataType:"json",
            success:function (d) {
                if (!d) {
                    answer(3);
                    return
                }
                var short = d[1];
                var tkl = d[0];
                var html = `${title}${baoyou}\\n【优惠券】${couponAmount}元\\n【下单链接】${short}\\n-----------------\\n复制这条信息，${tkl} ，打开【手机淘宝】即可查看\\n`;
                if (e == 2) {
                    postMsg(`@${eventArr[0].name} 此链接商品找到优惠券 ${html}`);
                } else {
                    postMsg(`@${eventArr[0].name} 此标题商品最匹配优惠券 ${html}`);
                }
            },
            error:function () {
                answer(3);
            }
        });
    } else if (e == 5) {
        postMsg(`@${eventArr[0].name} 暂无优惠券,缩短标题关键词试试`);
    }
}
function postMsg(e) {
    $.ajax({
        url:"http://d1.web2.qq.com/channel/send_qun_msg2",
        type:"post",
        data:{"r":`{"group_uin":${eventArr[0].id},"content":"[\\"${e}\\",[\\"font\\",{\\"name\\":\\"宋体\\",\\"size\\":10,\\"style\\":[0,0,0],\\"color\\":\\"000000\\"}]]","face":534,"clientid":53999199,"msg_id":${msg_id},"psessionid":"8368046764001d636f6e6e7365727665725f77656271714031302e3133332e34312e383400001ad00000066b026e040015808a206d0000000a406172314338344a69526d0000002859185d94e66218548d1ecb1a12513c86126b3afb97a3c2955b1070324790733ddb059ab166de6857"}`},
        success:function () {
            eventArr.shift();
            msg_id = msg_id * 1 + 1;
            swith1 = 1;
            itemId = "";
        },
        error:function () {
            eventArr.shift();
            msg_id = msg_id * 1 + 1;
            swith1 = 1;
            itemId = "";
        }
    });
}