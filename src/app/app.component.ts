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

  users = ["Rohit", "Neeraj", "Lokesh", "Pradeep", "Rekha", "Nancy"];
  students = [
    { id: 1, name: "Rohit", age: 30 },
    { id: 2, name: "Neeraj", age: 28 },
    { id: 3, name: "Lokesh", age: 22 },
    { id: 4, name: "Pradeep", age: 35 },
    { id: 5, name: "Rekha", age: 28 },
    { id: 6, name: "Nancy", age: 28 }
  ];

  getName(name: string) {
    alert(name);
  }
}
