import reducer from "./reducer.js";
import React, { useRef, useState, useEffect, memo, useMemo, useReducer } from 'react'
import {setJob, addJob, deleteJob} from './action.js'
import { initState } from "./action";
function Todo() {
    const [state, dispatch] = useReducer(reducer, initState)
    const inputRef = useRef();
    
    const {job , jobs} = state
  
    const handleSubmit= () => {
        dispatch( addJob(job) )
        inputRef.current.focus()
        dispatch( setJob('') )
    }
    return (
      <div className="App" style={ { padding: 40 + 'px'} }>
          <h3>To do</h3>
          <input
              ref={inputRef}
              value={job}
              placeholder='Enter todo...'
              onChange={e => {
                dispatch( setJob(e.target.value) )
              }}
          />
          <button onClick={handleSubmit}>Add</button>
          <ul>
              {jobs.map( (item, index) => (
                <li key={index}>{item} 
                  <span
                    style={{
                      cursor: 'pointer',
                      marginLeft: 5 + 'px'
                    }}
                    onClick={() => dispatch( deleteJob(index) )} 
                  >&times;</span>
                </li>
              ))}
          </ul>
      </div>  
    );
}

export default Todo