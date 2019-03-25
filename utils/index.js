const https = require('https');
const fs = require('fs');
const path = require('path');
const ACCESSTOKENFILE = path.resolve(__dirname, '../json/access_token.json');
const JSAPITICKETFILE = path.resolve(__dirname, '../json/jsapi_ticket.json');
/**
 * 发送请求的公用方法，目前只支持 get
 * @param {String} url 请求地址
 * @return Promise
 */
const request = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
    let buf = '';
    res.on('data', (chunk) => {
      buf += chunk;
    })
    res.on('end', () => {
      let result = JSON.parse(buf);
      resolve(result);
    })
  })
 })
}


// 获取当前的时间戳
const getTimestamp = () => {
  return parseInt(new Date().getTime() / 1000);
}

// 获取随机的字符串
const getNonceStr = () => {
  return Math.random().toString(36).substr(2, 15);
}

// 获取access_token
const getAccessToKen = () => {
  return new Promise(async (resolve, reject) => {
    // 调用这个方法之前，先判断之前有没有存在过，如果存在并且没有过期，就使用之前的。
    // 否则重新调用微信的接口，获取一个新的access_token 返回出去，并且将其存储起来。
    var oldAccessToKen = JSON.parse(fs.readFileSync(ACCESSTOKENFILE))
    if(getTimestamp() < oldAccessToKen.expiresTime) {
      // 没有过期
      resolve(oldAccessToKen.access_token);
    } else {
      // 过期了
      let url = `
      https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx1c9bf5bbd5d400bf&secret=f369de3ac73c34bcf4a7f0739b351516
      `
      var obj = await request(url);
      var expiresTime = getTimestamp() + 7000;
      obj.expiresTime = expiresTime;
      fs.writeFileSync(ACCESSTOKENFILE, JSON.stringify(obj));
      resolve(obj.access_token);
    }
  })
}

// 获取jsapi_ticket
const getTicket = () => {
  return new Promise( async (resolve, reject) => {
    var oldTicket = JSON.parse(fs.readFileSync(JSAPITICKETFILE));
    if(getTimestamp() < oldTicket.expiresTime) {
      // 未过期
      resolve(oldTicket.ticket);
    } else {
      // 过期
      var token = await getAccessToKen();
      let url = `
      https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${token}&type=jsapi
      `;
      let obj = await request(url);
      var expiresTime = getTimestamp() + 7000;
      obj.expiresTime = expiresTime;
      fs.writeFileSync(JSAPITICKETFILE, JSON.stringify(obj));
      resolve(obj.ticket);
    }
  })
}

async function main() {
  var ticket = await getTicket();
  console.log(ticket);
}

main();
