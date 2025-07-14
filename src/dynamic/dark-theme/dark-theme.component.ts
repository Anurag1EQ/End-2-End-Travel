import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-dark-theme',
  imports: [NgClass],
  templateUrl: './dark-theme.component.html',
  styleUrl: './dark-theme.component.css'
})
export class DarkThemeComponent {

  isMoved = false;

toggleMove() {
  this.isMoved = !this.isMoved;
}

}
