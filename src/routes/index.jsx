import { Routes as ReactRoutes, Route, Outlet } from "react-router-dom";
import { TodoListView } from "../views/TodoListView";

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<TodoListView />} />
      </Route>
      <Route path="*" element={<h1>404 - Not Found</h1>} />
    </ReactRoutes>
  );
};