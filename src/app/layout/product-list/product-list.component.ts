import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['../layout.component.css'],
})
export class ProductListComponent implements OnInit {
  // products: Product[] = [];
  @Input() products!: Product[];
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onUpdateProduct = new EventEmitter();
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // this.getProduct();
  }

  // getProduct() {
  //   this.productService.getProductInBasket().subscribe((res) => {
  //     this.products = res;
  //   });
  // }
  removeProduct(id: number) {
    this.onRemoveProduct.emit(id);
  }
  inputQuantity(event: any, id: number) {
    console.log(id, 'id san pham bi thay doi');
    const qTy = Number(event.value);
    console.log(qTy, 'QTy');
    this.onUpdateProduct.emit({ id: id, value: qTy });
  }
}
