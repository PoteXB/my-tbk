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
var swith = 1;          //
var info = "";
var title = "";
var userId = "";
var itemId = "";
window.addEventListener("message",function (event) {
    start(event);
},false);
function start(event) {
    if (swith) {
        swith = 0;
        info = JSON.parse(event.data.info);
        console.log(info);
        title = info.message;
        userId = info.group_id;
        if (title.match("CQ:share") || title.match("https://detail.tmall.com") || title.match("https://item.taobao.com")) {
            if (title.match("CQ:share")) {
                title = title.match(/url=([\s\S]*)]/)[1];
                console.log("商品链接");
            } else {
                console.log("含其他内容的商品链接");
                title = title.replace(/&amp;/g,"&");
            }
            itemId = getParam(title,"id");
            console.log(itemId);
            if (!itemId) {
                answer(0);  //链接里面不含id
                return;
            }
            var ajaxTimeoutTest = $.ajax({
                url:"http://192.168.3.80:3000/?id=" + itemId,
                dataType:"json",
                timeout:3000,
                success:function (d) {
                    if (d.results && d.results.n_tbk_item && d.results.n_tbk_item[0]) {
                        title = d.results.n_tbk_item[0].title;
                        getDan();
                    } else {
                        answer(1);  //链接里的id请求不到title未加入推广
                    }
                },
                error:function () {
                    answer(3);  //链接有id请求接口出问题
                },
                complete:function (XMLHttpRequest,status) {
                    if (status == 'timeout') {
                        ajaxTimeoutTest.abort();
                    }
                }
            });
        } else if (title.match("有没有")) {
            console.log("关键词有没有");
            title = title.split("有没有")[1].trim();
            console.log(title);
            getDan();
        } else if (title.match("2543505810")) {
            console.log("@机器人");
            title = title.split("[CQ:at,qq=2543505810]")[1].trim();
            console.log(title);
            getDan();
        } else {
            console.log("4");
            answer(0);  //普通对话不含任何需要回答的关键词
        }
    } else {
        setInterval(function () {
            start(event);
        },100)
    }
}
function postMsg(group_id,message) {
    $.ajax({
        url:"http://192.168.3.80:5700/send_group_msg",
        type:"get",
        dataType:"json",
        data:{
            group_id:group_id,
            message:message
        },
        complete:function () {
            swith = 1;
            itemId = "";
        }
    });
}
function getDan() {
    chrome.extension.sendMessage({
        name:"getCook",url:"https://www.taobao.com/",key:"_m_h5_tk"
    },function (d) {
        if (d && d[0] && d[0].value) {
            var time = Date.now();
            var getH5CouNum = 0;
            var page = 1;
            var s = `{"q":"${title}","pid":"mm_114987072_44144030_486458419","page":${page},"useItemCouponPage":"1","lunaUrlParam": "{'algo_sort':'mixcoupon','rank':'rank_profile:FirstRankScorer_atbh5','PS':'tk_item_score_atbh5','appBucket':'h'}"}`;
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
                                        answer(4,k);    //标题查找有优惠券
                                        hasSwi = 0;
                                        return false;
                                    }
                                });
                                if (hasSwi) {
                                    answer(5);  //标题搜索有商品但是没优惠券
                                }
                                return
                            }
                            $.each(data,function (v,k) {
                                if (k.nid == itemId) {
                                    if (k.couponAmount) {
                                        answer(2,k);    //链接查找有优惠券
                                    } else {
                                        answer(1);  //链接查找能匹配ID无优惠券
                                    }
                                    hasSwi = 0;
                                    return false;
                                }
                            });
                            if (hasSwi) {
                                if (page == 3) {
                                    answer(1);  //链接查找能匹配不到ID
                                    return false
                                } else {
                                    page++;
                                    getDan();
                                }
                            }
                        } else {
                            if (!itemId) {
                                answer(5);  //标题查找无数据
                            } else {
                                answer(1);  //链接查找无数据
                            }
                        }
                    } else {
                        getH5CouNum++;
                        if (getH5CouNum == 3) {
                            if (!itemId) {
                                answer(5);  //标题三次请求过期
                            } else {
                                answer(1);  //链接三次请求过期
                            }
                            return false
                        } else {
                            getDan();
                        }
                    }
                },
                error:function () {
                    answer(3);  //淘宝优惠券接口异常
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
function answer(e,k) {
    if (e == 0) {
        swith = 1;
        itemId = "";
    } else if (e == 1) {
        postMsg(userId,"此链接暂无优惠券.请试试输入:标题+【你想找的商品名或关键字】,如:标题+五芳斋粽子");
    } else if (e == 3) {
        postMsg(userId,`请稍后再来试试`);
    } else if (e == 2 || e == 4) {
        var clickUrl = "https://uland.taobao.com/coupon/edetail?e=" + getParam(k.clickUrl,"e");
        $("#my-jiqiren").html(k.title);
        var title = $("#my-jiqiren").text();
        var baoyou = (k.realPostFee > 0) ? "" : "【包邮】";
        var price = k.discountPrice;
        var nprice = (k.discountPrice - k.couponAmount / 100).toFixed(2);
        var couponAmount = k.couponAmount / 100;
        $.ajax({
            url:"http://192.168.3.80:3000/users?url=" + clickUrl,
            dataType:"json",
            success:function (d) {
                if (!d) {
                    answer(3);  //淘口令异常
                    return
                }
                var short = d[1];
                var tkl = d[0];
                var html = `
 ${title}${baoyou}
【优惠券】${couponAmount}元
【下单链接】${short}
-----------------
复制这条信息，${tkl} ，打开【手机淘宝】即可查看
                `;
                if (e == 2) {
                    postMsg(userId,` 此链接商品找到优惠券 ${html}`);
                } else {
                    postMsg(userId,` 此标题商品最匹配优惠券 ${html}`);
                }
            },
            error:function () {
                answer(3);  //淘口令接口异常
            }
        });
    } else if (e == 5) {
        postMsg(userId,`暂无优惠券,缩短标题关键词试试`);
    }
}