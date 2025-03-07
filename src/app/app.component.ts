import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';

  x = 20;
  count = signal(0);

  constructor() {
    effect(() => {
      console.log(this.count());
    })
  }

  updateValue() {
    this.count.set(this.count() + 1);
    // this.x = this.x + 1;
  }

  updateValue2(val: string) {
    if (val == 'inc') {
      this.count.set(this.count() + 1);
    } else if (val == 'dec') {
      this.count.set(this.count() - 1);
    }
  }
}
