"use strict"

function TestDic(){
    let dic = {
        1: "사과",
        2: "맛있는 배",
        3: "수박"
    }

    console.log("----------------------------")
    for (let i in dic){
        console.log(`${i}: ${dic[i]}`)
    }

    dic[1] = "맛있는 사과"
    console.log("----------------------------")
    for (let i in dic){
        console.log(`${i}: ${dic[i]}`)
    }
    
    delete dic[1]
    console.log("----------------------------")
    for (let i in dic){
        console.log(`${i}: ${dic[i]}`)
    }
}
TestDic()