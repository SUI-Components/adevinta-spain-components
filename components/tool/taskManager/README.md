# ToolTaskManager

## How can TaskManager help me?

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
2. The ToolTaskManager component, which renders a UI to let the user know about the existing tasks and its status. 

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

Each of these methods allow to perform a specific interaction with the system, let's see them on detail.

### runSimpleTask

Sometimes a task is simple and consists only in one unit of work. In these cases, the TaskManager context offers a method that allows to easily create a new task receiving the following parameters:

```js
runTask({
  name: 'My simple task',
  onComplete: () => console.log('Task has been successfully completed'),
  onError: () => console.log('Something wrong happened'),
  start: () => console.log('Yeah, I have started to execute the task')
})
```

Under the hood, this command will create a new task which will contain just one `work` item.

### Under construction

This section is under construction, please refer to the domain tests in order to see examples of how to work with the exposed API.