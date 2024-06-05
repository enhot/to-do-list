import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { SendProjectFormService } from '../services/send-project-form.service';
import { ServerTaskForm } from '../interfaces/server-task-form';
import { BgTaskColors } from '../enum/bg-task';

@Directive({
  selector: '[appBgTaskForm]',
  standalone: true,
})
export class BgTaskFormDirective implements OnChanges {
  public dataFormTask: ServerTaskForm[] = [];

  @Input('appBgTaskForm') selectTaskGroup!: string;

  constructor(
    private render: Renderer2,
    private elRef: ElementRef,
    private getDataForm: SendProjectFormService
  ) {
    this.getDataForm.getTaskForm().subscribe({
      next: (data) => {
        this.dataFormTask = data;
        this.applyStyle();
      },
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectTaskGroup']) {
      this.applyStyle();
    }
  }

  private applyStyle(): void {
    if (!this.dataFormTask.length) return;

    const color =
      BgTaskColors[this.selectTaskGroup as keyof typeof BgTaskColors] ||
      'transparent';
    this.render.setStyle(this.elRef.nativeElement, 'background-color', color);
  }
}
