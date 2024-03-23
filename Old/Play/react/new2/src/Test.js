import {Component} from "react";

class Test extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
        this.state = {
            a: 0
        }
    }

    componentDidMount() {
        console.log('Mount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Update')
    }

    inc() {
        this.setState(prev => ({a: prev.a + 1}))
    }

    dec() {
        this.setState(prev => ({a: prev.a - 1}))
    }

    render() {
        console.log('Render');
        return (
            <div>
                <h3>{this.state.a}</h3>
                <button onClick={this.inc}>Inc</button>
                <button onClick={this.dec}>Dec</button>
            </div>
        )
    }
}

export default Test;

// class Test extends Component

//     constructor(props) {
//         super(props);
//         console.log('constructor');
//         this.state = {
//             a: 0
//         }
//     }
//
//     render() {
//         console.log('render');
//         return (
//             <div>
//                 <p>Hello</p>
//             </div>
//         )
//     }
// }