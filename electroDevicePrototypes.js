//Задание к уроку 4 (Наследование через прототип)
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

const computer=Object.create(electroDevice);
computer.powerValue=0;
computer.cpu='Intel Core i9';
computer.ram='32 GB';
computer.os='Windows 11';
computer.resetComputer=function () {
    if(this.powerOn===true){
        return 'Компьютер успешно перезагружен.'
    }else{return 'Сначала компьютер нужно включить.'}
}
computer.getPowerValue=function () {
    return this.powerValue;
}
computer.getCPU=function () {
    return this.cpu;
}
computer.getRAM=function () {
    return this.ram;
}
computer.getOS=function () {
    return this.os;
}
computer.setPowerValue=function (pv) {
    this.powerValue=pv;
}

const myTV=Object.create(electroDevice);
myTV.powerValue=0;
myTV.modelName='Samsung';
myTV.channelNumber=1;
myTV.volumeLevel=10;
myTV.signalSource='HDMI';
myTV.selectChannel=function (number) {
    if(this.powerOn===true){
        if((number>=0)&&(number<=1000)) {
            this.channelNumber=number;
            return 'Переключили канал на '+this.channelNumber;}else{
            return'Ошибочный номер канала.';}}
    else{return 'Сначала включите телевизор.';}
}
myTV.selectVolumeLevel=function (number) {
    if(this.powerOn===true){
        if((number>=0)&&(number<=100)) {
            this.volumeLevel=number;
            return 'Установлен уровень громкости '+this.volumeLevel;}else{
            return'Ошибочный уровень громкости.';}}
    else{return 'Сначала включите телевизор.';}
}
myTV.getPowerValue=function () {
    return this.powerValue;
}
myTV.getModelName=function () {
    return this.modelName;
}
myTV.getChannelNumber=function () {
    return this.channelNumber;
}
myTV.getVolumeLevel=function () {
    return this.volumeLevel;
}
myTV.getSignalSource=function () {
    return this.signalSource;
}
myTV.setPowerValue=function (pv) {
    this.powerValue=pv;
}

console.log(lamp.britnessUp(10));
console.log(lamp.pushPowerButton());
if(lamp.powerOn===true){
    lamp.setPowerValue(12);
}
console.log('Яркость лампы: '+ lamp.getBritnessLevel());
console.log(lamp.britnessUp(10));
console.log('Яркость лампы: '+ lamp.getBritnessLevel());
console.log(lamp.britnessUp(100));
console.log('Яркость лампы: '+ lamp.getBritnessLevel());
console.log(lamp.britnessDown(15));
console.log('Яркость лампы: '+ lamp.getBritnessLevel());
console.log(lamp.britnessDown(5));
console.log('Яркость лампы: '+ lamp.getBritnessLevel());
console.log('Мощность лампы, Вт: '+ lamp.getPowerValue());
console.log('Тип патрона лампы: '+ lamp.getLampholderType());
console.log(lamp.pushPowerButton());

console.log(computer.resetComputer());
console.log(computer.pushPowerButton());
if(computer.powerOn===true){
    computer.setPowerValue(800);
}
console.log(computer.resetComputer());
console.log('Мощность компьютера, Вт: '+ computer.getPowerValue());
console.log('Процессор компьютера: '+ computer.getCPU());
console.log('Количество оперативной памяти: '+ computer.getRAM());
console.log('Операционная система: '+ computer.getOS());
console.log(myTV.pushPowerButton());
if(myTV.powerOn===true){
    myTV.setPowerValue(70);
}
console.log('Мощность телевизора: '+ myTV.getPowerValue());
console.log('Модель телевизора: '+ myTV.getModelName());
console.log('Смотрим канал № ' + myTV.getChannelNumber());
console.log('Уровень громкости: ' + myTV.getVolumeLevel());
console.log('Источник сигнала: ' + myTV.getSignalSource());
console.log(myTV.selectChannel(10));
console.log('Смотрим канал № ' + myTV.getChannelNumber());
console.log(myTV.selectVolumeLevel(15));
console.log('Уровень громкости: ' + myTV.getVolumeLevel());

if(lamp.powerOn===false){
    lamp.setPowerValue(0);
}

if(computer.powerOn===false){
    computer.setPowerValue(0);
}

if(myTV.powerOn===false){
    myTV.setPowerValue(0);
}

powerSummary=lamp.getPowerValue()+computer.getPowerValue()+myTV.getPowerValue();
console.log('Суммарная мощность всех электроприборов, Вт: '+powerSummary);