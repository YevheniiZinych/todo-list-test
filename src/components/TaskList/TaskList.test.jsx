import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TaskList } from "./TaskList";
import { TaskForm } from "../TaskForm/TaskForm";
import { Task } from "../Task/Task";
import App from "../../App";

describe("Check render task list", () => {
  it("create new task", () => {
    render(<App />, <TaskForm />, <TaskList />);

    const btn = screen.getByTestId("submit-btn");
    const input = screen.getByTestId("task-input");

    expect(screen.queryByTestId("task-item")).toBeNull();

    fireEvent.change(input, {
      target: { value: "Prepare dinner" },
    });

    fireEvent.click(btn);

    expect(screen.getByTestId("task-item")).toBeInTheDocument();
  });

  it("delete task", () => {
    render(<App />, <TaskForm />, <TaskList />, <Task />);

    const btn = screen.getByTestId("submit-btn");
    const input = screen.getByTestId("task-input");

    expect(screen.queryByTestId("task-item")).toBeNull();

    fireEvent.change(input, {
      target: { value: "Prepare dinner" },
    });

    fireEvent.click(btn);

    expect(screen.getByTestId("task-item")).toBeInTheDocument();
    screen.debug();

    const deleteBtn = screen.getByTestId("delete-btn");

    fireEvent.click(deleteBtn);

    expect(screen.queryByTestId("task-item")).toBeNull();
    screen.debug();
  });
});
