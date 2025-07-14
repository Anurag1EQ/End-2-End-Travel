import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  a:any=document.querySelector('#fromLocation');
  b:any=document.querySelector('.to');
  s:any=document.querySelector('.shuffleIcon');

  swapInputs() {
   console.log(this.a)
  }




}
