import { Header2 } from "./Header2.js";
import { MemeGenerator } from "./memeGenerator.js";

function App() {
    return React.createElement(
        "div",
        null,
        React.createElement(Header2, null),
        React.createElement(MemeGenerator, null)
    );
}

export { App };