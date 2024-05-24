import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddProjectComponent } from './pages/add-project/add-project.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addProject', component: AddProjectComponent },
];
