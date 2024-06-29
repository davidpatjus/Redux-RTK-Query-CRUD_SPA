import { useCreateTaskMutation } from "../api/apislice";
import './TaskForm.css';

function TaskForm() {
    
    const [createTask] = useCreateTaskMutation();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value.trim();
        const description = e.target.elements.description.value.trim();
        const completed = e.target.elements.completed.checked;
        createTask({ name, description, completed });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Task Name
                <input type="text" name="name" placeholder="Enter task name" />
            </label>
            <label>
                Task Description
                <input type="text" name="description" placeholder="Enter task description" />
            </label>
            <div className="completed-checkbox">
                <input type="checkbox" name="completed" />
                <label>Completed</label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default TaskForm;
