function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    };

    return (
        <div className="todo-item">
            <input 
            type="checkbox" 
            checked={props.item.completed} //determines if item should be checked or not
            onChange={() => props.handleChange(props.item.id)}//onChange is called to recognise which ID should be checked or unchecked
            />
            <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
            
    </div>
    );
}

export { TodoItem };
