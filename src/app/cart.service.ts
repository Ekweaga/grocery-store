import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList = new BehaviorSubject<any[]>([]);
cartlist:Array<any> = [];
  constructor() { }


sendmsg(product:any){
    this.cartlist.push(product)
    this.productList.next(product)
    console.log(this.cartlist.length)
    
  }

  getmsg(){
    return this.productList.asObservable();
  }
  emptycart(){
     this.cartlist = []
   console.log("empty cart")
  }
}
