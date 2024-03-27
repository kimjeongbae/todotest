import { Link } from "react-router-dom";

function Nav({ headerName }) {
    return (
        <nav>
            <Link to="/">HOME</Link>
            <br></br>
            <Link to="/todos">TODO</Link>
            <br></br>
        </nav>

    );

}

export default Nav