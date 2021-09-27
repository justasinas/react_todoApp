import './App.css';
import TextField from "@material-ui/core/TextField"
import {useState, useEffect} from "react"
import { db } from './firebase';
import firebase from 'firebase';
import TodoListItem from './Todo';
function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(()=> {
    getTodos();
  },[]);
function getTodos () {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress
        }))
      );
    });
}
  const addTodo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });
  }

  return (
    <div className="App">
      <form>
        <h3>What todo?</h3>
        <TextField 
          className="inputTask" 
          id="standard-basic" 
          label="Write a task" 
          variant="standard" 
          onChange={(e) => {setTodoInput(e.target.value)}}
        />
        <button type="submit" className="btn_addTask" onClick={addTodo}>
          Add
        </button>
      </form>
      {todos.map((todo)=> (
        <TodoListItem 
          todo={todo.todo} 
          inprogress={todo.inprogress} 
          id={todo.id} />
        //<p>{todo.todo}</p>
      ))}
    </div>
  );
}

export default App;
