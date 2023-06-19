import "../styles/TodoItem.css";
import { DeleteButton } from "./DeleteButton";
import { UpdateTodo } from "./UpdateTodo";

export const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  return (
    <li className={`todo-list-item ${todo.status ? "done" : ""}`}>
      <UpdateTodo todo={todo} updateTodo={updateTodo} />
      <p className="todo-list-item-text">{todo.text}</p>
      <DeleteButton deleteTodo={deleteTodo} todoId={todo.id} />
    </li>
  );
};
