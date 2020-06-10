import React from "react";
import {Container} from "./Container"
const Simple = (props) =>{
    return(
        <div className="simple">
            <Container color={props.color} changeColor={props.changeColor}/>
        </div>
    );
}


export default Simple;