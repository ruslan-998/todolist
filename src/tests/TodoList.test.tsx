import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
    it("adds a task when a new task is submitted", () => {
        render(<TodoList />);
        fireEvent.change(screen.getByPlaceholderText("What needs to be done?"), {
            target: { value: "New Task" },
        });
        fireEvent.click(screen.getByText("Add"));
        expect(screen.getByText("New Task")).toBeInTheDocument();
    });

    it("toggles task completion status when a task is clicked", () => {
        render(<TodoList />);
        fireEvent.change(screen.getByPlaceholderText("What needs to be done?"), {
            target: { value: "Toggle Task" },
        });
        fireEvent.click(screen.getByText("Add"));
        fireEvent.click(screen.getByText("Toggle Task"));
        expect(screen.getByText("Toggle Task")).toHaveClass("completed");
    });

    it("filters tasks based on the selected filter", () => {
        render(<TodoList />);
        fireEvent.change(screen.getByPlaceholderText("What needs to be done?"), {
            target: { value: "Task 1" },
        });
        fireEvent.click(screen.getByText("Add"));
        fireEvent.click(screen.getByText("Task 1"));
        fireEvent.click(screen.getByText("Active"));
        expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
        fireEvent.click(screen.getByText("Completed"));
        expect(screen.getByText("Task 1")).toBeInTheDocument();
    });

    it("clears completed tasks when 'Clear completed' is clicked", () => {
        render(<TodoList />);
        fireEvent.change(screen.getByPlaceholderText("What needs to be done?"), {
            target: { value: "Completed Task" },
        });
        fireEvent.click(screen.getByText("Add"));
        fireEvent.click(screen.getByText("Completed Task"));
        fireEvent.click(screen.getByText("Clear completed"));
        expect(screen.queryByText("Completed Task")).not.toBeInTheDocument();
    });
});
