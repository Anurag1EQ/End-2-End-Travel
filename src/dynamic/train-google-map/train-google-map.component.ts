import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-train-google-map',
  imports: [NgClass,NavBarComponent,HeaderComponent],
  templateUrl: './train-google-map.component.html',
  styleUrl: './train-google-map.component.css'
})
export class TrainGoogleMapComponent {

  isMoved = false;

toggleMove() {
  this.isMoved = !this.isMoved;
}



constructor(private router: Router) {}

goToTrain() {
  this.router.navigate(['/train']);
}
goToPage1() {
  this.router.navigate(['/page1']);
}
goToBus() {
  this.router.navigate(['/bus']);
}
goToGoogleMap() {
  this.router.navigate(['/googleMap']);
}
}
