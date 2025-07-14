import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-train-status',
  imports: [NavBarComponent,HeaderComponent],
  templateUrl: './train-status.component.html',
  styleUrl: './train-status.component.css'
})
export class TrainStatusComponent {

}
