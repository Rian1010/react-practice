function TodoItem(props) {
    var completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    };

    return React.createElement(
        "div",
        { className: "todo-item" },
        React.createElement("input", {
            type: "checkbox",
            checked: props.item.completed //determines if item should be checked or not
            , onChange: function onChange() {
                return props.handleChange(props.item.id);
            } //onChange is called to recognise which ID should be checked or unchecked
        }),
        React.createElement(
            "p",
            { style: props.item.completed ? completedStyle : null },
            props.item.text
        )
    );
}

export { TodoItem };