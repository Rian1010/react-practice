function Conditional(props) {

    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Navbar"
        ),
        "//condition ? statement if true : statement if false",
        props.isLoading /*=== true (already a boolean)*/ ? React.createElement(
            "h1",
            null,
            "Loading... "
        ) : React.createElement(
            "h1",
            null,
            "Some cool stuff about conditional rendering"
        ),
        React.createElement(
            "h1",
            null,
            "Footer"
        )
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

export { Conditional };