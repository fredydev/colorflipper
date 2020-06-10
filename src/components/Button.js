import styled from "styled-components"


const Button = styled.button`
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  transition: all 0.3s linear;
  text-transform: uppercase;
  &:hover{
    background: black;
    color: white;
  }
`
export default Button;