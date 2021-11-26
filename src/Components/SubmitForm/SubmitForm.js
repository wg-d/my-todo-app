import React, { useState } from 'react';
import  './SubmitForm.css';

export default function SubmitForm(props) {
    const [tasksCount, setTasksCount] = useState(0);
    const [text, setText] = useState('');
    const addItem = (e) => {
      e.preventDefault();
      console.log(text)
      if( text !=='') {
         var newItem = { 
          text, //text : text
          id: tasksCount,
          key: Date.now()
        };
    
         props.addTask(newItem);
         setTasksCount(tasksCount + 1);
         setText('');
      }

      
    
    }

    const handleInput = (e) => {
      setText(e.target.value);
    }

    return (
        <div className="form">
            <form onSubmit={addItem}>
              <input className='input' value={text} placeholder='Add task' onChange={handleInput}/>
              <button className='add-button' type='submit'>Add</button>
            </form>
        </div>
    );
}

//ref={ a = () => this._inputElement = a}