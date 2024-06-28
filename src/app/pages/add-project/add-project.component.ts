import { Component, OnInit, Inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AddProjectFormComponent } from '../../components/add-project-form/add-project-form.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [HeaderComponent, AddProjectFormComponent, HttpClientModule],
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
  providers: [],
})
export class AddProjectComponent {}
