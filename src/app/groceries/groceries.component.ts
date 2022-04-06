import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { DukaService } from '../duka.service';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.scss']
})
export class GroceriesComponent implements OnInit {
products:Array<any>=[]
  constructor(private duka:DukaService, private cart:CartService) { }

  ngOnInit(): void {
    this.cart.productList.subscribe(data=>{
      console.log(data)
    })

   
    this.duka.getproducts().subscribe((data:any)=>{
      this.products = data;
      this.products.forEach((a:any)=>{
        Object.assign(a,{quantity:1, total:a.price})
    })
   
    })
  }

  addtocart(product:any){
    this.cart.sendmsg(product)
    
  }

}
