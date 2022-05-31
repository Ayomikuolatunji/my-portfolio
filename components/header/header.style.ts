import styled from "styled-components";
import{ PageItemWrapper as NavItemWrapper} from "./ItemWrapper"

export const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #fff;
  align-items: center;

  @media (max-width:500px){
    width: 100%;
  }
`;

export const Logo = styled.div`
  font-size: 25px; 
  display: flex;
  align-items: center;

  h4{
      margin-left: 10px;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;


  @media (max-width: 768px) {
    display: none;
  }
`;

export const Item = styled.li``;

export const Link = styled.a`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 22px;
  margin-left: 30px;
/* identical to box height */
  color: #1F1534;
  opacity: 1;
  /* hover effect*/
  :hover {
    text-decoration: underline;
  }
`;

export const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Line = styled(NavItemWrapper)`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: black;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

export const Overlay = styled(NavItemWrapper)`
  position: fixed;
  height: ${props => (props.open ? "50vh" : 0)};
  width: 100vw;
  background-color: black;
  transition: height 0.4s ease-in-out;
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const OverlayMenu = styled(NavItemWrapper)`
  list-style: none;
  position: fixed;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -50%);
   z-index: 999;
  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 25px 0px;
    transition: opacity 0.4s ease-in-out;
    color: #fff;
  }
`;

export const MobileLink=styled.a`
    color: #fff;
`
