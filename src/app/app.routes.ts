import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddProjectComponent } from './pages/add-project/add-project.component';
import { loginUserGuard } from './guards/login-user.guard';
import { CaseTaskComponent } from './pages/view-task/task-group/case-task/case-task.component';
import { DalilyWorkComponent } from './pages/view-task/task-group/dalily-work/dalily-work.component';
import { WorkComponent } from './pages/view-task/task-group/work/work.component';
import { EntertainmentComponent } from './pages/view-task/task-group/entertainment/entertainment.component';
import { PersonalProjectComponent } from './pages/view-task/task-group/personal-project/personal-project.component';
import { ShoppingComponent } from './pages/view-task/task-group/shopping/shopping.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { AllTasksComponent } from './pages/all-tasks/all-tasks.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signIn', component: SignInComponent },
  {
    path: 'viewTask',
    loadComponent: () =>
      import('./pages/view-task/view-task.component').then(
        (m) => m.ViewTaskComponent
      ),
    canActivate: [loginUserGuard],
  },
  { path: 'allTasks', component: AllTasksComponent },
  { path: 'Case', component: CaseTaskComponent },
  { path: 'Daily Work', component: DalilyWorkComponent },
  { path: 'Work', component: WorkComponent },
  { path: 'Entertainment', component: EntertainmentComponent },
  { path: 'Personal Project', component: PersonalProjectComponent },
  { path: 'Shopping', component: ShoppingComponent },
  { path: 'addProject', component: AddProjectComponent },
  { path: 'myProfile', component: MyProfileComponent },
];
