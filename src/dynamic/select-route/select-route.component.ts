import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HeaderComponent } from '../header/header.component';
import { FilterBoxComponent } from '../filter-box/filter-box.component';

@Component({
  selector: 'app-select-route',
  imports: [CommonModule,NavBarComponent,HeaderComponent, FilterBoxComponent],
  templateUrl: './select-route.component.html',
  styleUrl: './select-route.component.css'
})
export class SelectRouteComponent {

  constructor(private router: Router) {}

  goToGoogleMap() {
    this.router.navigate(['/googleMap']);
  }
  goToTrainStatus() {
    this.router.navigate(['/trainStatus']);
  }
  

}
