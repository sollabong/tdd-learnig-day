
import React from 'react';
import {TodoListView} from './index'
import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from 'react';

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
        it("should add new todo item on submit-button click", () => {
          render(<TodoListView />);
          const inputElement = screen.getByTestId('todo-input');
          const submitButton = screen.getByTestId("submit-button");

          fireEvent.change(inputElement, { target: { value: 'New Todo Item' } });
          fireEvent.click(submitButton);

          expect(screen.getByText('New Todo Item')).toBeInTheDocument();

          /*
          const useStateSpy = jest.spyOn(React, 'useState');
          useStateSpy.mockReturnValueOnce([['New Todo'], jest.fn()]);
          render(<TodoListView />);

          const submitButton = screen.getByTestId("submit-button");
          fireEvent.click(submitButton);

          expect(useStateSpy).toHaveBeenCalled();
          expect(useStateSpy).toHaveBeenCalledWith('New Todo');
          */
          /*
          const setState = jest.fn();
          jest.spyOn(React, 'useState').mockImplementation((init) => [init, setState]);
      
          const submitButton = screen.getByTestId("submit-button");
          fireEvent.click(submitButton);

          expect(setState).toHaveBeenCalledWith(['New Todo']);
          */
          /*
          const handleClick = jest.fn();
          render(<TodoListView />);
          const submitButton = screen.getByTestId("submit-button");
          fireEvent.click(submitButton);
          expect(handleClick).toBeCalled();
          */
        });
        it("should be visible the remove button next to the todo item", () => {
          render(<TodoListView />);
          const inputElement = screen.getByTestId('todo-input');
          const submitButton = screen.getByTestId("submit-button");

          fireEvent.change(inputElement, { target: { value: 'New Todo Item' } });
          fireEvent.click(submitButton);

          const removeButton = screen.getByText("Remove");

          expect(removeButton).toBeInTheDocument();
        });
    })
});