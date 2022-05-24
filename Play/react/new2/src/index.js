import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello there</h1>
//             <h2>It is {props.date.toLocaleTimeString()}</h2>
//         </div>
//     )
//
// }
//
// function tick() {
//     root.render(<Clock date={new Date()}/>);
// }
//
// setInterval(tick, 1000);


// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()}
//     }
//
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(), 1000
//         );
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//
//     tick() {
//         this.setState(
//             {
//                 date: new Date()
//             });
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello there</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//             </div>
//         )
//     }
// }
//
// root.render(<Clock/>);


// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};
//
//         // This binding is necessary to make `this` work in the callback
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }
//
//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }
//
// root.render(<Toggle />);

// class LoggingButton extends React.Component {
//     // This syntax ensures `this` is bound within handleClick.
//     // Warning: this is *experimental* syntax.
//     handleClick = () => {
//         console.log('this is:', this);
//     }
//
//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 Click me
//             </button>
//         );
//     }
// }
//
// root.render(<LoggingButton/>)

// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {isLoggedIn: false};
//     }
//
//     handleLoginClick() {
//         this.setState({isLoggedIn: true});
//     }
//
//     handleLogoutClick() {
//         this.setState({isLoggedIn: false});
//     }
//
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;
//
//         if (isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick}/>;
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick}/>;
//         }
//
//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn}/>
//                 {button}
//             </div>
//         );
//     }
// }
//
// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }
//
// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }
//
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting/>;
//     }
//     return <GuestGreeting/>;
// }
//
// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     );
// }
//
// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     );
// }
//
// root.render(<LoginControl/>);

function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

root.render(<Example/>)