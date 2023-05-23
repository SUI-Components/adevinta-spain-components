# ToolTaskManager

## How can TaskManager help me?

This component provides a set of tools and methods to register and run async tasks. It is specially useful in situations where heavy tasks need to be executed, or when a task is composed by many differentiated steps or actions that could depend between them.

TaskManager not only offers an API to run these kind of jobs, but also provides a system and a user interface to manage them. TaskManager can take care of making some specific actions when a task is completed, cancelled, or when an error occurs. It can also take care of retrying a specific job a number of times, or log errors to a third-party logging system. 

Additionally, as each task needs to match the shape expected by the TaskManager API's, the usage of TaskManager enforces having a more structured task definition, which at the end contributes to a more readable and maintainable application.

## Main entities

TaskManager mainly works with two entities, which are the followings:

### Task

A task is an undivisible set of actions which represent a transaction. The sum of the successful execution of these actions, which can depend between them, leads to a fully completed transaction.

Within the whole TaskManager system, these actions that compose a task are called `work`.

Therefore, a `task` can be considered just a group of `work` that will only be completed, once all of its `work` is sucessfully executed. If one single `work` from a task fails or is cancelled, the transaction is not fully completed, so the `task` execution is not considered sucessful.

Alongisde with this set of `work` items, some metadata is defined, like a name, a unique identifier, among others.

### Work

As it is previoustly mentioned, a `work` is a specific action which belongs to a `task`.

For example, updating an ad from a digital marketplace could be a kind of transaction: It is composed by many operations that need to be successfully executed in order to consider that the ad has been properly updated.

In this example, the `task` would be updating a specific ad, and its work items may be hipothetically composed by:

1. Update the ad metadata.
2. Remove old unselected photos.
3. Upload new selected photos.

As stated before, this example meets two main conditions:

1. We can only consider that the `task` (updating an ad) is successfully executed once all these `work` items are finished. If some of them fails or is cancelled, the whole `task` unit cannot be considered as finshed, as the ad would not be completelly updated.
2. It could be a dependency between the existing `work` items, as maybe it is not possible to upload new photos until the old ones are removed. Therefore, we can describe the `work` number three as dependant on the `work` number two. It cannot be executed until the previous one finishes with success. 

## Basic usage

### Installation

```sh
$ npm install @s-ui/sui-tool-task-manager
```

### Render the component

The TaskManager component requires two main elements to be rendered in order to work:

1. A Context Provider, which stores the state of the TaskManager system, and exposes an API to interact with it. Please note that the Conext Provider needs to wrap all components that will interact with the TaskManager, so it is advised to render it near to the root of the components tree.
2. The ToolTaskManager component, which renders a UI to let the user know about the existing tasks and their status. 

```js
import ToolTaskManager, { TaskManagerProvider } from '@s-ui/sui-tool-task-manager'

return (
  <TaskManagerProvider>
    <ToolTaskManager isVisible={true} />
  </TaskManagerProvider>
)
```

Note that the ToolTaskManager component can be rendered in a hidden mode. This is intended to allow using the TaskManager system in webapps where a task managing UI is not required. This way, TaskManager system can be required and used in a "silent" mode that won't be perceived by the end-user and won't have impact on the interface.

### Import the styles (Sass)

```css
@import '~@s-ui/theme/lib/index';
/* @import 'your theme'; */
@import '~@s-ui/sui-tool-task-manager/lib/index';
```

## Working with the API

The first requirement to have access to the TaskManager API is to get the context available data:

```jsx
import {useTaskManagerContext} from '@s-ui/sui-tool-task-manager'
```

Then, inside the component's render function, the context value can be accessed:

```jsx
const {
  cancelWork,
  errorWork,
  runTask,
  runSimpleTask,
  setPercentage,
  finishWork,
} = useTaskManagerContext()
```

Each of these methods allows to perform a specific interaction with the system, let's see them on detail.

## Available methods

| method | description  | parameters |
|--------|--------------|------------|
| cancelWork | Marks a work as cancelled  | `taskId: string, workId: string` |
| errorWork | Marks a work as errored | `taskId: string, workId: string, log: string` |
| runTask       | Runs a complex task composed by one or more work | `{ name: string, work: Work[] }` |
| runSimpleTask | Runs a simple task composed by just one work, and including the minimum possible amount of metadata | `{ name: string, onComplete: function, onError: function, start: function }` |
| setPercentage | Sets the completion percentage of an specific work | `taskId: string, workId: string, percentage: number` |
| finishWork    | Marks a work as finished, which will lead to running the next queued work or marking the task as finished if all work has been completed | `taskId: string, workId: string` |

## runTask

Runs a complex `task` composed by one or more `work`. 
Each `work` needs to have at least an entry point defined. The entry point must be a callback `function` contained within the `start` property.

```js
runTask({
  name: 'Complex task test',
  work: [
    {
      id: 'This should be unique in the whole task. Leave it undefined to autogenerate',
      parentId: 'The work id that must be completed before this can be executed. Leave it undefined to have no-dependencies.'
      retryAttempts: 3, // Will try the start method three times before calling the onError function
      name: 'Complex task first work',
      onComplete: () => alert('This work has been completed'),
      onError: () => alert('This work has thrown an error'),
      start: (work) => {
        console.log('Running work, all work data is available inside the work variable')
        let interval
        let iteration = 0
        interval = setInterval(() => {
          console.log('Simulating async progress')
          iteration++
          setPercentage(work.taskId, work.id, iteration * 10)
          if (iteration >= 10) {
              finishWork(work.taskId, work.id)
              clearInterval(interval)
          }
        },500)
      }
    }
  ]
})
```
Please note how in the previous example, the `start` function represents the entry point of the work. It receives the whole `work` object so it can be later referenced when invoking the `finishWork` method in case the `work` successfully completes, or the `setPercentage` method to report `work` execution progress.

Once the work successfully finishes, the task will be automatically marked as finished too. In case of having more than one work (it could be done just by adding another element into the array), the system will then execute the next runnable `work` from the queue.

Additionally, note that it is possible to invoke different methods inside the `start` entry point. For example, if an error occurs, the start method should report it by invoking the `errorWork` method in a way similar to this:

`errorWork(work.taskId, work.id, 'Include here any available log information. Leave it undefined to include no-logs.')`

## runSimpleTask

Some tasks may not have multiple works. In fact, when migratin an already existing system to the TaskManager, we could have a lot of simple tasks composed just by one `work`.

In these cases, the ideal approach is to add new simple tasks by using the `runSimpleTask` method, which will create a simple `task` with one single `work`, and as little props as possible.

```js
runSimpleTask({
  name: 'Simple task test',
  onComplete: () => alert('This work has been completed'),
  onError: () => alert('This work has thrown an error'),
  start: (work) => {
    console.log('Running work, all work data is available inside the work variable')
    setTimeout(() => {
      console.log('Simulating async progress')
      finishWork(work.taskId, work.id)
      setPercentage(work.taskId, work.id, iteration * 10)
    },2000)
  }
})
```

If you do not need to include some specific callback (i.e. `onComplete` or `inError`, just leave it undefined. The only mandatory callback is the `start`, as it acts as the `work` entry point)
