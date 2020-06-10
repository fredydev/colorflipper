import React from "react";
import {Container} from "./Container"

const Hex = (props) =>{
    return(
        <div className="hex">
            <Container color={props.color} changeColor={props.changeColor}/>
        </div>
    );
}


export default Hex;