import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList = new BehaviorSubject<any[]>([]);
cartlist:Array<any> = []
  constructor() { }


  sendmsg(product:any){
    this.cartlist.push(product)
    this.productList.next(this.cartlist)
    
  }

  getmsg(){
    return this.productList.asObservable();
  }
}
