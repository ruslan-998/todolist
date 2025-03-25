import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskInput from "../components/TaskInput";

describe("TaskInput", () => {
    it("should call onAddTask when the button is clicked", () => {
        const onAddTask = jest.fn();
        render(<TaskInput onAddTask={onAddTask} />);

        const input = screen.getByPlaceholderText("What needs to be done?");
        const button = screen.getByText("Add");

        fireEvent.change(input, { target: { value: "New Task" } });
        fireEvent.click(button);

        expect(onAddTask).toHaveBeenCalledWith("New Task");
    });

    it("should clear input field after adding a task", () => {
        const onAddTask = jest.fn();
        render(<TaskInput onAddTask={onAddTask} />);

        const input = screen.getByPlaceholderText("What needs to be done?");
        const button = screen.getByText("Add");

        fireEvent.change(input, { target: { value: "New Task" } });
        fireEvent.click(button);

        expect(input).toHaveValue("");
    });

    it("should disable the add button if input is empty", () => {
        const onAddTask = jest.fn();
        render(<TaskInput onAddTask={onAddTask} />);

        const input = screen.getByPlaceholderText("What needs to be done?");
        const button = screen.getByText("Add");

        fireEvent.change(input, { target: { value: "" } });
        expect(button).toBeDisabled();
    });
});
