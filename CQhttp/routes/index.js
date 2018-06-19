var express = require('express');
var router = express.Router();
ApiClient = require('../index.js').ApiClient;
router.get('/',function (req,res,next) {
    const client = new ApiClient({
        'appkey':'24294846',
        'appsecret':'8d59d3cda2d437940e3d21bfdce71a4d',
        'url':'http://gw.api.taobao.com/router/rest'
    });
    var id = req.query.id;
    client.execute('taobao.tbk.item.info.get',
        {
            'fields':'num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url',
            'platform':'1',
            'num_iids':id
        },
        function (error,response) {
            if (!error) {
                res.header("Access-Control-Allow-Origin","*");
                res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
                res.end(JSON.stringify(response));
            } else {
                console.log(error);
            }
        }
    );
});
module.exports = router;
