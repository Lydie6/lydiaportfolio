import { FaBars } from "react-icons/fa";
import styled from "styled-components";

export const Nav = styled.nav`
   
    top: 0;
    position:sticky;
    z-index: 300;
    width: 100%; 
    height: 80px;
    display: flex;
    background: red;
    justify-content: space-around;
    margin: 0 auto;
    color: white;
    background-color: black;
     @media screen and (max-width: 768px) {
     display: flex;
     justify-content: space-between;
     }
`;

export const Logo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    color: white;
    @media screen and (max-width: 768px) {
      margin-left: 2rem;
      }
`;

export const StyledNavLink = styled.a`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1rem;
    height: 100%;
    cursor: pointer;
    transition:color 0.3s ease-in-out;
    &:hover {
        color: #3B82F6; /* Black on hover */
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    color: white;
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 80px;
        left: 0;
        background-color: black;
        transition:  all 0.3s ease-in-out;
        padding: 1rem;
        z-index: 999;
        &.open {
            display: flex;
        }
    }
`;
export const MobileMenu=styled.div`
    display: none;

        }
`;