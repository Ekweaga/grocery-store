import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList = new BehaviorSubject<any[]>([]);
cartlist:Array<any> = [];
cartno:number = 0;
  constructor() { }


sendmsg(product:any){
    this.cartlist.push(product)
    this.cartno = this.cartlist.length;
    this.productList.next(product)
    console.log(this.cartlist.length);
    alertify.success(`${this.cartno} Item is added to cart`)
    
  }

  getmsg(){
    return this.productList.asObservable();
  }
  emptycart(){
     this.cartlist = []
   console.log("empty cart")
  }
}
