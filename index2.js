// parameters.js

//if(process.argv.length < 3){
 //   console.log('usage: node parameters.js joe')
  //  return
 // }
 // console.log("Hello, %s!",process.argv[2])
  
 //'node parameters.js icaro'

const CryptoJS = require("crypto-js") // o node acha ele sozinho
module.exports = {
  gibberish (process.argv[2]){
    // https://stackoverflow.com/questions/11889329/word-array-to-string
    return CryptoJS.SHA256(word).toString(CryptoJS.enc.Base64)
  }
}
const saida = 
console.log(const gibberish = require("./lib2").gibberish)

// main.js
//const gibberish = require("./lib2").gibberish // note o './' dando o caminho
//console.log(gibberish("Hello you!"))
// ZmwiiWiOjA8CFPL64+ADb0wl3R2dA+cjZ4SyjJnw3u0=
