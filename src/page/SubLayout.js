import Nav from "../components/Nav";

function SubLayout ({children}) {
    return (
        <>
            <Nav />
            <>{children}</>
        </>

    );

}

export default SubLayout;