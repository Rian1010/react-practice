function Conditional(props) {

    return (
        <div>
            <h1>Navbar</h1>
            //condition ? statement if true : statement if false
            {props.isLoading /*=== true (already a boolean)*/ ? <h1>Loading... </h1> : <h1>Some cool stuff about conditional rendering</h1>}
            
            <h1>Footer</h1>
        </div>
    );

    /* if (props.isLoading === true) {
        return (
            <h1>Loading...</h1>
        );
    } // This is not needed: else {
    return (
        <h1>Some cool stuff about conditional rendering</h1>
    );
    //}*/
}


export { Conditional }