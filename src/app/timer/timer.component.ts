import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent  {
  title:string = 'Timer-App';
count:number = 20;
reset = ()=> {
  this.count = 0;
}

IncreaseIt = ()=> 
{
  console.log("hi");
   let stopSI = setInterval (()=>{
     if(this.count == 20){
       this.count = 20;
       clearTimeout(stopSI);
      }else{
       this.count = this.count+1;
      }
   },300)
}
 
DecreaseIt = ()=>{
  let stopSI = setInterval (()=>{
    if(this.count == 0){
      this.count = 0;
      clearTimeout(stopSI);
     }else{
      this.count = this.count-1;
     }
  },300)
}

}
