

import { Component } from '@angular/core';
import { Task } from '../task.model';
import { TaskServiceService } from '../task-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {
  task: Task | undefined;

  constructor(
    private taskService: TaskServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const idParam = this.route.snapshot.paramMap.get('id')
    if (idParam !== null) {
      const taskId = + idParam;
      this.task = this.taskService.getTask().find(task => task.id === taskId)
    }
  }
  goToList() {
    this.router.navigate(['/list']);
  }
}

