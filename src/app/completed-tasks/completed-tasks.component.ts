import { Component } from '@angular/core';
import { Task } from '../task.model';
import { TaskServiceService } from '../task-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent {
  completedTasks: Task[];

  constructor(private taskService: TaskServiceService, private router: Router) {
    this.completedTasks = this.taskService.getCompletedTasks();
    console.log(this.completedTasks);

  }
}
