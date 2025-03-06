import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Rohit Kumar';
  data1 = 100;
  data2 = 200;
  user1 = "rohit";
  user2 = "neeraj"
}
