
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleWeatherComponent } from './seattle-weather/seattle-weather.component';
import { BurbankWeatherComponent } from './burbank-weather/burbank-weather.component';
import { SanjoseWeatherComponent } from './sanjose-weather/sanjose-weather.component';
const routes: Routes = [
  {path: 'seattle', component: SeattleWeatherComponent},
  {path: '', component: BurbankWeatherComponent},
  {path: 'sanjose', component: SanjoseWeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
