import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { ClockComponent } from './clock/clock.component';
import { TimerComponent } from './timer/timer.component';
import { AlarmComponent } from './alarm/alarm.component';


@NgModule({
  declarations: [
    AppComponent,
    DigitalClockComponent,
    ClockComponent,
    TimerComponent,
    AlarmComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
