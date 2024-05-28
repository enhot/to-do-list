import { Component, OnInit, Inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AddProjectFormComponent } from '../../components/add-project-form/add-project-form.component';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [HeaderComponent, AddProjectFormComponent],
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
  providers: [],
})
export class AddProjectComponent {}
