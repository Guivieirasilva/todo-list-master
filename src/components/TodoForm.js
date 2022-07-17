import React, { useState } from "react";

export default function TodoForm(props) {
    const [text, setText] = useState("");
 
    function handleChange(event){
        let t = event.target.value;
        setText(t)
    }

    function addItem(event){
        event.preventDefault();
        if(text){
            props.onAddItem(text)
            setText("")
        } else{
            alert("Adicione um Item a Lista")
        }
        

    }
    return(
        <form>
            <input onChange={handleChange} placeholder="Adicione um item a lista" type="text" value={text}></input>
            <button onClick={addItem}>Adicionar</button>
        </form>

    )
}