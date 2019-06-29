function FormComponent(props) {
    return React.createElement(
        "main",
        null,
        React.createElement(
            "form",
            null,
            React.createElement("input", {
                name: "firstName",
                value: props.data.firstName,
                onChange: props.handleChange,
                placeholder: "First Name"
            }),
            React.createElement("br", null),
            React.createElement("input", {
                name: "lastName",
                value: props.data.lastName,
                onChange: props.handleChange,
                placeholder: "Last Name"
            }),
            React.createElement("br", null),
            React.createElement("input", {
                name: "age",
                value: props.data.age,
                onChange: props.handleChange,
                placeholder: "Age"
            }),
            React.createElement("br", null),
            React.createElement(
                "label",
                null,
                React.createElement("input", {
                    type: "radio",
                    name: "gender",
                    value: "male",
                    checked: props.data.gender === "male",
                    onChange: props.handleChange
                }),
                " Male"
            ),
            React.createElement("br", null),
            React.createElement(
                "label",
                null,
                React.createElement("input", {
                    type: "radio",
                    name: "gender",
                    value: "female",
                    checked: props.data.gender === "female",
                    onChange: props.handleChange
                }),
                " Female"
            ),
            React.createElement("br", null),
            React.createElement(
                "select",
                {
                    value: props.data.destination,
                    name: "destination",
                    onChange: props.handleChange
                },
                React.createElement(
                    "option",
                    { value: "" },
                    "-- Please Choose a destination --"
                ),
                React.createElement(
                    "option",
                    { value: "germany" },
                    "Germany"
                ),
                React.createElement(
                    "option",
                    { value: "norway" },
                    "Norway"
                ),
                React.createElement(
                    "option",
                    { value: "north pole" },
                    "North Pole"
                ),
                React.createElement(
                    "option",
                    { value: "south pole" },
                    "South Pole"
                )
            ),
            React.createElement("br", null),
            React.createElement(
                "label",
                null,
                React.createElement("input", {
                    type: "checkbox",
                    name: "isVegan",
                    onChange: props.handleChange,
                    checked: props.data.isVegan
                }),
                " Vegan?"
            ),
            React.createElement("br", null),
            React.createElement(
                "label",
                null,
                React.createElement("input", {
                    type: "checkbox",
                    name: "isKosher",
                    onChange: props.handleChange,
                    checked: props.data.isKosher
                }),
                " Kosher?"
            ),
            React.createElement("br", null),
            React.createElement(
                "label",
                null,
                React.createElement("input", {
                    type: "checkbox",
                    name: "isLactoseFree",
                    onChange: props.handleChange,
                    checked: props.data.isLactoseFree
                }),
                " Lactose Free?"
            ),
            React.createElement("br", null),
            React.createElement(
                "button",
                null,
                "Submit"
            )
        ),
        React.createElement("hr", null),
        React.createElement(
            "h2",
            null,
            "Entered information:"
        ),
        React.createElement(
            "p",
            null,
            "Your name: ",
            props.data.firstName,
            " ",
            props.data.lastName
        ),
        React.createElement(
            "p",
            null,
            "Your age: ",
            props.data.age
        ),
        React.createElement(
            "p",
            null,
            "Your gender: ",
            props.data.gender
        ),
        React.createElement(
            "p",
            null,
            "Your destination: ",
            props.data.destination
        ),
        React.createElement(
            "p",
            null,
            "Your dietary restrictions:"
        ),
        React.createElement(
            "p",
            null,
            "Vegan: ",
            props.data.isVegan ? "Yes" : "No"
        ),
        React.createElement(
            "p",
            null,
            "Kosher: ",
            props.data.isKosher ? "Yes" : "No"
        ),
        React.createElement(
            "p",
            null,
            "Lactose Free: ",
            props.data.isLactoseFree ? "Yes" : "No"
        )
    );
}
export { FormComponent };