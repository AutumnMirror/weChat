const express = require("express");
const wechat = require('wechat');
const app = express();

const config = {
  token: 'weixin',
  appid: 'wx0e41ae3cd6988f29',
  encodingAESKey: 'FBGVi4gxVcEYFdvjwL9kTPLPL8T3MpJlkqoaSwi0dR3',
  checkSignature: true // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
};

app.use('/wechat', wechat(config, (req, res, next) => {
  // wechat模块给我们的req对象上面添加的一些属性
  console.log(req.weixin);
  // res.reply(req.weixin.Content);
  let message = req.weixin;
  if (message.Content === '你好帅') {
    res.reply('你说的对');
    return;
  }
  else if(message.Content === '我爱你'){
    res.reply('我也爱你');
    return;
  }

  res.reply(message.Content);
}))


app.listen(80);
