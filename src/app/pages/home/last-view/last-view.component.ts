import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { IProduct } from 'src/app/shared/interfaces/iproduct';

@Component({
  selector: 'app-last-view',
  templateUrl: './last-view.component.html',
  styleUrls: ['./last-view.component.scss']
})
export class LastViewComponent implements OnInit{
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
