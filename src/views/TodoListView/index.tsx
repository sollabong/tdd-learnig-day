import { useState } from "react";

export const TodoListView = () => {
    const [todos, setTodos] = useState<string[]>([])
    return (
        <div data-testid="todo-list-view">
          <h1>Todo List View</h1>
          <input data-testid="todo-input" type ="text" />
          <button data-testid="submit-button">Submit</button>
          <div data-testid="todo-list"></div>
        </div>
    );
}