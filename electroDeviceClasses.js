//Задание к уроку 4 (Наследование от класса)
class ElectroDevice {
    constructor(state, r_state) {
        this.powerOn=state;
        this.rechargeable=r_state;
    }
    pushPowerButton(){
        if (this.powerOn===false){
            this.powerOn=true;
            return 'Питание включено.'
        }else{
            this.powerOn=false;
            return 'Питание отключено.'
        }
    }
}

class DesktopLamp extends ElectroDevice{
    constructor(powerValue, lampholderType, brightnessLevel, powerOn, rechargeable) {
        super(powerOn, rechargeable);
        this.powerValue=powerValue;
        this.lampholderType=lampholderType;
        this.britnessLevel=brightnessLevel;
    }
    britnessUp(step){
        if (this.powerOn===true){
            if (this.britnessLevel+step<=100){
                this.britnessLevel+=step;
                return 'Яркость лампы увеличена на '+step+' единиц';

            }else{
                return 'Яркость лампы не может быть больше 100 единиц.';
            }
        } else{
            return 'Сначала лампу нужно включить.';
        }
    }

    britnessDown(step){
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
    getPowerValue(){
        return this.powerValue;
    }
    getLampholderType(){
        return this.lampholderType;
    }
    getBritnessLevel(){
        return this.britnessLevel;
    }
    setPowerValue(pv){
        this.powerValue=pv;
    }
}

class DesktopComputer extends ElectroDevice{
    constructor(powerValue, cpu, ram, os, powerOn, rechargeable) {
        super(powerOn, rechargeable);
        this.powerValue=powerValue;
        this.cpu=cpu;
        this.ram=ram;
        this.os=os;
    }
    resetComputer(){
        if(this.powerOn===true){
            return 'Компьютер успешно перезагружен.'
        }else{return 'Сначала компьютер нужно включить.'}
    }
    getPowerValue(){
        return this.powerValue;
    }
    getCPU(){
        return this.cpu;
    }
    getRAM(){
        return this.ram;
    }
    getOS(){
        return this.os;
    }
    setPowerValue(pv){
        this.powerValue=pv;
    }
}

class Tv extends ElectroDevice{
    constructor(powerValue, modelName, channelNumber, volumeLevel, signalSource, powerOn, rechargeable) {
        super(powerOn, rechargeable);
        this.powerValue=powerValue;
        this.modelName=modelName;
        this.channelNumber=channelNumber;
        this.volumeLevel=volumeLevel;
        this.signalSource=signalSource;
    }
    selectChannel(number){
        if(this.powerOn===true){
            if((number>=0)&&(number<=1000)) {
                this.channelNumber=number;
                return 'Переключили канал на '+this.channelNumber;}else{
                return'Ошибочный номер канала.';}}
        else{return 'Сначала включите телевизор.';}
    }
    selectVolumeLevel(number){
        if(this.powerOn===true){
            if((number>=0)&&(number<=100)) {
                this.volumeLevel=number;
                return 'Установлен уровень громкости '+this.volumeLevel;}else{
                return'Ошибочный уровень громкости.';}}
        else{return 'Сначала включите телевизор.';}
    }
    getPowerValue(){
        return this.powerValue;
    }
    getModelName(){
        return this.modelName;
    }
    getChannelNumber(){
        return this.channelNumber;
    }
    getVolumeLevel(){
        return this.volumeLevel;
    }
    getSignalSource(){
        return this.signalSource;
    }
    setPowerValue(pv){
        this.powerValue=pv;
    }

}
const lamp=new DesktopLamp(0,'E27',0,false, false);
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
lamp.pushPowerButton();


const computer=new DesktopComputer(0,'Intel Core i9','32 Gb', 'Windows 11', false, false);
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

const myTV=new Tv(0, 'Samsung 32', 1, 20, 'HDMI', false, false);
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
console.log('Суммарная мощность включенных электроприборов, Вт: '+powerSummary);
