import React, {Component} from 'react';
import './App.css';
import {Calculator} from "./Components/Calculator";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className='title'>
                    <h1>Calculator</h1>
                </div>
                <Calculator/>
            </div>
        );
    }
}

export default App;
