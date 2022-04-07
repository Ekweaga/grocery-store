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
filtered:any;
total = 0;
  constructor(private cart:CartService) {
   
  
   }

  ngOnInit() {
this.cartitem = this.cart.cartlist;
console.log(this.cartitem)
if(this.cartitem.length > 0){
  this.sumtottal();
}
if(this.cartitem.length == 0){
 
}

   
  }

  empty(){
    this.cartitem = []
    this.total = 0;
  }
  removeitem(id:any){
  this.cartitem.map((item,index)=>{
     if(item.id === id){
       this.cartitem.splice(index,1)
     
     }
   })
  
    console.log(this.cartitem)
   

  }
  increase(id:any){
    this.filtered = this.cartitem.find((item)=>{
     return  item.id === id
    })
   if(this.filtered){
     this.filtered.quantity++;
     this.cartitem.map((a:any)=>{
      this.total += a.price * a.quantity
})
   }

  }
  sumtottal(){
   this.cartitem.map((a:any)=>{
        this.total += a.price * a.quantity
  })
  return this.total;
  }


}
