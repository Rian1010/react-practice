

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));

//Part 6
/*function ContactCard(props) {
    console.log(props)
    return (
        <div className="contacts">
            <div className="contact-card">
                <img src={props.contact.imgUrl}/>
                <h3>{props.contact.name}</h3>
                <p>Phone: {props.contact.phone}</p>
                <p>Email: {props.contact.email}</p>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="contacts">
            <ContactCard 
                contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
                
                COMMENT THIS IN
                name="Mr. Whiskerson"
                imgUrl="http://placekitten.com/300/200"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
                />
            <ContactCard 
            contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com"}}
                
                COMMENT THIS IN
                name="Fluffykins"
                imgUrl="http://placekitten.com/400/200"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <ContactCard 
            contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
                
                COMMENT THIS IN
                name="Destroyer"
                imgUrl="http://placekitten.com/400/300"
                phone="(212) 555-3456"
                email="ofworlds@yahoo.com"
            />
            <ContactCard 
                contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
                
                COMMENT THIS IN
                name="Felix"
                imgUrl="http://placekitten.com/200/100"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

*/

//Part 5
/*function App() {
    const date = new Date(2019, 5, 12, 10);
    
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
        fontSize: "70px",
        textAlign: "center",
    };
    
    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#8914A3"
    } else {
        timeOfDay = "night"
        styles.color = "#orange"
    }
    
    
    return (
        <h1 style={styles}>Good {timeOfDay}!</h1>    
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
*/

//Part 4
/*function App() {
    const firstName = "Bob"
    const lastName = "Ziroll"
    
    return (
        <h1>Hello {firstName + " " + lastName}!</h1>
        or {´${firstName} ${lastName}´! works the same
        );
}

ReactDOM.render(<App />, document.getElementById("root"));
*/

//Part 3 
/*
import TodoItem from "./TodoItem.js"
function App() {
    return (
        <div className="todo-item">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById("root"));
*/

//Part 2
/*function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
        );
}

function Header() {
    return (
        <header>This is the header</header>
    );
}

function MainContent() {
    return (
        <main>This is the main section</main>
    );
}

function Footer() {
    return (
        <footer>This is the footer</footer>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
*/

//Part 1
/*function App() {
    return (
        <div>
        
        <Header />
        <Main />
        <Footer />
        
        </div>
    );
}

function Header() {
    return (
        <h1>Welcome to my React Website! :D</h1>
    )
}

function Main() {
    return (
        <div>
        <nav>
            <h1>Hello a third time!</h1>
            <ul>
            <li>Thing 1</li>
            <li>Thing 2</li>
            <li>Thing 3</li>
            </ul>
        </nav>
        <main>
            <p>This is where most of my content will go...</p>
        </main>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <h3>This is my footer element</h3>
        </footer>)
}

ReactDOM.render(<App />, document.getElementById("root"));
*/

//function MyInfo () {
//   return (
//  <div>
//      <h1>Rian</h1>
//      <p>My vacation goals</p>
//      <ul>
//          <li>South Korea</li>
//          <li>Japan</li>
//          <li>Singapore</li>
//      </ul>
//  </div>);
//}

// const Aapp = => <h1>Hello world!</h1> This works too!

/*ReactDOM.render(
    <MyInfo />,
    document.getElementById("root"));*/

/*var myNewP = document.createElement("p")
myNewP.innerHTML = "This is a paragraph";

return myNewP;*/