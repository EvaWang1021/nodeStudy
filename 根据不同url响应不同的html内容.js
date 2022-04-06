const http = require('http')
const server = http.createServer()

// 发送request请求，触发事件
server.on('request',(req,res) => {
    // 获取url地址
    const url = req.url
    // 定义content?????????????为什么这里可以用h1标签？
    let content = '<h1>404</h1>'
    // 判断url
    if(url === '/' || url === '/index.html'){
        content = '<h1>首页</h1>'
    }
    else if(url === '/about.html'){
        content = '<h1>about界面<h1>'
    }
    // setHeader防止中文乱码
    res.setHeader('Content-Type','text/html;charset=utf-8')
    // 把内容发送给服务端
    res.end(content)
})

// 启动服务器
server.listen(80, ()=>{
    console.log('server running at http://127.0.0.1:80')
})
