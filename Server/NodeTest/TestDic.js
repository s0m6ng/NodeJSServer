"use strict"

let dic = {
    1: "사과",
    2: "배",
    3: "수박"
}
function TestDic(){

    PrintDic()

    dic[1] = "맛있는 사과"
    dic[2] = "맛있는 배"
    PrintDic()

    delete dic[1]
    PrintDic()
}

function PrintDic(){
    console.log("----------------------------")
    let str = ""
    for (let i in dic){
        str += `${i}: ${dic[i]}, `
    }
    console.log(str)
}
TestDic()