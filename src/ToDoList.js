import React from 'react';
import ToDo from "./ToDo"

function ToDoList ({does, setDo}) {
    return (
        <div>
            {does.map((item) => {
                return (
                    <ToDo dos={item} setDo={setDo}/>   
            )}
                )
            }   
        </div>
    )
}





export default ToDoList;