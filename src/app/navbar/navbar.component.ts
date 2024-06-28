import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isTogglerActive: boolean = false;

  toggleButton() {
    this.isTogglerActive = !this.isTogglerActive;
  }
}
