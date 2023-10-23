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
  constructor(private ProductsService:ProductsService){}
  ngOnInit(): void {
    this.getProductList()
  }
  getProductList(){
    this.ProductsService.getAllProducts().subscribe(data=>{    
      this.productList = data.products
    })
  }
}
