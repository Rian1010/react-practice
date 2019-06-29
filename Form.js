var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form() {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this));

        _this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(Form, [{
        key: "handleChange",
        value: function handleChange(event) {
            var _event$target = event.target,
                name = _event$target.name,
                value = _event$target.value,
                type = _event$target.type,
                checked = _event$target.checked;

            type === "checkbox" ? this.setState(_defineProperty({}, name, checked)) : this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "main",
                null,
                React.createElement(
                    "form",
                    null,
                    React.createElement("input", {
                        name: "firstName",
                        value: this.state.firstName,
                        onChange: this.handleChange,
                        placeholder: "First Name"
                    }),
                    React.createElement("br", null),
                    React.createElement("input", {
                        name: "lastName",
                        value: this.state.lastName,
                        onChange: this.handleChange,
                        placeholder: "Last Name"
                    }),
                    React.createElement("br", null),
                    React.createElement("input", {
                        name: "age",
                        value: this.state.age,
                        onChange: this.handleChange,
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
                            checked: this.state.gender === "male",
                            onChange: this.handleChange
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
                            checked: this.state.gender === "female",
                            onChange: this.handleChange
                        }),
                        " Female"
                    ),
                    React.createElement("br", null),
                    React.createElement(
                        "select",
                        {
                            value: this.state.destination,
                            name: "destination",
                            onChange: this.handleChange
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
                            onChange: this.handleChange,
                            checked: this.state.isVegan
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
                            onChange: this.handleChange,
                            checked: this.state.isKosher
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
                            onChange: this.handleChange,
                            checked: this.state.isLactoseFree
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
                    this.state.firstName,
                    " ",
                    this.state.lastName
                ),
                React.createElement(
                    "p",
                    null,
                    "Your age: ",
                    this.state.age
                ),
                React.createElement(
                    "p",
                    null,
                    "Your gender: ",
                    this.state.gender
                ),
                React.createElement(
                    "p",
                    null,
                    "Your destination: ",
                    this.state.destination
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
                    this.state.isVegan ? "Yes" : "No"
                ),
                React.createElement(
                    "p",
                    null,
                    "Kosher: ",
                    this.state.isKosher ? "Yes" : "No"
                ),
                React.createElement(
                    "p",
                    null,
                    "Lactose Free: ",
                    this.state.isLactoseFree ? "Yes" : "No"
                )
            );
        }
    }]);

    return Form;
}(React.Component);

export { Form };