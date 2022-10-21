// import Task from './task/task';
import {useDispatch,useSelector} from 'react-redux'
// import { deleteTask } from './redux/taskSlice';
import { addText } from './redux/textSlice';
import { addTask, deleteTask } from './redux/taskSlice';
import './App.css';

function App() {
const dispatch=useDispatch()
const text = useSelector((state)=>state.text.value)
const task = useSelector((state)=>state.task.value)

const hendleClick =()=>{
  dispatch(addTask(text))
  dispatch(addText(''))
}

  return (
    <div className="App">
<div>

<div className='inputText'>
<input type='text' onChange={(e)=>dispatch(addText(e.target.value))} value={text}></input>
<button onClick={()=>hendleClick()}>add</button>
</div>
<div className='placeTask'>

{task.map((item, index)=>
  <div>
<p key={index}> 
{item}</p>
{/* <button onClick={()=>dispatch(deleteTask(item))}>del</button> */}
</div>
)}
</div>

</div>
    </div>
  );
}

export default App;
