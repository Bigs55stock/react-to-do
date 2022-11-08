import React from "react";


function ToDo({dos, setDo}){
    console.log(dos)
    function handleClick(){
                setDo({
                    completed: true
                })



    }
    return(
            <div className="List">
                <p className="title"> {dos.title}</p>
                <div onClick={handleClick}> {dos.completed ? 'Incomplete' : 'Complete'}</div>
            </div>
    )
}

export default ToDo