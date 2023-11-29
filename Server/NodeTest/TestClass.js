"use strict"

function MantoMan(name, weight){
    this.name = name;
    this.weight = weight;

    this.getName = function(){
        return this.name;
    }
    this.setName = function(name){
        this.name = name;
    }
}

function Test_Class1(){
    let man = new MantoMan('장소망', 67)
    console.log(man.getName(), man.weight)

    man.setName("장소소망망망")
    console.log(man.getName(), man.weight)
}
//Test_Class1()

class Animal{
    constructor(name,sound){
        this.name = name;
        this.sound = sound;
    }
    Speaker(){
        return this.sound;
    }
    get getName(){
        console.log(this.Speaker())
        return this.name;
    }
}
function Test_Class2(){
    const tiger = new Animal('호랑이','어흥')
    console.log(tiger)
    console.log(tiger.getName)
    console.log(tiger.name, tiger.sound)
}
Test_Class2()