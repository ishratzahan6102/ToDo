import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { Todo } from './Store';

type Props = {
    todo: Todo
}


function UpdateForm ({ todo }: Props) {

    const [status, setStatus] = useState("")
   
    return (
        <div className='flexStart'>
            {/* checkbox */}
            <div className="form-control">
                <label className="cursor-pointer label">
                    <input type="input" 
                     style={{ height: "40px" }}
                   
                    className="form-input" 
                    onChange={(e) => {setStatus(e.target.value)
                    console.log(e.target.value)}
                    }/>
                </label>
            </div>

            {/* button */}
            <button type="button" 
            onClick={() => todo.previousStatus = status} 
            className="update-action_btn">Update</button>
        </div>
    );
};

export default observer(UpdateForm);