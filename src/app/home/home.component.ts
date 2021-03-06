import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { DukaService } from '../duka.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
products:Array<any> =[];
  constructor(private duka:DukaService, private cart: CartService) { }

  ngOnInit(): void {
    this.duka.getproducts().subscribe((data:any)=>{
      
      this.products = data
      this.products.forEach((a:any)=>{
        Object.assign(a,{quantity:1, total:a.price})
    })
    })
  }
  addtocart(product:any){
    this.cart.sendmsg(product)
    
  }

}
