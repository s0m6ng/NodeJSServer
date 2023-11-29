"use strict"
//var, let, const
function Test_Var() {
    var a = 10
    if (a > 9) {
        var a = 30
        console.log("a = " + a)
    }
    console.log("a = " + a)
}

function Test_Let() {
    let a = 10
    if (a > 9) {
        let a = 30
        console.log("a = " + a)
    }
    console.log("a = " + a)
}

function Test_Var2() {
    let a = 10
    if (a > 9) {
        let a = 30
        console.log("a = " + a)
    }
    console.log("b = " + b)
    var b = 20
}

function Test_Let2() {
    let a = 10
    if (a > 9) {
        let a = 30
        console.log("a = " + a)
    }
    console.log("b = " + b)
    let b = 30
}

function Test_Const() {
    const a = 10
    if (a > 9) {
        console.log("a = " + a)
    }
    //a = 20
    //console.log("a = " + a)
}
module.exports = {
    Test_Var,
    Test_Let,
    Test_Var2,
    Test_Let2,
    Test_Const,
}
//Test_Var()
//Test_Let()
//Test_Var2()
//Test_Let2()
//Test_Const()