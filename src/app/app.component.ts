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
  name = "";
  displayName = "";
  email = "";
  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value
  }
  showName() {
    this.displayName = this.name
  }
  setName() {
    this.name = "Sam"
  }
  getEmail(val:string) {
    console.log(val)
    this.email = val
  }
  setEmail() {
    this.email = "default@example.com"
  }
}
