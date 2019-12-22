import React from 'react';
import Link from 'next/link';

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { MDBBtn, MDBCard, MDBCardBody, MDBInput, MDBCol, MDBRow } from "mdbreact";

import Layout from '../../../../components/Layout';

const AddUser = () => (
  <React.Fragment>
    <Layout>
      <MDBRow className="mt-4">
        <MDBCol md='10' className="mx-auto">
          <MDBCard>
            <MDBCardBody>
              <form>
                <h1 className="mb-4">New User</h1>
                <div className="grey-text">
                  <MDBInput
                    label="Username"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Password"
                    group
                    type="password"
                    validate
                  />
                  <MDBInput
                    label="Password confirmation"
                    group
                    type="password"
                    validate
                  />
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
          <div className="text-center mt-4">
            <Link href="/admin/auth/user/users">
              <MDBBtn color="blue-grey" type="submit">Add User</MDBBtn>
            </Link>
          </div>
        </MDBCol>
      </MDBRow>
    </Layout>
  </React.Fragment>
);

export default AddUser;