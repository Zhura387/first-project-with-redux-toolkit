import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addTask, deleteTask } from './redux/taskSlice';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const task = useSelector((state) => state.task.value)
  const [text, setText] = React.useState('');

  const hendleClick = () => {
    dispatch(addTask({ text }))
    setText('')
  }
  return (
    <div className="App">
      <div>

        <div className='inputText'>
          <input type='text'
            onChange={(e) => setText(e.target.value)}
            value={text}></input>
          <button onClick={() => hendleClick()}>add</button>
        </div>
        <div className='placeTask'>

          {task.map((item, index) =>
            <div key={index}>
              <p>{item.text}</p>
              <button onClick={() => dispatch(deleteTask({ text: item.text }))}>del</button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
