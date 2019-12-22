import React from 'react';
import Link from 'next/link';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBInput, MDBCol, MDBRow, MDBBox, MDBCardText, MDBIcon, } from "mdbreact";
import Layout from '../../../../components/Layout';


const AddGroup = () => (
  <React.Fragment>
    <Layout>
      <MDBRow className="mt-4">
        <MDBCol>
          <MDBCard md="10" className="mx-auto">
            <MDBCardBody>
              <form>
                <h1 className="mb-4">New Group</h1>
                <div className="grey-text">
                  <MDBInput
                    label="Name"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                </div>
              </form>
              <MDBRow className="mt-5">
                <MDBCol md="4">
                  <h4>Permissions</h4>
                  <MDBCardText>Available Permissions</MDBCardText>
                  <MDBBox>
                    admin | log entry | Can add log entry
                  </MDBBox>
                  <MDBBox>
                    admin | log entry | Can change log entry
                  </MDBBox>
                  <MDBBox>
                    admin | log entry | Can delete log entry
                  </MDBBox>
                  <MDBBox>
                    auth | group | Can add group
                  </MDBBox>
                  <MDBBox>
                    auth | group | Can change group
                  </MDBBox>
                  <MDBBox>
                    auth | group | Can delete group
                  </MDBBox>
                </MDBCol>
                <MDBCol md="2" className="mt-5">
                  <MDBBox>
                    <MDBIcon icon="chevron-circle-right" size="2x" color="green" />
                  </MDBBox>
                  <MDBBox>
                    <MDBIcon icon="chevron-circle-left" size="2x" />
                  </MDBBox>
                </MDBCol>
                <MDBCol md="5">
                  <h4><br/></h4>
                  <MDBCardText>Chosen Permissions</MDBCardText>
                  <MDBBox>
                  </MDBBox>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
          <div className="text-center mt-4">
            <Link href="/admin/auth/group/groups">
              <MDBBtn color="blue-grey" type="submit">Save</MDBBtn>
            </Link>
          </div>
        </MDBCol>
      </MDBRow>
    </Layout>
  </React.Fragment>
);

export default AddGroup;