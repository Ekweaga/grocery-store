import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path:'', component:WelcomeComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'shop', component:GroceriesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
