"use client"
import React from 'react';
import { observer } from 'mobx-react';
import store from '@/component/Store';
import UpdateForm from '@/component/UpdateForm';
import AddTodo from '@/component/AddTodo';
import Todo from '@/component/Todo';

const morningClass = new Todo(1, "Morning Class", "8.00 am",  "Must attend", "Completed")
const assignment = new Todo(2, "Local Auditing", "12.00 pm",  "Submission deadline 12 September", "In progress")
const presentation = new Todo(3, "Mass Marketing", "10.00 am", "Date 10 June, missed first deadline", "Not completed")



store.todos.push(morningClass, assignment, presentation)


function TodoListItems() {
    console.log(store.todos)
    return (

        <section>
            <div className="overflow-x-auto p-2 lg:p-4">
                <h1 style={{ marginBottom: "10px",  marginTop: "60px" }} className='text-2xl font-bold uppercase '>Task List</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Title</th>
                            <th>Time</th>
                            <th>Details</th>
                            <th>Status</th>
                            <th>Status Form</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {store.todos.map((todo: { id: number; title: string, time: string, description: string, previousStatus: string }) => {
                            return (
                                <tr key={todo.id}>
                                <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.time}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.previousStatus}</td>
                                    <td><UpdateForm
                                        todo={todo}
                                    /></td>
                                    <td><button onClick={() => store.removeTodo(todo.id)} className="delete-action_btn">Delete</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </section>

    );
};

const TodoListItemsObserver = observer(TodoListItems)

function TodoList() {
    return (
        <>
            <TodoListItemsObserver />
            <AddTodo></AddTodo>
        </>
    )
}

export default TodoList;