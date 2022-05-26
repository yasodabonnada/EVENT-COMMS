import { LightningElement ,track} from 'lwc';

export default class ToDoManager extends LightningElement {
   @track time="8:15pm";
   @track greeting="Good Evening";
    connectedcallback(){
        this.getTime();
        setInterval(()=>{
            this.getTime();
            console.log("set interval called");
        
        },1000*60);
    }
    getTime(){
        const date=new Date();
        const hour=date.getHours();
const min=date.getMinutes();
this.time=`${this.getHour(hour)}:${this.getDoubleDigit(min)} ${this.getMidday(hour)}`;
this.setGreeting(hour);

    }
    getHour(hour){
        return hour==0?12:hour>12 ? (hour-12):hour;
    }
    getMidDay(hour){
        return hour>=12? "pm":"am";
    }
    getDoubleDigit(digit){
    return digit<10 ? "0"+digit:digit;
    }
setGreeting(hour){
    if(hour<12){
        this.greeting="Good Morning";

    }else if(hour>=12 && hour<17){
        this.greeting="Good afternoon";
    }else{
        this.greeting="Good Evening";
    }
}
}