import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AirwatcherComponent } from './components/airwatcher/airwatcher.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'' , component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'signup' , component:SignupComponent},
  {path: 'airwatcher', component:AirwatcherComponent},
  {path: 'favourite', component:FavouriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
