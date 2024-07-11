import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddProjectComponent } from './pages/add-project/add-project.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { loginUserGuard } from './guards/login-user.guard';
import { CaseTaskComponent } from './pages/view-task/task-group/case-task/case-task.component';
import { DalilyWorkComponent } from './pages/view-task/task-group/dalily-work/dalily-work.component';
import { WorkComponent } from './pages/view-task/task-group/work/work.component';
import { EntertainmentComponent } from './pages/view-task/task-group/entertainment/entertainment.component';
import { PersonalProjectComponent } from './pages/view-task/task-group/personal-project/personal-project.component';
import { ShoppingComponent } from './pages/view-task/task-group/shopping/shopping.component';

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
  { path: 'Daily Work', component: DalilyWorkComponent },
  { path: 'Work', component: WorkComponent },
  { path: 'Entertainment', component: EntertainmentComponent },
  { path: 'Personal Project', component: PersonalProjectComponent },
  { path: 'Shopping', component: ShoppingComponent },
];
