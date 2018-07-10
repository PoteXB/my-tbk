const CQHttp = require('cqhttp');
const axios = require('axios');
const bot = new CQHttp({
    apiRoot:'http://192.168.3.80:5700/',
    accessToken:'',
    secret:''
});
// console.log("\n重启酷Q接受消息服务3001\n");
bot.on('message',context => {
    axios.get('http://192.168.3.80:3002/get',{
        params:{
            info:context,
        }
    }).then(function () {
        // console.log("\n发送成功\n");
    }).catch(function (err) {
    });
});
bot.listen(3001,'192.168.3.80');