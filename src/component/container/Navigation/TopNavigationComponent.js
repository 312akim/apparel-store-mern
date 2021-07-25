import React, { Component } from 'react';
import { StyledNavigationBar, StyledLogoImg, StyledCartIcon } from './TopNavigationSyles'
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
  DropdownItem
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
            <StyledNavigationBar>
                <Navbar light expand="md">
                        <div>
                            <StyledLogoImg src={require('../../../shared/images/sample-logo.png')} alt="Mad Crown Logo"></StyledLogoImg>
                            <NavbarBrand className="navbarBrandTitle" href="/">Mad Crowns</NavbarBrand>
                        </div>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem className="navItem">
                                    <NavLink href="/store/">Store</NavLink>
                                </NavItem>
                                <NavItem className="navItem">
                                    <NavLink href="/about/">About Us</NavLink>
                                </NavItem>
                                <NavItem className="navItem">
                                    <NavLink href="/contact/">Contact Us</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle className="navItem" nav caret>
                                        Our Brands
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Brand 1
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Brand 2
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                            <StyledCartIcon className="fa fa-2x fa-shopping-cart snipcart-checkout"></StyledCartIcon>
                        </Collapse>
                </Navbar>
            </StyledNavigationBar>
        )
    }
}

export default TopNav;