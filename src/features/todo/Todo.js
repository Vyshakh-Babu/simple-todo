import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { addTodo, removeTodo, toggleTodo } from './todoSlice'

function Todo() {
    const todo = useSelector((state) => state.todo)
    const dispatch = useDispatch();

    const [newText, setNewText] = useState("");
    const [emptyError, setEmptyError] = useState(false);

    const handleAddToDo = () => {
        if (newText) {
            dispatch(addTodo(newText));
            setNewText('');
            setEmptyError(false);
        } else {
            setEmptyError(true);
        }
    }

    return (
        <div className="container mt-5 w-50">
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title">ToDo List</h1>
                </div>
                <div className="card-body">
                    <div className="input-group">
                        <input value={newText} type="text" className={`form-control ${emptyError ? 'border-danger' : 'border-primary'}`} placeholder={emptyError ? "Input cannot be empty" : "Enter ToDo"} onChange={(event) => setNewText(event.target.value)} />
                        <button className={`btn ${emptyError ? 'btn-danger' : 'btn-primary'}`} type="submit" onClick={handleAddToDo}><i className="bi bi-plus-circle m-2"></i></button>
                    </div>

                    <ul className="list-group mt-3">
                        {todo.map((todo) => (<li key={todo.id} className="list-group-item d-flex align-items-center">
                            <div className="form-check me-2" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} ><input className="form-check-input" type="checkbox" onChange={() => dispatch(toggleTodo(todo.id))} />{todo.text}</div>
                            <button className="btn btn-danger btn-sm ms-auto"><i className="bi bi-x-circle" onClick={() => dispatch(removeTodo(todo.id))}></i></button>
                        </li>))}
                    </ul>

                    {todo.length === 0 &&
                        <div id="emptyListMsg" className="text-center text-muted mt-2 h6" style={{ display: 'block' }}><i className="bi bi-card-checklist me-2"></i>List is empty</div>}
                </div>
            </div>
        </div>
    )
}

export default Todo