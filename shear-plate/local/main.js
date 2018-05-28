// var cssStyle = '';
var cssStyle = '#moGu-copy{height:32px;width:44px;font-family:"Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","Heiti SC","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;font-size:14px;text-align:center;line-height:32px;color:#fff;background-color:#4395ff;border-radius:2px;cursor:pointer;z-index:99999;position:absolute}#moGu-paste{font-family:"Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","Heiti SC","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;font-size:14px;text-align:center;color:#fff;background-color:#4395ff;border-radius:2px;z-index:99999;position:absolute}#moGu-paste ul{list-style:none;padding:0;margin:0}#moGu-paste li{list-style:none;height:20px;line-height:20px;max-width:200px;padding:0 20px;margin:5px 0;cursor:pointer;overflow:hidden}#moGu-paste li:hover{color:#333}';
$("<style></style>").html(cssStyle).appendTo("head");
var value = "";
var copyVal = "";
chrome.storage.local.get(null,function (e) {
    copyVal = e.moGuVal ? e.moGuVal : [];
    console.log(copyVal);
    start();
});
function start() {
    $(document).mousedown(function (e) {
        console.log(1);
        if (e.target.id == "moGu-copy") {
            return;
        }
        $("#moGu-copy").remove();
    });
    $(document).mouseup(function (e) {
        var nowalue = window.getSelection().toString();
        if (nowalue) {
            value = nowalue;
            $("body").after(`<div id="moGu-copy">复制</div>`);
            $("#moGu-copy").css({"left":e.pageX + 10,"top":e.pageY + 10})
        }
    });
    $(document).on("click","#moGu-copy",function () {
        var input = $("<input style='position:fixed;top:-99999999px'>");
        input.val(value);
        $("body").append(input);
        input[0].select();
        document.execCommand("Copy");
        copyVal.unshift(value);
        var newCopyVal = copyVal.slice(0,5);
        chrome.storage.local.set({'moGuVal':newCopyVal});
        input.remove();
        $("#moGu-copy").remove();
    });
    $(document).on("focus","input[type=text],textarea",function () {
        var html = "";
        $.each(copyVal,function (k,v) {
            if (k == 5) {
                return false
            }
            html += `<li>${v}</li>`
        });
        $("body").after(`<div id="moGu-paste">
            <ul>${html}</ul>
        </div>`);
        $("#moGu-paste").css({"left":$(this).offset().left + $(this).outerWidth() + 20,"top":$(this).offset().top})
    });
    $(document).on("blur","input[type=text],textarea",function () {
        console.log(2);
        $("#moGu-paste").remove();
    });
}
$(document).off("selectstart");
// $(document).on("selectstart",function () {
//     console.log(1);
// });