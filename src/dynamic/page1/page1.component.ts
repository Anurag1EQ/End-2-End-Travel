import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-page1',
  imports: [CommonModule, NavBarComponent],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {

  constructor(private router: Router) {}

  goToBus() {
    this.router.navigate(['/bus']);
  }
  goToTrain() {
    this.router.navigate(['/train']);
  }
  goToSelectRoute() {
    this.router.navigate(['/selectRoute']);
  }
  goToPage1() {
    this.router.navigate(['/page1']);
  }
  goToGoogleMap() {
    this.router.navigate(['/googleMap']);
  }

}
