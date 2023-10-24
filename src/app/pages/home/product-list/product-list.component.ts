import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { IProduct } from 'src/app/shared/interfaces/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  productList:IProduct[]|[] = []
  slidesPerView:number = 4
  constructor(private ProductsService:ProductsService){}
  ngOnInit(): void {
    this.getProductList()
    this.checkScreenWidth()
    this.onResize()
  }
  getProductList(){
    this.ProductsService.getAllProducts().subscribe(data=>{    
      this.productList = data.products
    })
  }

  onResize(){
    window.onresize = (e)=>{
      this.checkScreenWidth()
    }
  }
  checkScreenWidth(){
    if(window.innerWidth>1200){
      this.slidesPerView = 4
    }
    if(window.innerWidth<=1200){
      this.slidesPerView = 3
    }
    if(window.innerWidth<=992){
      this.slidesPerView = 2
    }
    if(window.innerWidth<=767){
      this.slidesPerView = 3
    }
    if(window.innerWidth<=600){
      this.slidesPerView = 2
    }
  }
}
