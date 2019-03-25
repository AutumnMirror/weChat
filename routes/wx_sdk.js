const express = require('express');
const router = express.Router();



// http://pvtsy9.natappfree.cc/wx/sdk
router.get('/sdk', (req, res) => {
  // 最终返回给前端它需要的数据

  // 1. timestamp(时间戳)
  // 2. nonceStr(随机串)
  // 3. signature(签名)
    // 3.1 随机字符串 √
    // 3.2 timestamp √
    // 3.3 url (当前网页的URL，不包含#及其后面部分) 前端传递
    // 3.4 jsapi_ticket √
      // 3.4.1 access_token √
  


})

module.exports = router;
