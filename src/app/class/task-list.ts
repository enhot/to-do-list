import { TaskListInterface } from '../interfaces/task-list-interface';

export class TaskList {
  taskList: TaskListInterface[] = [
    { id: 1, task: 'Case', icon: 'assets/images/add-project/work.svg' },
    { id: 2, task: 'Daily Work', icon: 'assets/images/add-project/work.svg' },
    { id: 3, task: 'Work', icon: 'assets/images/add-project/work.svg' },
    {
      id: 4,
      task: 'Entertainment',
      icon: 'assets/images/add-project/work.svg',
    },
    {
      id: 5,
      task: 'Personal Project',
      icon: 'assets/images/add-project/work.svg',
    },
    { id: 6, task: 'Shopping', icon: 'assets/images/add-project/work.svg' },
  ];
}
