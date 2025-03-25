import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "../components/TaskList";

describe("TaskList Component", () => {
    const mockTasks = [
        { text: "Task 1", completed: false },
        { text: "Task 2", completed: true },
    ];
    const mockOnToggleTask = jest.fn();

    it("renders tasks correctly", () => {
        render(<TaskList tasks={mockTasks} onToggleTask={mockOnToggleTask} />);
        expect(screen.getByText("Task 1")).toBeInTheDocument();
        expect(screen.getByText("Task 2")).toBeInTheDocument();
    });

    it("displays empty state when no tasks are provided", () => {
        render(<TaskList tasks={[]} onToggleTask={mockOnToggleTask} />);
        expect(screen.getByText("No tasks to display")).toBeInTheDocument();
    });

    it("calls onToggleTask when a task is clicked", () => {
        render(<TaskList tasks={mockTasks} onToggleTask={mockOnToggleTask} />);
        fireEvent.click(screen.getByText("Task 1"));
        expect(mockOnToggleTask).toHaveBeenCalledWith(0);
    });

    it("applies the correct class for completed tasks", () => {
        render(<TaskList tasks={mockTasks} onToggleTask={mockOnToggleTask} />);
        const completedTask = screen.getByText("Task 2");
        expect(completedTask).toHaveClass("completed");
    });
});
