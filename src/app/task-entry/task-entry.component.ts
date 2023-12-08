import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskServiceService } from '../task-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-entry',
  templateUrl: './task-entry.component.html',
  styleUrls: ['./task-entry.component.css']
})
export class TaskEntryComponent implements OnInit {
  ngOnInit(): void {

  }

  task: Task = {
    id: 0,
    name: '',
    discription: '',
    status: 'pending',
    priority: ''
  }

  constructor(private taskService: TaskServiceService, private router: Router) { }

  addTask() {
    this.taskService.addTask(this.task);
    this.task = {
      id: this.taskService.tasks.length + 1,
      name: '',
      discription: '',
      status: 'Pending',
      priority: ''
    }
  }

  goToList() {
    this.router.navigate(['/list']);
  }
}
