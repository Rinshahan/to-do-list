import { Component } from '@angular/core';
import { Task } from '../task.model';
import { TaskServiceService } from '../task-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[];

  constructor(private taskService: TaskServiceService, private router: Router) {
    this.tasks = this.taskService.getTask()
    console.log(this.tasks);

  }
  goToEntry() {
    this.router.navigate(['/entry']);
  }
  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  goToCompletedTask() {
    this.router.navigate(['/completed'])
  }

  markAsCompleted(task: Task) {
    this.taskService.updateTaskStatus(task.id, 'Completed');
    this.tasks = this.tasks.filter(task => task.id !== task.id);
  }

}
