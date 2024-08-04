import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MegaMenuComponent } from "./mega-menu/mega-menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule
    , MegaMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menu_show: boolean = false;
  toggleMenu = (show: boolean) => {
    this.menu_show = show;
  }

}
