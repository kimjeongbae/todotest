import Nav from "./components/Nav";
import Insert from "./components/Insert";
import { useRef } from "react";
import { useState } from "react";
import List from "./components/List";


function App() {
  
  const lastId = useRef(4);

  const [todos, setTodos] = useState([
    {id: 1, text: "할일 1", checked: true},
    {id: 2, text: "할일 2", checked: false},
    {id: 3, text: "할일 3", checked: false}
  ]);

  const onInsert = (e) => {
    e.preventDefault();

    console.log(e.target.text.value)


    setTodos([...todos, {id: lastId.current, text: e.target.text.value, checked: false}])
    lastId.current++;
    console.log(todos)
  }
  
  const onDelete = (id) => {
    const deleteTodos = todos.filter(todo => todo.id != id)
    setTodos(deleteTodos)
  }

  const onChecked = (id) => {
    const checkedTodos = todos.map((todo) => todo.id === id ? {...todo, checked: !todo.checked} : todo)
    setTodos(checkedTodos)
  }

  
  return (
    <div className="App">
      <Nav headerName = "TODO" />
      <Insert onInsert = {onInsert} />
      <List todos= {todos} onDelete = {onDelete} onChecked={onChecked} />
    </div>
  );
}

export default App;