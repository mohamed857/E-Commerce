import { Component } from '@angular/core';
import { InstagramCardComponent } from "./instagram-card/instagram-card.component";

@Component({
  selector: 'app-instagram-stories',
  standalone: true,
  imports: [InstagramCardComponent],
  templateUrl: './instagram-stories.component.html',
  styleUrl: './instagram-stories.component.scss'
})
export class InstagramStoriesComponent {
  readonly images: string[] = [
    'assets/images/lady_one.jpg',
    'assets/images/lady_two.jpg',
    'assets/images/lady_three.jpg',
    'assets/images/lady_four.png'
  ];
}
