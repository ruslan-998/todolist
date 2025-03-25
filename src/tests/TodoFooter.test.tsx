import { render, screen, fireEvent } from "@testing-library/react";
import TodoFooter from "../components/TodoFooter";

describe("TodoFooter Component", () => {
    const mockSetFilter = jest.fn();
    const mockOnClearCompleted = jest.fn();

    it("renders the correct number of remaining tasks", () => {
        render(
            <TodoFooter
                filter="all"
                setFilter={mockSetFilter}
                remainingTasksCount={2}
                onClearCompleted={mockOnClearCompleted}
            />
        );
        expect(screen.getByText("2 items left")).toBeInTheDocument();
    });

    it("triggers setFilter when a filter button is clicked", () => {
        render(
            <TodoFooter
                filter="all"
                setFilter={mockSetFilter}
                remainingTasksCount={0}
                onClearCompleted={mockOnClearCompleted}
            />
        );
        fireEvent.click(screen.getByText("Active"));
        expect(mockSetFilter).toHaveBeenCalledWith("active");
    });

    it("calls onClearCompleted when 'Clear completed' is clicked", () => {
        render(
            <TodoFooter
                filter="all"
                setFilter={mockSetFilter}
                remainingTasksCount={0}
                onClearCompleted={mockOnClearCompleted}
            />
        );
        fireEvent.click(screen.getByText("Clear completed"));
        expect(mockOnClearCompleted).toHaveBeenCalled();
    });

    it("applies the 'active' class to the selected filter", () => {
        render(
            <TodoFooter
                filter="completed"
                setFilter={mockSetFilter}
                remainingTasksCount={0}
                onClearCompleted={mockOnClearCompleted}
            />
        );
        const completedButton = screen.getByText("Completed");
        expect(completedButton).toHaveClass("active");
    });
});
