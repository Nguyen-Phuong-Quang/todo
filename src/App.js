import { findByPlaceholderText } from '@testing-library/react';
import React, { useState, useRef, createContext, useContext, useImperativeHandle, useEffect} from 'react'
import { act } from 'react-dom/test-utils';
import Todo from './component/Todo/Todo.js';
import './App.css'
import { StoreContext, actions } from './component/store';


function App() {
  const [buttonText, setButtonText] = useState('ADD')
  const [state, dispatch] = useContext(StoreContext)   
  const { todoInput, todos } = state
  const [editIndex, setEditIndex] = useState()

  const inputRef = useRef()
  const buttonRef = useRef()
  
  const handleSubmit = () => {
    if(buttonText === 'ADD') {
      if(inputRef.current.value !== '')
      {
        dispatch(actions.addTodo(todoInput))
        inputRef.current.focus()
        dispatch(actions.setTodoInput(''))
      }
    } else {
        dispatch(actions.editTodo(todoInput, editIndex))

        inputRef.current.focus()
        dispatch(actions.setTodoInput(''))
        setButtonText('ADD')
    }
  }

  const editJob = (e, index) => {
    setButtonText('UPDATE')
    dispatch(actions.setTodoInput(e.target.innerText))
    setEditIndex(index)
  }

  return (
    <div style={{ padding: 20 }}>
        <input
            ref={inputRef}
            value={todoInput}
            placeholder = "Enter todo..."
            onChange={e => { 
              dispatch(actions.setTodoInput(e.target.value))
            }}
        />

        <button 
            ref={buttonRef}
            onClick={handleSubmit}
        >
            {buttonText}
        </button>
        {todos.map((todo, index) => (
          <li key={index}>
              <span 
                onClick= {e => editJob(e, index)}
              >
                {todo}
              </span>
              <span 
                  onClick={() => dispatch(actions.deleteTodo(index))}
                  style={{ paddingLeft: 5, cursor: 'pointer'}}
              >
                  &times;
              </span>
          </li>
        ))}
    </div>
  );
}


export default App;
       

