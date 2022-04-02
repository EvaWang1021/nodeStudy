const fs =require('fs')
fs.readFile('./files/成绩.txt','utf-8',function(err,dataStr){
    if(err){
        return console.log('读取文件失败' + err.message)
    }
    console.log('读取文件成功' + dataStr)
// 4.1先把成绩的数据，按照空格进行分割
const arrOld = dataStr.split(' ')
// 4.2循环后分割的数组，对每一项数据，进行字符串的替换操作
const arrNew = []
arrOld.forEach(item => {
    arrNew.push(item.replace('=',':'))
})
// 4.3把新数组中的每一项进行合并，得到一个新的字符串
const newStr = arrNew.join('\r\n')
console.log(newStr)

// 把整理的成绩写入到文件中
fs.writeFile('./files/2.txt', newStr ,function(err){
    if(err){
        return console.log('写入文件失败' + err.message)
    }
    console.log('写入文件成功!')
})
})