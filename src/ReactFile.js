

import { App } from "./App.js";


ReactDOM.render(<App />, document.getElementById("root"));










//Part 33 Inputs and Information

import { Form } from "./formContainer.js";
import { FormComponent } from "./formComponent.js";


function App() {
    return (
        <Form />
    )
}

ReactDOM.render(<App />, document.getElementById("root"));

















//Part 32 IMPORTANT Forms
/*
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColor: "white",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({
            [name]: checked
        }) : this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <input 
                type="text" 
                value={this.state.firstName} 
                name="firstName" 
                placeholder="First Name" 
                onChange={this.handleChange} 
                />
                <br />
                <input 
                type="text" 
                value={this.state.lastName} 
                name="lastName" 
                placeholder="Last Name" 
                onChange={this.handleChange} 
                />
                <br />
                <textarea 
                value={"Some default value"}
                onChange={this.handleChange}
                />
                <br /> 
                
                 <label>
                    <input 
                        type="checkbox" 
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> Is friendly?
                </label>
                <br />
                
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>
                //^{ Formik }
                <br />
                
                <label>Favorite Color: </label>
                <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="white">White</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>

                </select>
                
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are a {this.state.gender}</h2>
                <h2>Your favorite color is {this.state.favColor}</h2>
                <button onClick="">Submit</button>
            </form>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"))
*/




















//Part 31 Fetching Data From An API
/*
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {} //object because the data that is supposed to come in, is a object
        }
    }

    componentDidMount() {
            this.setState({loading: true})
        
        
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json()) //promise turns data into js
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            }) // promise receives data

    }

    render() {
        const text = this.state.loading ? "loading..." : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
*/














//Part 30 Completed Todo App
/*import { TodoItem } from "./TodoItem.js";
import { todosData } from "./todosData.js";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                    //if the id is equal to a specific id, it should equal the opposite of whatever it currently is
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map( */
/*object*/
/* item => <TodoItem key={item.id} */
/*prop*/
/*item={*/
/*object*/
/*item} handleChange={this.handleChange}/>);

        return (
            <div className="todo-list">
                {todoItems}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
*/















//Part 29
/*
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        };

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.setState (prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        });
    }

    render() {
        let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
        let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out";

        return (
            <div>
            <h1>{displayText}</h1>
            <button onClick={this.handleClick}>{buttonText}</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
*/
















//Part 28 Unread Messages
/*
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            unreadMessages: [
                "a",
                "New spam email available. All links are definitely safe to click."
            ]
        };
    }

    render() {
        return (
            <div>
                {
                this.state.unreadMessages.length > 0 &&
                <h2>You have {this.state.unreadMessages.length} unread messages!</h2> 
                }
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
*/

















//Part 27
/*
import { Conditional } from "./Conditional.js";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
                isLoading: true
        };
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            });
        }, 1500);
    }
    
    render() {
        return(
            <div>
            //3:10:00
                <Conditional isLoading={this.state.isLoading}/>
                
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
*/














// Part 26
/*
class App extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }
    //will not be usable anymore

    // componentWillMount() {

    //}

    componentDidMount() {
        // Get the data I need to correctly display
    }

    //will not be usable anymore
   // componentWillReceiveProps(nextProps) {
   //    if (nextProps.whatever !== this.props.whatever) {
            // do something important here
   //     }
   //}
    
    //Discouraged to use it
    static getDerivedStateFromProps(props, state) {
        // return the new, updated state based upon the props
        //
    }
    
    //not a super common lifecycle method that you'll end up using
    getSnapshotBeforUpdate() {
        // dreate a backup of the current way things are
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        // return true if want it to update
        // return false if not
    }
    
    //will not be usable anymore

    // componentWillUpdate() {

    //}

    

    componentWillUnmount() {
        // teardown or cleanup your code before your component disappears
        // (E.g. remove event listenr)
    }

    render() {
        return (
            <div>
                Code goes here
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))
*/










//Part 25 List
/*
import { TodoItem } from "./TodoItem.js";
import { todosData } from "./todosData.js";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>);

        return (
            <div className="todo-list">
                {todoItems}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
*/














//Part 24 IMPORTANT!!! setState
/*
class App extends React.Component {
        constructor() {
            super();
            this.state = {
                count: 0
            };
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            this.setState( /*{ count: 1 }*/
/* (prevState) => {
                return {
                    count: prevState.count + 1
                };
            });
        }

        render() {
                return (
                        <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}*/
/*{() => console.log("hi")}*/
/*>Change!</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
*/










//Part 23 Events
/*
function handleClick() {
    console.log("Hovered")
}

function App() {
    return (
        <div>
            <img src="https://www.fillmurray.com/200/100" />
            <br />
            <br />
            <button onMouseOver={handleClick}*/
/*{() => console.log("I was clicked")}*/
/*>Click me</button>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
*/












//3.3 Todolist
/*

import { TodoItem } from "./TodoItem.js";
import { todosData } from "./todosData.js";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        };
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>);

        return (
            <div className="todo-list">
            {todoItems}
        </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"));
*/













//Part 22 Logged in or out
/*
class App extends React.Component {
    constructor() {
        super();
        
        this.state = {
            isLoggedIn: true
        };
    }
    
    render() {
        let wordDisplay;
        if (this.state.isLoggedIn) {
            wordDisplay = "in";
        } else {
            wordDisplay = "out";
        }
        return (
            <div>
                <h1>You are logged {wordDisplay}</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
*/












//Part 21
/*class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Sally",
            age: 13
        };
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )    
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
*/










//Part 20
/*class App extends React.Component {
    constructor() {
        super ();
        this.state = {
            answer: "Yes"
        };
    }
    
    render() {
        return(
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
                <ChildComponent answer={this.state.answer} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
*/















//Part 19
/*
//#1
class App extends React.Component {
    render() {
        return (
            <div>
                <Header username="Person"/>
                <Greeting />
            </div>
        )
    }
}

//#2
class Header extends React.Component {
    render() {
        return (
            <header>
            <p>Welcome, {this.props.username}!</p>
        </header>
        );
    }

}

//#3
class Greeting extends React.Component {
    render() {
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;

        if (hours < 12) {
            timeOfDay = "morning";
        }
        else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon";
        }
        else {
            timeOfDay = "night";
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
*/











//Part 18
/*function App(props) {
  
    return (
        <div>
            <h1>{props.whatever}</h1>
        </div>
    );
   
}
*/

/*class App extends React.Component {
    
    yourMethodHere() {
        
    }
    
    render() {
//        const style = this.yourMethodHere()
        return (
            <div>
                <h1>{this.props.whatever}</h1>
            </div>
        );
    }
}
*/







//Part 3.2 Lists and Check Boxes
/*
import { TodoItem } from "./TodoItem.js";
import { todosData } from "./todosData.js";

function App() {
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>);

    return (
        <div className="todo-list">
            {todoItems}
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById("root"));
*/







//Example of Loggin statuses:
/*render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
*/





//Part 17 Mailbox messages
/*
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
    <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
            <h2>
                You have {unreadMessages.length} unread messages.
            </h2>
        }
    </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('root')
);
*/








//Part 16 Login Logout
/*
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
*/






//Part 15 Login or Sign Up
/*
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
);
*/










//Part 14 For text(Not working yet)
/*
var Search = React.createClass({
    getInitialState: function() {
        return { showResults: false };
    },
    onClick: function() {
        this.setState({ showResults: true });
    },
    render: function() {
        return (
            <div>
                <input type="submit" value="Search" onClick={this.onClick} />
                { this.state.showResults ? <Results /> : null }
            </div>
        );
    }
});

var Results = React.createClass({
    render: function() {
        return (
            <div id="results" className="search-results">
                Some Results
            </div>
        );
    }
});

ReactDOM.render(<Search />, document.getElementById("root"));
*/










//Part 13
/*class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numOfClicks: 0
        };

        this.handleClick = this.handleClick.bind(this);

    }
    handleClick() {
        console.log('From handleClick()', this);
        this.setState({ numOfClicks: this.state.numOfClicks + 1 });
    }
    render() {
        console.log('From handleClick()', this);
        return (
            <div>
                <button onClick={this.handleClick}>Click Me!</button>
                <p>Number of Times Clicked = {this.state.numOfClicks}</p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
*/






//Part 12
/*class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById("root")
);
*/









/*class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
*/







//Part 10
/*
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
*/





//Part 9
/*
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

*/




//Part 8
/*
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById("root")
);

*/





//Part 7
/*
import { Joke } from "./Joke.js";
import { jokesData } from "./jokeData.js";

function App() {
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />);

COMMENT THIS IN
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const doubled = nums.map(function(num) {
        return num * 2
    })
    console.log(doubled)--


    return (
        <div>
            {jokeComponents}
        </div>
    );
}

export { App };

ReactDOM.render(<App />, document.getElementById("root"));
*/






//Part 6
/*
function ContactCard(props) {
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
import { TodoItem } from "./TodoItem.js"
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
/*
import { Header } from "./Header.js";
import { MainContent } from "./MainContent.js";
import { Footer } from "./Footer.js";


function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
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
