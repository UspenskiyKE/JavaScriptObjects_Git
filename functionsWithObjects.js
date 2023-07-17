//Задание к уроку 3 (создание функций для работы с объектами)
const electroDevice={
    powerOn: false,
    rechargeable: false,
    pushPowerButton: function () {
        if (this.powerOn===false){
            this.powerOn=true;
            return 'Питание включено.'
        }else{
            this.powerOn=false;
            return 'Питание отключено.'
        }
    }

}
const lamp=Object.create(electroDevice);
lamp.powerValue=0;
lamp.lampholderType='E27';
lamp.britnessLevel=0;
lamp.britnessUp=function (step) {
    if (this.powerOn === true) {
        if (this.britnessLevel + step <= 100) {
            this.britnessLevel += step;
            return 'Яркость лампы увеличена на ' + step + ' единиц';

        } else {
            return 'Яркость лампы не может быть больше 100 единиц.';
        }
    } else {
        return 'Сначала лампу нужно включить.';
    }
}

lamp.britnessDown=function (step) {
    if(this.powerOn===true){
        if (this.britnessLevel-step>=0){
            this.britnessLevel-=step;
            return 'Яркость лампы уменьшена на '+step+' единиц';
        }else{
            return 'Яркость лампы не может быть меньше 0 единиц.';
        } }else {
        return 'Сначала лампу нужно включить.';
    }
}

lamp.getPowerValue=function () {
    return this.powerValue;
}
lamp.getLampholderType=function () {
    return this.lampholderType;
}
lamp.getBritnessLevel=function () {
    return this.britnessLevel;
}
lamp.setPowerValue=function (pv) {
    this.powerValue=pv;

}

//Функция, возвращающая список собственных свойств объекта (Задание 1)
function ownProperties(obj){
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}
//Обрабатываем объект lamp
ownProperties(lamp);

//Функция, проверяющая, есть ли заданное собственное свойство у объекта (Задание 2)
function propertyTest(str, obj){
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return key === str;
        }
    }
}
//Обрабатываем объект lamp
console.log(propertyTest('powerValue',lamp));

//Функция, возвращающая пустой объект без прототипа (Задание 3)
function emptyObject(){
    return Object.create(null) ;
}
//вызов функции emptyObject
console.log(emptyObject());