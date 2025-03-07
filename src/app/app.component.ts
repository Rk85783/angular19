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
  color = 1;

  handleClick(val: number) {
    this.color = val;
  };

  handleInput(event: Event) {
    this.color = parseInt((event.target as HTMLInputElement).value);
  }
}
