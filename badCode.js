// パターン1: 基本的な問題
var userName = "田中"; // var使用
let userAge = 25;
let userEmail = "tanaka@example.com";
console.log(userName); // console.log使用

function checkUser() {
    if (userAge == 25) { // == 使用
        return true
    }
    return false;
}

let unusedVariable = "これは使われていない";