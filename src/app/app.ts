import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';

@Component({
  selector: 'app-root',
  imports: [Login, Signup, RouterOutlet  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = 0 
  handleIncrement() {
    this.count = this.count + 1;
  }
  handleDecrement() {
    this.count = this.count - 1;
  }
  handleReset() {
    this.count = 0;
  }
}
