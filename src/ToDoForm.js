import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import React from "react";


function ToDoForm({dos , setDo, does, setDos}){


    function handleChange(event){
        setDo({
            title: event.target.value,
            completed: true
        })
    }

    function handleSave(event){
        event.preventDefault(event)
        setDos(
            [...does, dos]
        )
        
    }

    return(
        <form>
            <label>
                To do:
                <input className="value" type ="input" name="name" value={dos.title} onChange={(handleChange)} />
           </label>
           <input className="button" type ="submit" value="save"  onClick= {handleSave}/>
        </form>
    )
}

export default ToDoForm;