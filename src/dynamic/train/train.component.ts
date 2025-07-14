import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-train',
  imports: [CommonModule,NavBarComponent],
  templateUrl: './train.component.html',
  styleUrl: './train.component.css'
})
export class TrainComponent {
  constructor(private router: Router) {}

  goToPage1() {
    this.router.navigate(['/page1']);
  }
  goToBus() {
    this.router.navigate(['/bus']);
  }
  goToSelectRoute() {
    this.router.navigate(['/selectRoute']);
  }
  goToGoogleMap() {
    this.router.navigate(['/googleMap']);
  }

}
