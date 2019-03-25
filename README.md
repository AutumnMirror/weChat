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
