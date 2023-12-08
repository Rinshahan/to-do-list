import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskEntryComponent } from './task-entry/task-entry.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { CompletedTaskDetailComponent } from './completed-detail/completed-detail.component';
import { NotFoundError } from 'rxjs';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path: 'entry', component: TaskEntryComponent },
  { path: '', redirectTo: '/entry', pathMatch: 'full' },
  { path: 'list', component: TaskListComponent },
  { path: 'detail/:id', component: TaskDetailComponent },
  { path: 'completed', component: CompletedTasksComponent },
  { path: 'completed-detail/:id', component: CompletedTaskDetailComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
