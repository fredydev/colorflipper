import styled from "styled-components";
import React from "react"

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: whitesmoke;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    .header-inner{
      width: 80%;
      display: flex;
      margin: 0 auto;
      justify-content: space-around;
      align-items: center;
    }
    nav{
      .menu{
        display: flex;
        list-style-type: none;
        .menu-item{
          margin-right: 30px;
        }
      }
    }
    
`
export const Header = () => {
    return(
        <HeaderWrapper>
          <div className="header-inner">
            <div className="brand">Color Flipper</div>
            <nav className="navbar">
              <ul className="menu">
                <li className="menu-item">Simple</li>
                <li className="menu-item">Hex</li>
              </ul>
            </nav>
          </div>
          
        </HeaderWrapper>
    );
}

