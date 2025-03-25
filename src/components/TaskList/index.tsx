import "./styles.scss";

interface Task {
    text: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
    onToggleTask: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask }) => {
    return (
        <ul className="todo-list">
            {tasks.length === 0 ? (
                <div className="empty-widget">
                    <div className="icon">🚀</div>
                    <p>No tasks to display</p>
                </div>
            ) : (
                tasks.map((task, index) => (
                    <li
                        key={index}
                        className={`todo-item ${task.completed ? "completed" : ""}`}
                        onClick={() => onToggleTask(index)}
                    >
                        {task.text}
                    </li>
                ))
            )}
        </ul>
    );
};

export default TaskList;
