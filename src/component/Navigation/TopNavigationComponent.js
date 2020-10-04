import React, { Component } from 'react';
import { LogoImg } from './TopNavigationSyles'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

class TopNav extends Component {
    constructor(props) {
        super(props)

        this.toggleNav = this.toggleNav.bind(this)
        this.state = {
            isNavOpen: false,
        }
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        })
    }

    render() {
        return (
            <div className="NavigationBar">
                <Navbar sticky="top" light expand="md">
                        <div>
                            <LogoImg src={require('../../shared/images/sample-logo.png')} alt="Mad Crown Logo"></LogoImg>
                            <NavbarBrand className="navbarBrandTitle" href="/">Mad Crowns</NavbarBrand>
                        </div>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/store/">Store</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/about/">About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/contact/">Contact Us</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Our Brands
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Brand 1
                                        </DropdownItem>
                                        <DropdownItem>
                                            Brand 2
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                            <NavbarText>My Cart</NavbarText>
                        </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default TopNav;