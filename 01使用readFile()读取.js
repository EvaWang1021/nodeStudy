// 1.导入fs模块，操作文件
const fs = require('fs')

// 2.调用fs.readFile读取文件
fs.readFile('./files/1.txt','utf-8',function(err,dataStr){
    // 失败打印结果
    // 读取成功，err为null
    // 读取失败，err为错误对象，dataStr为undefined
    console.log(err)
    console.log('----------')
    // 打印成功结果
    console.log(dataStr)    
})