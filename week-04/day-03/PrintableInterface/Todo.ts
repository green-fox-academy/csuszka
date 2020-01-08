'use strict';

import { Printable } from './Printable';

export class Todo implements Printable {
  task: string;
  priority: string;
  done: boolean;

  constructor(task: string, priority: string, done: boolean) {
    this.task = task;
    this.priority = priority;
    this.done = done;
  }

  printAllFields(): void {
    console.log(`Task: ${this.task} | Priority: ${this.priority} | Done: ${this.done}`);
  };
}