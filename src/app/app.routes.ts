import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddProjectComponent } from './pages/add-project/add-project.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { loginUserGuard } from './guards/login-user.guard';
import { CaseTaskComponent } from './pages/view-task/task-group/case-task/case-task/case-task.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addProject', component: AddProjectComponent },
  { path: 'myProfile', component: ProfileComponent },
  {
    path: 'viewTask',
    loadComponent: () =>
      import('./pages/view-task/view-task.component').then(
        (m) => m.ViewTaskComponent
      ),
    canActivate: [loginUserGuard],
  },
  { path: 'Case', component: CaseTaskComponent },
];
