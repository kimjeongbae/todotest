import Nav from "../components/Nav";
import Insert from "../components/Insert";
import { useEffect, useRef } from "react";
import { useState } from "react";
import List from "../components/List";


function TodoList() {
    const lastId = useRef(4);

    const [todos, setTodos] = useState([]);
    


    useEffect(() => {
        const data = fetch('https://dummyjson.com/todos/')
            .then(res => res.json())
            .then(data => setTodos(data.todos));
    }, [])



    const onInsert = (e) => {
        e.preventDefault();

        console.log(e.target.text.value)


        setTodos([...todos, { id: lastId.current, text: e.target.text.value, checked: false }])
        lastId.current++;
        console.log(todos)
    }

    const onDelete = (id) => {
        const deleteTodos = todos.filter(todo => todo.id != id)
        setTodos(deleteTodos)
    }

    const onChecked = (id) => {
        const checkedTodos = todos.map((todo) => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
        setTodos(checkedTodos)
    }
    

    return (
        <div>
            <Nav headerName="TODO" />
            <Insert onInsert={onInsert} />
            <List todos={todos} onDelete={onDelete} onChecked={onChecked} />
        </div>

    );
}
export default TodoList;