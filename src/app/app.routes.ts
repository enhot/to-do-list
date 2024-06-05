import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddProjectComponent } from './pages/add-project/add-project.component';
import { ViewTaskComponent } from './pages/view-task/view-task.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addProject', component: AddProjectComponent },
  { path: 'myProfile', component: ProfileComponent },
  { path: 'viewTask', component: ViewTaskComponent },
];
