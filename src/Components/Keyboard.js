import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Keyboard extends Component {
    render() {
        return (
            <div className='keyboard'>
                <div className='row'>
                    <div className='col-md-3'>
                        <input type='button' value='sin' className='btn btn-default btn-block'
                               onClick={event => this.props.handleClickButton(event.target.value)}/>
                    </div>
                    <div className='col-md-3'>
                        <input type='button' value='cos' className='btn btn-default btn-block'
                               onClick={event => this.props.handleClickButton(event.target.value)}/>
                    </div>
                    <div className='col-md-3'>
                        <input type='button' value='tan' className='btn btn-default btn-block'
                               onClick={event => this.props.handleClickButton(event.target.value)}/>
                    </div>
                    <div className='col-md-3'>
                        <input type='button' value='CE' className='btn btn-default btn-block'
                               onClick={event => this.props.handleClickButton(event.target.value)}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <input type='button' value='7' className='btn btn-default btn-block'
                               onClick={event => this.props.handleClickButton(event.target.value)}/>
                    </div>
                    <div className='col-md-3'>
                        <input type='button' value='8' className='btn btn-default btn-block'
                               onClick={event => this.props.handleClickButton(event.target.value)}/>
                    </div>
                    <div className='col-md-3'>
                        <input type='button' value='9' className='btn btn-default btn-block'
                               onClick={event => this.props.handleClickButton(event.target.value)}/>
                    </div>
                    <div className='col-md-3'>
                        <input type='button' value='/' className='btn btn-default btn-block'
                               onClick={event => this.props.handleClickButton(event.target.value)}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <input type='button' value='4' className='btn btn-default btn-block'
                               onClick={event => this.props.handleClickButton(event.target.value)}/>
                    </div>
                    <div className='col-md-3'>
                        <input type='button' value='5' className='btn btn-default btn-block'
                               onClick={event => this.props.handleClickButton(event.target.value)}/>
                    </div>
                    <div className='col-md-3'>
                        <input type='button' value='6' className='btn btn-default btn-block'
                               onClick={event => this.props.handleClickButton(event.target.value)}/>
                    </div>
                    <div className='col-md-3'>
                        <input type='button' value='*' className='btn btn-default btn-block'
                               onClick={event => this.props.handleClickButton(event.target.value)}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <input type='button' value='1' className='btn btn-default btn-block'
                               onClick={event => this.props.handleClickButton(event.target.value)}/>
                    </div>
                    <div className='col-md-3'>
                        <input type='button' value='2' className='btn btn-default btn-block'
                               onClick={event => this.props.handleClickButton(event.target.value)}/>
                    </div>
                    <div className='col-md-3'>
                        <input type='button' value='3' className='btn btn-default btn-block'
                               onClick={event => this.props.handleClickButton(event.target.value)}/>
                    </div>
                    <div className='col-md-3'>
                        <input type='button' value='-' className='btn btn-default btn-block'
                               onClick={event => this.props.handleClickButton(event.target.value)}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <input type='button' value='0' className='btn btn-default btn-block'
                               onClick={event => this.props.handleClickButton(event.target.value)}/>
                    </div>
                    <div className='col-md-3'>
                        <input type='button' value='.' className='btn btn-default btn-block'
                               onClick={event => this.props.handleClickButton(event.target.value)}/>
                    </div>
                    <div className='col-md-3'>
                        <input type='button' value='=' className='btn btn-default btn-block'
                               onClick={event => this.props.handleClickButton(event.target.value)}/>
                    </div>
                    <div className='col-md-3'>
                        <input type='button' value='+' className='btn btn-default btn-block'
                               onClick={event => this.props.handleClickButton(event.target.value)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export {Keyboard}