import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PromoCode } from '../../model/promo-code.model';
@Component({
  selector: 'app-promo-code',
  templateUrl: './promo-code.component.html',
  styleUrls: ['../layout.component.css'],
})
export class PromoCodeComponent implements OnInit {
  promoCode: any;
  @Output() onApplyPromeCode = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  applyPromoCode() {
    console.log(this.promoCode, 'code dc nhap');
    // const code1 = this.promoCodes.find(item => item.code === code);
    this.onApplyPromeCode.emit(this.promoCode);
  }
}
