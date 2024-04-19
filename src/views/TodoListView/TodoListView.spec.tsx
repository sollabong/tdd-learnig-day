
import React from 'react';
import {TodoListView} from './index'
import { fireEvent, render, screen } from "@testing-library/react";
// describe("<TodoListView />", () => {
//     it("should render view", () => {
//         throw Error("Not implemented");
//     });
// });

describe("<TodoListView />", () => {
    it("should render view", () => {
      render(<TodoListView />);
      expect(screen.getByTestId("todo-list-view")).toMatchSnapshot();
      expect(screen.getByTestId("todo-list-view")).toHaveTextContent("Todo List View");
    });
    it("should render todo input field", () => {
      render(<TodoListView />);
      expect(screen.getByTestId("todo-input")).toBeInTheDocument();
    });
    it("should render button", () => {
      render(<TodoListView />);
      expect(screen.getByTestId("submit-button")).toBeInTheDocument();
    });
    it("should render list", () => {
      render(<TodoListView />);
      expect(screen.getByTestId("todo-list")).toBeInTheDocument();
    });

    describe("the Submit Button", () => {
        it("should update todos state on click", () => {
        });
        // it("add a new element to the todos state", () => {
        //     const { todos } = TodoListView();
        //     // const todosLength = todos.length;
        //     render(<TodoListView />);
        //     const addButton = screen.getByTestId("submit-button");
        //     fireEvent.click(addButton);
        //     expect(todos).toContain()
        //   });
    })
});