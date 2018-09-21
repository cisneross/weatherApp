import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SeattleWeatherComponent } from './seattle-weather/seattle-weather.component';
import { BurbankWeatherComponent } from './burbank-weather/burbank-weather.component';
import { SanjoseWeatherComponent } from './sanjose-weather/sanjose-weather.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SeattleWeatherComponent,
    BurbankWeatherComponent,
    SanjoseWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
