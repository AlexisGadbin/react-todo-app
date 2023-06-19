import "../styles/UpdateTodo.css";

export const UpdateTodo = ({ todo, updateTodo }) => {
  return (
    <div className="update-button-div">
      <input
        type="checkbox"
        name="updateTodo"
        id="updateTodo"
        className="update-button"
        checked={todo.status === 1}
        onChange={() => updateTodo(todo.id)}
      />
    </div>
  );
};
