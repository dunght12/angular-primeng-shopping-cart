import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { InputNumberModule } from 'primeng/inputnumber';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PromoCodeComponent } from './promo-code/promo-code.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
@NgModule({
  declarations: [
    LayoutComponent,
    CartHeaderComponent,
    ProductListComponent,
    PromoCodeComponent,
    CartSummaryComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    BreadcrumbModule,
    AccordionModule,
    TableModule,
    InputTextModule,
    RippleModule,
    ButtonModule,
    FormsModule,
    VirtualScrollerModule,
    InputNumberModule,
  ],
})
export class LayoutModule {}
