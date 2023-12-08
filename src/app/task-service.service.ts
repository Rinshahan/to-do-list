import { Injectable } from '@angular/core';
import { Task } from './task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  tasks: Task[] = []
  constructor() { }

  getTask(): Task[] {
    return this.tasks
  }

  addTask(task: Task) {
    console.log('Adding Task:', task);
    task.id
    this.tasks.push(task);
  }
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
  // moveTaskToCompleted() { }

  getCompletedTasks(): Task[] {
    const completedTasks = this.tasks.filter(task => task.status === 'Completed');
    console.log(completedTasks);
    return completedTasks
  }

  getCompletedTask(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id && task.status === 'Completed');
  }
  updateTaskStatus(id: number, status: string) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.status = status;
    }
  }
}
