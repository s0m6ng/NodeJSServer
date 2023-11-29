"use strict"

const { log } = require("console")

function Add(a, b) {
    console.log("sum = ", a + b)
}

function Test_function() {
    const car = {
        brand: "기아",
        model: "카니발",
        year: 2006
    }
    function updateBrand(obj) {
        obj.brand = "쌍용"
        const car2 = {
            brand: "르노"
        }
        obj = car2
        console.log('brand = ' + obj.brand)
    }
    console.log('brand = ' + car.brand)
    updateBrand(car)
    console.log('brand = ' + car.brand)
    // car.brand = "벤츠",
    // console.log('brand = ' + car.brand)
}
//Test_function()

const multiply = new Function('x', 'y', 'return x * y')
//console.log(multiply(10, 10))

const multiply2 = function (x, y) {
    return x * y
}
//console.log(multiply2(10, 20))

const multiply3 = function funcName(x, y) {
    return x * y
}
//console.log(multiply3(10, 30))

const multiply4 = (x, y) => x * y
//console.log(multiply4(10, 40))

const multiObj = {
    multiply5(x, y) {
        return x, y
    }
}
class Animal{
    Sound(){
        console.log("멍멍")
    }
}
module.exports = {
    Add,
    Test_function,
    multiply,
    multiply2,
    multiply3,
    multiply4,
    multiObj,
}