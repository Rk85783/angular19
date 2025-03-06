import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, SignupComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "App"; // property
  name: string = "Rohit"
  age: number = 20
  userLogin: boolean = false
  info: string | number | boolean = "this is some data"
  info2: any = "any data you want"
  otherFunction() {
    // this.name=100 // getting error
    // let x = 10; // variable
    this.info = "diff data"
    this.info = 100
    this.info = true
  }

  // 
  sum(a: number, b: number) {
    console.log(a + b);
  }
}
