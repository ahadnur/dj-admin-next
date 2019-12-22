import React, { Component } from "react";
import Link from 'next/link';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <React.Fragment>
      <MDBNavbar color="stylish-color-dark" dark expand="md">
        <MDBNavbarBrand>
          <Link href="/admin">
            <strong className="white-text">ADMINSTRATION</strong>
          </Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown className="dropdown-menu-right">
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <Link href="/admin">
                    <MDBDropdownItem>Admin</MDBDropdownItem>
                  </Link>
                  <Link href="/">
                    <MDBDropdownItem>Logout</MDBDropdownItem>
                  </Link>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </React.Fragment>
    );
  }
}

export default Navbar;
