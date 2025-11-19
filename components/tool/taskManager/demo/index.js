import ToolTaskManager, {TaskManagerProvider} from 'components/tool/taskManager/src'

// Simple function that logs to console
const handleTasksChange = (tasks) => {
  console.log('=== VISIBLE TASKS ===')
  console.log('Number of tasks:', tasks.length)
  console.log('Complete list:', tasks)

  if (tasks.length > 0) {
    console.log('First task:', tasks[0])
    tasks.forEach((task, index) => {
      console.log(`Task ${index + 1}:`, {
        id: task.id,
        name: task.name,
        status: task.status,
        work: task.work?.length || 0
      })
    })
  } else {
    console.log('No visible tasks')
  }
}

export default () => (
  <TaskManagerProvider>
    <ToolTaskManager
      onVisibleTasksChange={handleTasksChange}
    />
  </TaskManagerProvider>
)
