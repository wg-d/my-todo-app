import React from 'react';
import  './SubmitForm.css';

export class SubmitForm extends React.Component {
    render() {
        return (
            <div className="form">
                <form>
                  <input className='input' placeholder='Add task'/>
                  <button className='add-button' type='submit'>Add</button>
                </form>
            </div>
        );
    }
}

//ref={ a = () => this._inputElement = a}