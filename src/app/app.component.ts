import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';

  // data = signal<number | string>(10);
  data: WritableSignal<number | string> = signal(10);
  // count: Signal<number> = computed(() => 200); // readonly, value ko change nahi kar sakte

  updateSignal() {
    // this.data.set("Hello");
    this.data.update((value) => value + 1);
  }
}
