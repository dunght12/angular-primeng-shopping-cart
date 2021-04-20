import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css'],
})
export class CartHeaderComponent implements OnInit {
  items: MenuItem[] = [];
  @Input() numberItems!: number;

  constructor() {}

  ngOnInit(): void {
    this.items = [{ label: 'Home' }, { label: 'Shopping Cart' }];
  }
}
