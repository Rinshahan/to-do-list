import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskEntryComponent } from './task-entry/task-entry.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { FormsModule } from '@angular/forms';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { CompletedTaskDetailComponent } from './completed-detail/completed-detail.component';
import { NotfoundComponent } from './notfound/notfound.component';




@NgModule({
  declarations: [
    AppComponent,
    TaskEntryComponent,
    TaskListComponent,
    TaskDetailComponent,
    CompletedTasksComponent,
    CompletedTaskDetailComponent,
    NotfoundComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
