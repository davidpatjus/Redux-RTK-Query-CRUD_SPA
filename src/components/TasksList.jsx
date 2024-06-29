import { useGetTasksQuery, useDeleteTaskMutation, useUpdateTaskMutation } from "../api/apislice";
import './TasksList.css';

function TasksList() {
  const { data, isLoading, isError, error } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <ul>
        {data.map((task) => (
          <li key={task.id}>
            <h3>{task.name}</h3>
            <p>ID: {task.id}</p>
            <p>Description: {task.description}</p>
            <div className="completed-checkbox">
              <input
                type="checkbox"
                checked={task.completed}
                id={task.id}
                onChange={(e) => updateTask({ ...task, completed: e.target.checked })}
              />
              <label>Completed</label>
            </div>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TasksList;
