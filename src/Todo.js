import { Button, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { db } from './firebase'
import './Todo.css'


const TodoListItem = ({todo, inprogress, id}) => {
    function toggleInProgress() {
        db.collection("todos").doc(id).update({
            inprogress: !inprogress 
        });
   }
   function deleteTodo() {
       db.collection("todos").doc(id).delete();
   }
    return (
        <div className="listItems">
            <ListItem>
                <ListItemText primary={todo} secondary={inprogress ? "In progress" : "Completed"}></ListItemText>
            </ListItem>
            <Button onClick={toggleInProgress}>{inprogress ?"Done" : "UnDone"}</Button>
            <Button onClick={deleteTodo}>X</Button>
        </div>
    )
}
export default TodoListItem
