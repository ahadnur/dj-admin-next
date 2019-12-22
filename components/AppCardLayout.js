import React, { Component } from 'react';
import Link from 'next/link';
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBCardText, MDBCardTitle, MDBBtn } from 'mdbreact';

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <MDBRow className="mt-5">
          <MDBCol className="ml-5 mr-5">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>
                  <h3>{this.props.title}</h3>
                </MDBCardTitle>
                <MDBCardText>
                  Lorem sum dolor sit amet consectetur, adipisicing elit. Sapiente, amet.
                </MDBCardText>
                <Link href="edit">
                  <MDBBtn color="dark-green" size="sm">Edit</MDBBtn>
                </Link>
                <MDBBtn color="red" size="sm">Delete</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </React.Fragment>
    )
  }
}