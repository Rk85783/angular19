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
  handleEvent(event: Event) {
    console.log("function called", event.type);
    // console.log("function called", (event.target as HTMLInputElement).name);
    // console.log("function called", (event.target as HTMLInputElement).classList);
    console.log("function called", (event.target as HTMLInputElement).value);
  }
}
