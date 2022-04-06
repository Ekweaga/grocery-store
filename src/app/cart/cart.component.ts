import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cartitem:Array<any> = [];
item:any
  constructor(private cart:CartService) {
   
  
   }

  ngOnInit(): void {

    this.cart.getmsg().subscribe(data=>{
      console.log(data)
    })
this.cartitem = this.cart.cartlist;
console.log(this.cartitem)
   
  }

}
