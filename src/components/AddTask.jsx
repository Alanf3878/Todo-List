import React, { useState } from 'react';

import '../components/AddTask.css'

import Button from './button';

const AddTask = ({handleTaskAdd}) => {
    const [inputData, setInputData] = useState ("");

    const handleInputChange = (e) => {
        setInputData(e.target.value);

    };

    const handleAddTaskClick = () => {
        handleTaskAdd(inputData);
        setInputData("")
    }

    return ( 
        <div className="add-task-container">
            <input 
            onChange={handleInputChange}
            value={inputData}
             className='add-task-input'
              type="text"
               />
               ;
           <div className="add-task-button-container"></div>
            <Button onClick={handleAddTaskClick}>Adicionar</Button>
        </div>
     );
}
 
export default AddTask;