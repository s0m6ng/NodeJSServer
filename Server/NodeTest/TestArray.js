"use strict"

function TestArray1() {
    const arr1 = new Array(1, 4, 5, 9)
    const arr2 = Array(1, 4, 5, 9)
    const arr3 = [1, 4, 5, 9]

    console.log(arr1)
}
//TestArray1()

function TestArr2() {
    const arr1 = new Array(5)
    const arr2 = Array(5)
    const arr3 = []
    console.log(arr1.length)
    console.log(arr2)
}
//TestArr2()

function TestArr3() {
    const obj = {};
    obj.jang = [];
    obj.jang.length = 3;
    obj.jang[0] = 2;
    obj.jang[1] = 5;
    obj.jang[2] = 10;

    const obj2 = {};
    obj2.jang = [];
    obj2.jang[0] = 2;
    obj2.jang[1] = 5;
    obj2.jang[2] = 10;

    const obj3 = { jang: [2, 5, 10] }


    const obj4 = {
        jang: [2, 5, 10],
        song: { study: "안함" },
        lim: 5,
    }

    console.log("obj = " + obj.jang)
    console.log("obj2 = " + obj2.jang)
    console.log("obj3 = " + obj3.jang)
    console.log("obj4 = " + obj4['song']['study'])

    for (let i = 0; i < obj.jang.length; i++) {
        console.log(`obj[${i}] = ${obj.jang[i]}`)
    }
    for (let ele in obj.jang) {
        console.log(`ele = ${ele}`)
    }
}
TestArr3()