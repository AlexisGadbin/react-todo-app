import "../styles/TodoList.css";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div className="todo-list-div">
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    </div>
  );
};
