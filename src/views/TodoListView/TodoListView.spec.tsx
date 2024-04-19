
import {TodoListView} from './index'
import { render, screen } from "@testing-library/react";
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
  });