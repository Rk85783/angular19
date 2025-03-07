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

  color = "";

  handleColor(val: string) { 
    this.color = val;
  }

  changeColor(event: Event) {
    this.color = (event.target as HTMLInputElement).value;
  }
}
