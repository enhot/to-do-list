import { Pipe, PipeTransform } from '@angular/core';
import { ServerTaskForm } from '../interfaces/server-task-form';

@Pipe({
  name: 'sortPipe',
  standalone: true,
})
export class SortPipe implements PipeTransform {
  transform(tasks: ServerTaskForm[] | null): ServerTaskForm[] {
    if (!tasks) {
      return [];
    }

    return tasks.sort((a, b) =>
      a.selectTaskGroup.localeCompare(b.selectTaskGroup)
    );
  }
}
