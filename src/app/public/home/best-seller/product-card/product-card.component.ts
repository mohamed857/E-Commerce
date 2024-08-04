import { Component, input } from '@angular/core';
import { IBestSellerProduct } from '../best-seller';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product=input.required<IBestSellerProduct>();
  isHovering:boolean=false;
  onMouseEnter=(value:boolean) => {
    this.isHovering=value;
  }
}
