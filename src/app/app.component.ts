import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
  display = true;
  toggleDiv = true;

  hide() {
    this.display = false;
  };
  show() {
    this.display = true;
  };
  toggle() {
    this.display = !this.display;
  };
  toggleTwo() {
    this.toggleDiv = !this.toggleDiv;
  };
}
