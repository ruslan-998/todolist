import { useState } from "react";

import TaskInput from "../TaskInput";
import TaskList from '../TaskList'
import TodoFooter from "../TodoFooter";

import "./styles.scss";

interface Task {
    text: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

    const handleAddTask = (text: string) => {
        setTasks([...tasks, { text, completed: false }]);
    };

    const handleTaskToggle = (index: number) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const handleClearCompleted = () => {
        setTasks(tasks.filter((task) => !task.completed));
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
    });

    const remainingTasksCount = tasks.filter((task) => !task.completed).length;

    return (
        <div className="todo-container">
            <h1>todos</h1>
            <TaskInput onAddTask={handleAddTask} />
            <TaskList tasks={filteredTasks} onToggleTask={handleTaskToggle} />
            <TodoFooter
                filter={filter}
                setFilter={setFilter}
                remainingTasksCount={remainingTasksCount}
                onClearCompleted={handleClearCompleted}
            />
        </div>
    );
};

export default TodoList;
