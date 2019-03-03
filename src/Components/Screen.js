import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Screen extends Component {

    render() {
        return (
            <div className='screen'>
                <div className='screen-value'>
                    <label>{this.props.screenText}</label>
                </div>
            </div>
        );
    }
}

export {Screen}