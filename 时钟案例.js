// step1:创建两个正则，匹配style和script标签
// 1.1导入fs
const fs = require('fs')
// 1.2导入path
const path = require('path')

// 1.3定义正则表达式，匹配style和script标签，\s代表任意空白字符\S代表匹配任意非空白字符
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// step2:读取html
//2.1调用fs.readFile读取文件
fs.readFile(path.join(__dirname,'clock/index.html'),'utf-8',function(err,dataStr){
    if(err){
        console.log('读取文件失败' + err.message)
    }
    // 区分三个文件
    // resolveCSS(dataStr)
    // resolveJS(dataStr)
    resolveHTML(dataStr)

})

// step3: 定义处理css的方法
function resolveCSS(htmlStr){
    // 3.1使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr)
    // 3.2 将提取出来的央视字符串，进行字符串的replace操作
    const newCSS = r1[0].replace('<style>','').replace('</style>','')
    // 3.3 调用fs.writeFile，将提取样式写到clock目录下的index.css文件
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, err => {
        if(err){
            return console.log('写入CSS样式失败' + err.message)
        }
        console.log('写入样式文件成功')
    })
}

// step4: 定义处理js的方法
function resolveJS(htmlStr){
    // 3.1使用正则提取需要的内容
    const r2 = regScript.exec(htmlStr)
    // console.log('###' + r2)
    // 3.2 将提取出来的央视字符串，进行字符串的replace操作
    const newJS = r2[0].replace('<script>','').replace('</script>','')
    // 3.3 调用fs.writeFile，将提取样式写到clock目录下的index.css文件
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, err => {
        if(err){
            return console.log('写入JS样式失败' + err.message)
        }
        console.log('写入样式文件成功')
    })
}

// step5: 定义处理html结构的方法
function resolveHTML(htmlStr){
    // 5.1调用replace方法，把内嵌的style和script标签，替换为外联的link和script标签
    const newHTML = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css"/>').replace(regScript,'<script src="./index.js"></script>')
    // 5.2 写入html文件
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, err => {
        if(err){
            return console.log('写入html失败' + err.message)
        }
        console.log('写入html文件成功')
    })
}

