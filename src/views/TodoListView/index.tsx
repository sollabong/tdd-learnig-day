import { ChangeEvent, useState } from "react";

export const TodoListView = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [todo, setTodo] = useState<string>('');

    const handleClick = () => {
      setTodos([...todos, todo]);
      setTodo('');
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newTodo = e.target.value;
      setTodo(newTodo);
    }

    const deleteTodo = (index: number) => {
        const newTodos = todos.filter((_todo, i) => i !== index)
        setTodos(newTodos);
    }
    
    return (
        <div data-testid="todo-list-view">
          <h1>Todo List View</h1>
          <input data-testid="todo-input" type ="text" value={todo} onChange={(e) => handleChange(e)}/>
          <button data-testid="submit-button" onClick={handleClick}>Submit</button>
          <div data-testid="todo-list">
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>
                  <div>
                    {todo}
                    <button onClick={() => deleteTodo(index)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
    );
}