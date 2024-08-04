import { Component, input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {
  category =input.required<{name:string, imageUrl:string}>();
}
