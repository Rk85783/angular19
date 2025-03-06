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
  count: number = 0;

  handleIncrement() {
    this.count++;
  }

  handleReset() {
    this.count = 0;
  }

  handleDecrement() {
    this.count--;
  }

  handleCount(val:string) {
    if (val == "minus") {
      this.count--;
    } else if (val == "plus") {
      this.count++;
    } else if (val == "reset") {
      this.count = 0;
    } else {
      alert("Invalid input");
    }
  }
}
