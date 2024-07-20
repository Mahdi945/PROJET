import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

 
  isNavbarCollapsed = true;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  closeNavbar() {
    this.isNavbarCollapsed = true;
  }
  isOffcanvasOpen = false;

  toggleOffcanvas() {
    this.isOffcanvasOpen = !this.isOffcanvasOpen;
  }
  constructor() { }


}