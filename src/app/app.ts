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
  name=""
  displayName ="";
  email="";
  getName(event : Event){
    this.name = (event.target as HTMLInputElement).value;
  }
  showName(){
    this.displayName = this.name;
  }
  setName(){
    this.name = "Divyanka Saxena";
  }  
  
}
