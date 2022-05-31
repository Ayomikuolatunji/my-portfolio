import styled from "styled-components";
import{ PageItemWrapper as NavItemWrapper} from "./ItemWrapper"



export const NavIcon = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  position: absolute;
  display: block;
  right: 0;
  margin-right: 20px;
  margin-top: -20px;
  
  @media (min-width: 640px) {
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
`;

export const Overlay = styled(NavItemWrapper)`
  position: fixed;
  top: 0;
  bottom: 0;
  display: block;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.8) 3%, gray 90%);
  z-index: 999;
  width: 60%;
  height: 100vh;
  left: ${props => (props.open ? 0 : "-100%")};
  transition: left 0.7s ease-in-out;
  @media (min-width: 769px) {
    display: none;
  }
`;



export const MobileLink=styled.a`
    color: #fff;
`
