import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
  task: string;
  tasks = [];
 
  onClick(){
    this.tasks.push({name: this.task});
    this.task = '';
  }
}
  