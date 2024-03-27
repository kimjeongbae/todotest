import ListItem from "./ListItem";



function List({ todos, onDelete, onChecked }) {


  return (
    <ul>
      {todos.map(
        todo => 
        <ListItem key={todo.id} todo={todo} onDelete={onDelete} onChecked={onChecked} />
        )}
    </ul>
  );

}

export default List