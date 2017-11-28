import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  listProduct: Array<any> = new Array();

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.productService.getList().subscribe(data => {
      this.listProduct = data;
      console.log(this.listProduct)
    }, err => {
      console.log(err)
    })
  }

}
