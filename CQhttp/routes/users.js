var express = require('express');
var router = express.Router();
ApiClient = require('../index.js').ApiClient;
router.get('/',function (req,res,next) {
    var n = 0;
    var arr = [];
    var errorS = 0;
    const client = new ApiClient({
        'appkey':'24294846',
        'appsecret':'8d59d3cda2d437940e3d21bfdce71a4d',
        'url':'http://gw.api.taobao.com/router/rest'
    });
    var url = req.query.url;

    function count() {
        n++;
        if (n == 2) {
            if (errorS) {
                arr = [];
            }
            res.header("Access-Control-Allow-Origin","*");
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
            res.end(JSON.stringify(arr));
        }
    }

    client.execute('taobao.tbk.tpwd.create',
        {
            'text':'长度大于5个字符',
            'url':url
        },
        function (error,response) {
            if (!error) {
                if (response.data && response.data.model) {
                    arr[0] = response.data.model;
                } else {
                    errorS = 1;
                }
            } else {
                errorS = 1;
            }
            count()
        }
    );
    client.execute('taobao.tbk.spread.get',
        {
            'requests':{'url':url},
        },
        function (error,response) {
            if (!error) {
                if (response.results && response.results.tbk_spread && response.results.tbk_spread[0] && response.results.tbk_spread[0].content) {
                    arr[1] = response.results.tbk_spread[0].content;
                } else {
                    errorS = 1;
                }
            } else {
                errorS = 1;
            }
            count()
        }
    );
});
module.exports = router;