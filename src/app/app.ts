import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  task = "";
  taskList: { id: number; task: string }[] = [];

  addTask(){
    this.taskList.push({ id: this.taskList.length + 1, task: this.task });
    this.task = "";
    console.log(this.taskList);
  }

  deleteTask(id: number){
    this.taskList = this.taskList.filter(task => task.id !== id);
  }
}