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

跨域资源共享
- XHR2中览器选择允许发送合适的CORS(cross-origin resoure shaing跨域资源共享)来跨域请求数据
- 在标浏览器中依旧使用XMLHttpRequest对象
设置响应头
- 当浏览器使用跨域资源共享时，服务器都必须在响应头中设置Access-Control-Allow-Origin
response.write(200,{"Access-Control-Allow-Origin":"*"})
- 其中*代码允许任何源请求本服务器，也可以固定服务器的源，比如{"Access-Control-Allow-Origin":"localhost:66325"}
- 只允许URL为localhost:66325的请求源请求本服务器