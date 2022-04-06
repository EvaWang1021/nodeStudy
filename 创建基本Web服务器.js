// 1.导入http模块
const http = require('http')
// 2.创建web服务器实例
const server = http.createServer()
// 3.绑定on事件，一旦访问服务器，触发request
server.on('request',(req,res) =>{
    console.log('Someone visit our webServer')
    // req是请求对象，包含客户端数据和属性
    // ????占位符不起作用:是模板字符串，要用反引号
    const str = `你的 request url is ${req.url},and request mesthod is ${req.method}`
    // 为防止中文显示乱码的问题，需要设置响应头Content-Type的值为text/html; charset=utf-8
    // 调用setHeader
    // res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // res是响应对象，可以向客户端发送指定的内容，并结束这次请求的处理过程
    res.end(str)
})
// 4.启动服务器
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1:80')
})