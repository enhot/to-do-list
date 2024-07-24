import { Injectable } from '@angular/core';
import { ServerTaskForm } from '../interfaces/server-task-form';

@Injectable({
  providedIn: 'root',
})
export class TaskSpinerService {
  constructor() {}

  public calculateOverallProgress(tasks: ServerTaskForm[]): number {
    const nowDate = new Date().getTime();
    let totalProgress = 0; //для накопления общего прогресса всех задач.
    let count = 0; // для подсчета количества задач.

    tasks.forEach((task) => {
      const dateStart = new Date(task.dateStart).getTime(); //
      const dateEnd = new Date(task.dateEnd).getTime();
      if (nowDate >= dateStart && nowDate <= dateEnd) {
        // находится ли текущая дата и время между start и end
        const totalDuration = dateEnd - dateStart; //общая продолжительность задачи в миллисекундах
        const elapsedDuration = nowDate - dateStart; //сколько прошло времени с началаи до сейчас
        totalProgress += (elapsedDuration / totalDuration) * 100; //Вычисление процента выполнения текущей задачи
      } else if (nowDate > dateEnd) {
        totalProgress += 100; // задача завершена
      }
      count++;
    });

    return count > 0 ? totalProgress / count : 0; //Возвращение среднего процента выполнения всех задач
  }
  public calculateGroupProgress(
    tasks: ServerTaskForm[],
    groupName: string
  ): number {
    const filteredTasks = tasks.filter(
      (task) => task.selectTaskGroup === groupName
    );
    return this.calculateOverallProgress(filteredTasks);
  }
}
