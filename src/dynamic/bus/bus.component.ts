import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
// import { CommonModule } from '@angular/common';  


@Component({
  selector: 'app-bus',
  imports: [NavBarComponent],
  templateUrl: './bus.component.html',
  styleUrl: './bus.component.css'
})
export class BusComponent {

  constructor(private router: Router) {}

  goToTrain() {
    this.router.navigate(['/train']);
  }
  goToBus() {
    this.router.navigate(['/bus']);
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
