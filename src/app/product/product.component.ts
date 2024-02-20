import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { map } from 'rxjs';
import { CartService } from '../services/cart.service';

export interface product{
  productid:number;
  productName:string;
  productDesc:string;
  price:number;
 
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   products:product[]=[];
// cartId: number=1;
cart:[];
  constructor(private productService:ProductService,private cartService:CartService){}

  ngOnInit(): void {
      this.loadAllProduct();
  }


OnLoadProducts(){
  this.loadAllProduct();
}


 loadAllProduct():void{
 this.productService.getProducts().subscribe((products)=>{
  this.products=products;
 })

 
}


// addToCart(cartId,product):void{
//   // console.log(this.products)
//   // console.log(product.productId)
//   this.cartService.addToCart(cartId, product.productId).subscribe((prod)=>{
//     // console.log("products added to cart")
//     console.log(prod);
//     this.cart=prod;
//     console.log(this.cart);

//   })

// }

}
