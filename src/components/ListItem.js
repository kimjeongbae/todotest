import { Link } from "react-router-dom";

function ListItem({ todo, onChecked, onDelete }) {
  

  return (
    <li key={todo.id}>
      <input type="checkbox" checked={todo.completed} onChange={() => onChecked(todo.id)} />
      <Link to={`/todos/${todo.id}`}>{todo.id}</Link> {todo.todo}
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </li>
  );
}

export default ListItem;