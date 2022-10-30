import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addTask, deleteTask, toggleTodoComplited } from './redux/taskSlice';
import './App.scss';
import { Layout } from 'antd';
import { Button } from 'antd';

function App() {
  const { Header } = Layout;
  const dispatch = useDispatch()
  const task = useSelector((state) => state.task.value)
  const [text, setText] = React.useState('');

  const hendleClick = () => {
    dispatch(addTask({ text }))
    setText('')
  }
  return (
    <div className="App">
      <Layout>
        <Header id='Head'>Todo-list</Header>
      </Layout>
      <div>
        <div className='inputPlace'>
          <input type='text'
            onChange={(e) => setText(e.target.value)}
            placeholder='add text'
            value={text}></input>
          <Button onClick={() => hendleClick()}>add</Button>
        </div>
        <div className='TaskPlace'>

          {task.map((item, index) =>
            <div className='Task' key={index}>
              <div>
                <p>{item.text}</p>
              </div>
              <div>
                <Button danger onClick={() => dispatch(deleteTask({id: item.id}))}>delete</Button>
                <input
                  type='Checkbox'
                  checked={item.complited}
                  onChange={() => dispatch(toggleTodoComplited({ id: item.id }))}
                ></input>
              </div>
            </div>

          )}
        </div>

      </div>
    </div>
  );
}

export default App;
