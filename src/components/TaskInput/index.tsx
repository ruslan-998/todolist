import { useState } from "react";
import "./styles.scss";

interface TaskInputProps {
    onAddTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
    const [newTask, setNewTask] = useState<string>("");

    const handleAddTask = () => {
        if (newTask.trim()) {
            onAddTask(newTask.trim());
            setNewTask("");
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && newTask.trim()) {
            handleAddTask();
        }
    };

    return (
        <div className="todo-input">
            <input
                type="text"
                placeholder="What needs to be done?"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button
                onClick={handleAddTask}
                disabled={!newTask.trim()}
                className={!newTask.trim() ? "disabled" : ""}
            >
                Add
            </button>
        </div>
    );
};

export default TaskInput;
