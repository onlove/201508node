跨域
1.jsonp
原理
- script元素可以作为一种ajax传输协议
- 只需要设置script元素的src属性并且插入到DOM中，浏览器就会发出一个HTTP请求到src所指向的URL
- script不受同源策略的影响
- script元素会自动下载并执下载的数据
- 使用这种script元素来进行Ajax数据的传输的技术就叫JSONP，也可以是JSON-Padding
//服务器不可以返回这样的数据
['baidu','telnet']
//服务器会返回一个这样的响应
functionName(['baidu','telnet'])
其中的functionName必须是在window下访问的名称