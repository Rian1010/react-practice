var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MemeGenerator = function (_React$Component) {
    _inherits(MemeGenerator, _React$Component);

    function MemeGenerator() {
        _classCallCheck(this, MemeGenerator);

        var _this = _possibleConstructorReturn(this, (MemeGenerator.__proto__ || Object.getPrototypeOf(MemeGenerator)).call(this));

        _this.handleChange = function (event) {
            var _event$target = event.target,
                name = _event$target.name,
                value = _event$target.value;

            _this.setState(_defineProperty({}, name, value));
        };

        _this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        };
        // this.handleChange = this.handleChange.bind(this); This is not required with 'handleChange = (event) => {'
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(MemeGenerator, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            fetch("https://api.imgflip.com/get_memes").then(function (response) {
                return response.json();
            }).then(function (response) {
                var memes = response.data.memes; //pulls the memes array from response.data

                _this2.setState({ allMemeImgs: memes });
            });
        }

        //handleChange(event) {

    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            event.preventDefault();
            // get a random int (index in the array) 
            var randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
            //get the meme from that index
            var randMemeImg = this.state.allMemeImgs[randNum].url;
            // set 'randomImg' to the '.url' of the random item I grabbed
            this.setState({ randomImg: randMemeImg });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { className: "meme-form", onSubmit: this.handleSubmit },
                    React.createElement("input", {
                        type: "text",
                        name: "topText",
                        placeholder: "Top Text",
                        value: this.state.topText,
                        onChange: this.handleChange
                    }),
                    React.createElement("input", {
                        type: "text",
                        name: "bottomText",
                        placeholder: "Bottom Text",
                        value: this.state.bottomText,
                        onChange: this.handleChange
                    }),
                    React.createElement(
                        "button",
                        null,
                        "Gen"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "meme" },
                    React.createElement("img", { src: this.state.randomImg, alt: "" }),
                    React.createElement(
                        "h2",
                        { className: "top" },
                        this.state.topText
                    ),
                    React.createElement(
                        "h2",
                        { className: "bottom" },
                        this.state.bottomText
                    )
                )
            );
        }
    }]);

    return MemeGenerator;
}(React.Component);

export { MemeGenerator };