import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Screen} from "./Screen";
import {Keyboard} from "./Keyboard";


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen_text: '0',
            first_value: 0,
            second_value: 0,
            operation: '',
            temp_txt: ''
        }
    }

    handleClickButton = (button_value) => {
        switch (button_value) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
            case '.':
                let tmp = this.state.temp_txt.length > 20 ? this.state.temp_txt : this.state.temp_txt += button_value;
                this.setState({
                    temp_txt: tmp,
                    screen_text: tmp
                });
                break;
            case 'sin':
                let arg_sin = +(this.state.temp_txt === '' ? '0' : this.state.temp_txt);
                if (isNaN(arg_sin)) {
                    alert('Argument of sin function must be a number');
                    this.setState({
                        screen_text: '0',
                        first_value: 0,
                        second_value: 0,
                        operation: '',
                        temp_txt: ''
                    });
                    return;
                }
                this.setState({screen_text: Math.sin(arg_sin), temp_txt: ''});
                break;
            case 'cos':
                let arg_cos = +(this.state.temp_txt === '' ? '0' : this.state.temp_txt);
                if (isNaN(arg_cos)) {
                    alert('Argument of sin function must be a number');
                    this.setState({
                        screen_text: '0',
                        first_value: 0,
                        second_value: 0,
                        operation: '',
                        temp_txt: ''
                    });
                    return;
                }
                this.setState({screen_text: Math.cos(arg_cos), temp_txt: ''});
                break;
            case 'tan':
                let arg_tan = +(this.state.temp_txt === '' ? '0' : this.state.temp_txt);
                if (isNaN(arg_tan)) {
                    alert('Argument of sin function must be a number');
                    this.setState({
                        screen_text: '0',
                        first_value: 0,
                        second_value: 0,
                        operation: '',
                        temp_txt: ''
                    });
                    return;
                }
                if (arg_tan === 90) {
                    this.setState({screen_text: 'Undefined', temp_txt: ''});
                    return;
                }
                this.setState({screen_text: Math.tan(arg_tan), temp_txt: ''});
                break;
            case '=':
                let second_value = +(this.state.temp_txt === '' ? '0' : this.state.temp_txt);
                let operation = this.state.operation;
                let result;
                if (operation === '+') {
                    result = this.state.first_value + second_value;
                } else if (operation === '-') {
                    result = this.state.first_value - second_value;
                } else if (operation === '*') {
                    result = this.state.first_value * second_value;
                } else if (operation === '/') {
                    if (this.state.second_value === 0) {
                        result = 'Infinity';
                    }
                    result = this.state.first_value / second_value;
                }
                this.setState({
                    screen_text: result,
                    first_value: result,
                    // second_value: 0,
                    // operation: '',
                    temp_txt: ''
                });
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                if (this.state.temp_txt === '') {
                    this.setState({temp_txt: '0'});
                }
                this.setState({first_value: +this.state.temp_txt, temp_txt: '', operation: button_value});
                break;
            case 'CE':
                this.setState({
                    screen_text: '0',
                    first_value: 0,
                    second_value: 0,
                    operation: '',
                    temp_txt: ''
                });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className='calculator'>
                <Screen screenText={this.state.screen_text}/>
                <Keyboard handleClickButton={this.handleClickButton}/>
            </div>
        );
    }

}

export {Calculator}