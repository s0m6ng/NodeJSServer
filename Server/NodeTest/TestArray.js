"use strict"

function Line() {
    console.log("-----------------------------")
}
function TestArr1() {
    const arr1 = new Array(1, 4, 5, 9)
    const arr2 = Array(1, 4, 5, 9)
    const arr3 = [1, 4, 5, 9]

    console.log(arr1)
}
//TestArr1()

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
    Line()
    for (let i = 0; i < obj.jang.length; i++) {
        console.log(`obj[${i}] = ${obj.jang[i]}`)
    }
    Line()
    for (let ele in obj.jang) {
        console.log(`ele = ${ele}`) // 0, 1, 2
    }
    Line()
    for (let ele of obj.jang) {
        console.log(`ele2 = ${ele}`) // 2, 5, 10
    }
    Line()
    for (let ele in obj.jang) {
        console.log(`ele = ${obj.jang[ele]}`) // 2, 5, 10
    }
    Line()
    obj.jang.forEach((k) => console.log(k)) // 2, 5, 10
}
//TestArr3()


function TestArr4() {
    var arr = ['a', 'b', 'c', 'd']
    //console.log(arr.indexOf('c')) // 2

    var arr2 = [1, '2', [1, 2, 3], { name: 'lee' }]
    //console.log(arr2.toString())

    var arr3 = ['a', 'b', 'c', 'd']
    arr3.push('e')
    //console.log(arr3)
    //console.log(arr3.push('f'))
    //console.log(arr3)

    var arr4 = ['a', 'b', 'c', 'd']
    arr4.shift()
    //console.log(arr4.shift())
    //console.log(arr4)

    var arr5 = ['a', 'b', 'c', 'd']
    arr5.unshift('b1')
    //console.log(arr5.unshift('a0'))
    //console.log(arr5)

    var arr6 = ['f', 4, '라', '2', 'c', '나', [1, 2, 3]]
    console.log(arr6.sort())

    var arr7 = ['a', 'b', 'c', 'd']
    console.log(arr7.reverse())
}
//TestArr4()

function TestObj() {
    let obj1 = {
        name: '홍길동',
        age: 17,
    }
    console.log(obj1)

    let obj2 = {}
    obj2['name'] = "장소망"
    obj2['age'] = 18
    console.log(obj2)

    let obj3 = new Object()
    obj3.name = "잘도망"
    obj3.age = 18
    console.log(obj3)

    let obj4 = new Object("안녕하세요")
    console.log(obj4)
}
//TestObj()

function TestObj2() {
    let obj1 = {
        name: "사자",
        age: 44,
        favorite: "고기"
    }
    for (let key in obj1) {
        console.log(`${key} : ${obj1[key]}`)
    }
    Line()

    let obj2 = {
        name: "장소망",
        age: 18,
        favorite: "게임"
    }
    let obj2value = Object.values(obj2) 
    for (let value of obj2value) {
        console.log(value)
    }
    Line()
    let obj2key = Object.keys(obj2) 
    for (let key of obj2key) {
        console.log(key)
    }
}
//TestObj2()