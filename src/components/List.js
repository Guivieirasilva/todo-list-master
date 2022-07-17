import React from "react"
import Card from "./card"


function DoneImg(props){
    if(props.done){
       return <img src="./assets/on.svg" alt="Icone de realizado"/>
    }else{
        return <img src="./assets/off.svg" alt="Icone de não realizado"/>
    }
}

export default function List(props){
 
    return(
        <ul>
            {props.items.map(item =>  
            <li key={item.id}
            >
                <Card className= { item.done ? "done item" : "item"}>
                    {item.text}
                    <div className="icons">
                        <button onClick={() => {props.onDone(item)}}><DoneImg done={item.done}/></button>
                        <button onClick={() => {props.onItemDeleted(item)}}><img  src="./assets/icons8-lixo.svg" alt="Lixeira"/></button>
                    </div>
                </Card>
            </li>)}
        </ul>
    )
}