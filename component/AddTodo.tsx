import React, { useState } from 'react';
import { observer } from 'mobx-react';
import store from './Store';
import { action, observable } from 'mobx';



type FormState = {
    title: string;
    time: string;
    description: string;
    previousStatus: string
};

const initialState: FormState = {
    title: "",
    time: "",
    description: "",
    previousStatus: ""

};

let formState: FormState = observable({
    title: "",
    time: "",
    description: "",
    previousStatus: ""
});

const AddTodo = () => {
    return (
        <section className='flexCenter'>
            <div>
            <h1 style={{ marginBottom: "10px",  marginTop: "60px" }} className='text-2xl font-bold uppercase'>Add Task</h1>
            <div className='flexStart'>
                <div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input
                        type="text"
                        className="form-input"
                        style={{ height: "40px" }}
                        onChange={action((e) => {
                           store.title = e.target.value;

                        })}
                    />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Time</span>
                        </label>
                        <input
                        type="text"

                        className="form-input"
                        style={{ height: "40px" }}
                        onChange={action((e) => {
                            store.time = e.target.value;
                        })}
                    />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                       
                    <input
                        type="text"

                        className="form-input"
                        style={{ height: "40px" }}
                        onChange={action((e) => {
                            store.description = e.target.value;
                        })}
                    />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <input
                        type="text"

                        className="form-input"
                        style={{ height: "40px" }}
                        onChange={action((e) => {
                            store.previousStatus = e.target.value;
                        })}
                    />

                    </div>
                    <button
                    onClick={action((e) => {
                        store.addTodo(store.title, store.time, store.description, store.previousStatus);
                        
                    })}
                    className="update-action_btn ">Submit </button>
                </div>

                {/* button */}
                
            </div>
            </div>
        </section>
    );
};

export default observer(AddTodo);