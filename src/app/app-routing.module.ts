import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmComponent } from './alarm/alarm.component';
import { ClockComponent } from './clock/clock.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  {
    path:"declock",
    component: DigitalClockComponent,
    // pathMatch:'full'
  },
  {
    path:"timer",
    component: TimerComponent,
    // pathMatch:'full'
  },
  {
    path:"alarm",
    component: AlarmComponent,
    // pathMatch:'full'
  },  
  {
    path:"",
    component: ClockComponent,
    pathMatch:'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
