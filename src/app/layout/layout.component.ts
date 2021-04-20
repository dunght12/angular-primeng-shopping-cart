import { Component, OnInit, DoCheck } from '@angular/core';
import { Product } from '../model/product.model';
import { PromoCode } from '../model/promo-code.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-layout-component',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  products: Product[] = [];
  numberItems: number = 0;
  discountPercent: number = 0;
  discount: number = 0;
  total: number = 0;
  tax: number = 0;
  subTotal: number = 0;
  taxPercent: number = 10;

  promoCodes: PromoCode[] = [
    { code: 'DC20', discountPecent: 20 },
    { code: 'DC10', discountPecent: 10 },
    { code: 'DC07', discountPecent: 7 },
    { code: 'DC05', discountPecent: 5 },
    { code: 'DC03', discountPecent: 3 },
  ];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProduct();
  }
  ngDoCheck() {
    this.updateCartSummary();
  }

  updateCartSummary() {
    let numberItems = 0;
    let subTotal = 0;
    let tax = 0;
    let total = 0;
    let discount = 0;
    for (const product of this.products) {
      numberItems += product.quantity;
      subTotal += product.price * product.quantity;
      tax = (subTotal * this.taxPercent) / 100;
      total = subTotal + tax;
    }
    this.numberItems = numberItems;
    this.subTotal = subTotal;
    this.tax = tax;
    this.total = total;
  }
  getProduct() {
    this.productService.getProductInBasket().subscribe((res) => {
      this.products = res;
      console.log(res, 'list danh sach');
    });
  }

  handleUpdateProduct(event: any) {
    console.log(event, 'event');
    this.numberItems = 0;
    const productChange = this.products.find((item) => item.id == event.id);
    if (productChange) {
      productChange.quantity = event.value || 0;
    }

    this.productService.update(this.products[event.id - 1]).subscribe((res) => {
      this.products[event.id - 1] = res;
    });

    for (let i = 0; i < this.products.length; i++) {
      this.numberItems += this.products[i].quantity;
    }
    console.log(this.numberItems, 'tổng sau khi thay đổi');
  }

  // xóa sản phẩm
  handleRemoveProduct(id: number) {
    console.log(id, 'id được chọn để xóa');
    this.productService.delete(id).subscribe((res) => {
      this.getProduct();
    });
  }
  // mã giảm giá
  handleApplyPromoCode(code: string) {
    const promoCode = this.promoCodes.find((item) => item.code === code);
    console.log(promoCode, 'code dc truyen');
    this.discountPercent = promoCode ? promoCode.discountPecent : 0;
    console.log(this.discountPercent, '% dc giam gia');
    this.discount = (this.subTotal * this.discountPercent) / 100;
    this.tax = ((this.subTotal - this.discount) * this.taxPercent) / 100;
    if (this.discount > 0) {
      alert('The promotion code was applied');
      console.log('The promotion code was applied');
    } else {
      alert('Please check promotion code again. Try code : DC20, DC10, ....');
    }
  }
}
