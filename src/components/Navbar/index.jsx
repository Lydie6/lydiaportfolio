import React, { useState } from "react";
import { Nav, StyledNavLink, Bars, NavMenu, Logo,MobileMenu } from "./navbarcomponents";
import "../../index.css"
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Nav id="navbar">
                <Bars onClick={() => setIsMenuOpen(!isMenuOpen)} />
                <Logo>
                    Lydia<span className="text-blue-500">.DevNet</span>
                </Logo>
                <NavMenu   className={isMenuOpen ? 'open' : ''} >
                    <StyledNavLink href="#home" onClick={() => setIsMenuOpen(false)}>
                        Home
                    </StyledNavLink>
                    <StyledNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
                        About
                    </StyledNavLink>
                    <StyledNavLink href="#projects" onClick={() => setIsMenuOpen(false)}>
                        Products
                    </StyledNavLink>
                    <StyledNavLink href="#contacts" onClick={() => setIsMenuOpen(false)}>
                        Contacts
                    </StyledNavLink>
                </NavMenu>
                <MobileMenu className="">
                    <button></button>
                </MobileMenu>
            </Nav>
        </>
    );
};

export default Navbar;