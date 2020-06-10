import styled from "styled-components"
import React from "react"
import Button from "./Button"

const ContainerWrapper = styled.div`
font-family: "Roboto", sans-serif;
  font-weight: bold;
  background-color: ${props=>props.color};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .main{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: solid green;
    flex-direction: column;
    .infos{
      text-transform: capitalize;
      text-align: center;
      padding: 20px;
      color: white;
      background: black;
      .color-name{
        color: rgb(84,160,36)
      }
    }
  }
`;

export  const Container = (props)=>{
    return(
        <ContainerWrapper color={props.color}>
            <div className="main">
          <div className="infos"><h1>background color: <span className="color-name">{props.color}</span></h1></div>
          {JSON.stringify(props)}
          <Button onClick={()=>props.changeColor()}>click me</Button>
        </div>
        </ContainerWrapper>
        
    );
}