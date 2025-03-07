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

  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
    { id: 4, name: 'Alice' },
    { id: 5, name: 'Charlie' },
    { id: 6, name: 'David' },
    { id: 7, name: 'Emily' },
    { id: 8, name: 'Frank' },
    { id: 9, name: 'Grace' },
    { id: 10, name: 'Henry' }
  ];

  students = [];

}
