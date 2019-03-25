# 微信内的网页开发

> 我们这边让页面在微信中打开，通过一些配置，让我们页面可以调用得到微信提供的一些个api。
比如分享、相册

# JSSDK的使用步骤
1. 绑定安全域名。你的那个页面(url)需要在微信中使用JSSDK http://pvtsy9.natappfree.cc 需要将这个网址做一个绑定。
绑定到你的公众号上面。

2. 引入sdk文件

3. 通过config接口注入权限验证配置

wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，
    可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: '', // 必填，公众号的唯一标识
    timestamp: , // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '',// 必填，签名
    jsApiList: [
      "需要使用什么就写什么"
    ] // 必填，需要使用的JS接口列表
});

4. 使用 wx.ready || wx.error

5. 调用各种api功能

? wx.config 之前，前端需要先向后台发送一个ajax的请求




# 接入指南

分支：jieruzhinan

# access_token
  https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPIDsecret=APPSECRET
需要三个参数:
  grant_type: client_credential
  appid:      wx1c9bf5bbd5d400bf
  secret:     f369de3ac73c34bcf4a7f0739b351516

  https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx1c9bf5bbd5d400bf&secret=f369de3ac73c34bcf4a7f0739b351516

  19_ykQM5aekyrIQXEL9EZYjFzPIvE9jX8f_oDkNkQlvHpBRjy2YkPcyXqvGs3oRSaOPkuV087pX5vdcj63LbrD1XJnx291EoXdZChdXWPl_R887eDBT6iVbA_NLL6P26fYHZaSknWwer5NacFmKRYVbAJAAHE

# 实现获取粉丝基本信息

1. 需要调用微信提供的一个接口
  https://api.weixin.qq.com/cgi-bin/user/info?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN
需要三个参数:
  access_token：微信开发时一个很重要很重要的东西，叫做接口凭证
  openid:       直接在FromUserName
  lang

http://thirdwx.qlogo.cn/mmopen/kqBrZeNmdiaYfns4Ehz6MhSGD9bbI4ROL6RZHASKibjoicJMhicgP7CUEM9CDiaJkicurf2vmFqbrrQC3LQ0X8Uv1RMJENGR1dLowa/132
