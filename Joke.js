function Joke(props) {
    console.log(props.question);
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h3",
            { style: { display: !props.question && "none" } },
            "Question: ",
            props.question
        ),
        React.createElement(
            "h3",
            { style: { color: !props.question && "#888888" } },
            "Answer: ",
            props.punchLine
        ),
        React.createElement("hr", null)
    );
}

export { Joke };