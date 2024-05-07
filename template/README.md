# Task Scheduler

Task Scheduler is a simple JavaScript package that allows you to schedule and run tasks at specified intervals.

## Installation

You can install Task Scheduler via npm:

```bash
npm install task-scheduler-js
```

## Usage

```javascript
const TaskScheduler = require('task-scheduler-js');

// Instantiate TaskScheduler
const scheduler = new TaskScheduler();

// Schedule a task to run every 5 seconds
scheduler.scheduleTask(() => {
  console.log('Task executed!');
}, 5000);

// Cancel all tasks after 30 seconds
setTimeout(() => {
  scheduler.cancelAllTasks();
  console.log('All tasks canceled.');
}, 30000);
```

## API

### `TaskScheduler`

#### `constructor()`

Creates a new instance of TaskScheduler.

#### `scheduleTask(taskFn, interval)`

Schedules a task to run at the specified interval.

- `taskFn`: The function to be executed as the task.
- `interval`: The time interval (in milliseconds) at which the task should be executed.

#### `cancelAllTasks()`

Cancels all scheduled tasks.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
