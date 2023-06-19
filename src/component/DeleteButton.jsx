import "../styles/DeleteButton.css";

export const DeleteButton = ({ todoId, deleteTodo }) => {
  return (
    <button className="delete-button" onClick={() => deleteTodo(todoId)}>
      X
    </button>
  );
};
