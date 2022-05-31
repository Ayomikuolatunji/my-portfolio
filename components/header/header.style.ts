import styled from "styled-components";
import{ PageItemWrapper as NavItemWrapper} from "./ItemWrapper"



export const NavIcon = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  position: absolute;
  right: 0;
  margin-right: 20px;
  margin-top: -20px;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

export const Line = styled(NavItemWrapper)`
  display: block;
  border-radius: 50px;
  width: 40px;
  height: 6px;
  margin: 6px;
  background-color: black;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

export const Overlay = styled(NavItemWrapper)`
  position: fixed;
  top: 0;
  bottom: 0;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.8) 3%, gray 90%);
  z-index: 999;
  width: 70%;
  height: 100vh;
  opacity: ${props => (props.open ? 1 : 0)};
  left: ${props=>props.open ? "0" :"-100%"};
  transition: left 0.4s ease-in-out;
  @media (min-width: 769px) {
    display: none;
  }
`;



export const MobileLink=styled.a`
    color: #fff;
`
