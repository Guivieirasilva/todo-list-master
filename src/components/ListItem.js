import React from "react"
import Card from "./card"


function DoneImg(props){
    if(props.done){
       return <img src="./assets/on.svg" alt="Icone de realizado"/>
    }else{
        return <img src="./assets/off.svg" alt="Icone de não realizado"/>
    }
}

function ListItem(props){
 
    return( 
            <li >
                <Card className= { props.item.done ? "done item" : "item"}>
                    {props.item.text}
                    <div className="icons">
                        <button onClick={() => {props.onDone(props.item)}}><DoneImg done={props.item.done}/></button>
                        <button onClick={() => {props.onItemDeleted(props.item)}}><img  src="./assets/icons8-lixo.svg" alt="Lixeira"/></button>
                    </div>
                </Card>
            </li>
    )
}

export default ListItem