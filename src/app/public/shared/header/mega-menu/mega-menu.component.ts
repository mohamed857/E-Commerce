import { Component, input } from '@angular/core';

@Component({
  selector: 'app-mega-menu',
  standalone: true,
  imports: [],
  templateUrl: './mega-menu.component.html',
  styleUrl: './mega-menu.component.scss'
})
export class MegaMenuComponent {
show = input.required<boolean>();
}
