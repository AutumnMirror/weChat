const express = require("express");
const wechat = require('wechat');
const https = require('https');
const app = express();

const config = {
  token: 'weixin',
  appid: 'wx1c9bf5bbd5d400bf',
  encodingAESKey: 'FBGVi4gxVcEYFdvjwL9kTPLPL8T3MpJlkqoaSwi0dR3',
  checkSignature: true // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
};

// 静态资源
app.use(express.static('public'));


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

  // 如果用户输入获取我的基本信息
  if (message.Content === '基本信息') {
    // 使用 获取用户基本信息的接口获取当前用户的基本信息
    let accToKen = '19_ykQM5aekyrIQXEL9EZYjFzPIvE9jX8f_oDkNkQlvHpBRjy2YkPcyXqvGs3oRSaOPkuV087pX5vdcj63LbrD1XJnx291EoXdZChdXWPl_R887eDBT6iVbA_NLL6P26fYHZaSknWwer5NacFmKRYVbAJAAHE';
    let openid = message.FromUserName;
    let url = `
    https://api.weixin.qq.com/cgi-bin/user/info?access_token=${accToKen}&openid=${openid}&lang=zh_CN
    `
    https.get(url, (response) => {
      let buf = '';
      response.on('data', (chunk) => {
        buf += chunk;
      })
      response.on('end', () => {
        console.log(buf);
        res.reply(buf);
      })
    })

    return;
  }

  res.reply(message.Content);
}))


app.listen(80);
