import "./styles.scss";

interface TodoFooterProps {
    filter: "all" | "active" | "completed";
    setFilter: (filter: "all" | "active" | "completed") => void;
    remainingTasksCount: number;
    onClearCompleted: () => void;
}

const TodoFooter: React.FC<TodoFooterProps> = ({
    filter,
    setFilter,
    remainingTasksCount,
    onClearCompleted,
}) => {
    return (
        <div className="todo-footer">
            <span>{remainingTasksCount} item{remainingTasksCount !== 1 ? "s" : ""} left</span>
            <div className="filters">
                <button
                    className={filter === "all" ? "active" : ""}
                    onClick={() => setFilter("all")}
                >
                    All
                </button>
                <button
                    className={filter === "active" ? "active" : ""}
                    onClick={() => setFilter("active")}
                >
                    Active
                </button>
                <button
                    className={filter === "completed" ? "active" : ""}
                    onClick={() => setFilter("completed")}
                >
                    Completed
                </button>
            </div>
            <button className="clear-completed" onClick={onClearCompleted}>
                Clear completed
            </button>
        </div>
    );
};

export default TodoFooter;
