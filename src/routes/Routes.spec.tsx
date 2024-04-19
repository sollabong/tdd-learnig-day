import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Routes } from "./index";


jest.mock("../views/TodoListView", () => ({
  TodoListView: () => <div data-testid="todo-list-view">Todo List View</div>,
}));

const renderRoutes = (route = "/") => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes />
    </MemoryRouter>
  );
};

describe("<Routes />", () => {
  it("should show home view", () => {
    renderRoutes();
    expect(screen.getByTestId("todo-list-view")).toBeInTheDocument();
  });
});