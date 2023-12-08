import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskServiceService } from '../task-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-completed-task-detail',
  templateUrl: './completed-detail.component.html',
  styleUrls: ['./completed-detail.component.css']
})
export class CompletedTaskDetailComponent implements OnInit {
  task: Task | undefined;

  constructor(private taskService: TaskServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const taskId = +idParam;
      this.task = this.taskService.getCompletedTask(taskId);
    }
  }
}
