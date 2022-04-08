import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dukass';
  totalitem:number = 0

  constructor(private cart:CartService){

  }
  ngOnInit(){
    this.totalitem = this.cart.cartno
   
  }
  
}
