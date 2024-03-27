import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubLayout from "./SubLayout";


function TodoAbout() {

    const params = useParams();
    const [todo, setTodo] = useState([]);



    useEffect(() => {
        const data = fetch('https://dummyjson.com/todos/' + params.id)
            .then(res => res.json())
            .then(data => setTodo(data));
    }, [])

    return (
        <>
            <SubLayout>
                <span>ID :</span>{todo.id}
                <br></br>
                <span>TODO :</span>{todo.todo}
            </SubLayout>
        </>

    );


}

export default TodoAbout;