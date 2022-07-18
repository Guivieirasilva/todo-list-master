import React from "react"
import Card from "./card"



function Modal (props){

    function hideModal(event){
        let target = event.target;
        if(target.id  === "modal"){
            props.onHideModal()
            
        }
        console.log(target);
    }
    

    return (
        <div 
        onClick={hideModal} 
        id="modal" 
        className={props.show?"modal" : "modal hide"}>
            <Card className="cardModal">
                {props.children}
            </Card>
        </div>
    )
}

export default Modal