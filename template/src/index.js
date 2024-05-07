// task-scheduler.js

class TaskScheduler {
  constructor() {
    this.tasks = [];
    this.timer = null;
  }

  scheduleTask(taskFn, interval) {
    const task = { fn: taskFn, interval };
    this.tasks.push(task);
    if (!this.timer) {
      this.timer = setInterval(this.runTasks.bind(this), interval);
    }
  }

  runTasks() {
    this.tasks.forEach(task => {
      try {
        task.fn();
      } catch (error) {
        console.error('Error running task:', error);
      }
    });
  }

  cancelAllTasks() {
    clearInterval(this.timer);
    this.tasks = [];
    this.timer = null;
  }
}

module.exports = TaskScheduler;
