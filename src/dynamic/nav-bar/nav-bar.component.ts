import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private router: Router) {}

  goToTrain() {
    this.router.navigate(['/train']);
  }
  goToBus() {
    this.router.navigate(['/bus']);
  }
  
  goToPage1() {
    this.router.navigate(['/page1']);
  }
  goToGoogleMap() {
    this.router.navigate(['/googleMap']);
  }

}
