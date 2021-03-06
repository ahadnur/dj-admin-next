import React from 'react';
import Link from 'next/link';

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { MDBBtn, MDBCard, MDBCardBody,  MDBInput, MDBCol, MDBRow } from "mdbreact";

import Layout from '../components/Layout';

const Index = () => (
  <React.Fragment>
    <Layout>
    <MDBRow className="mt-5">
        <MDBCol md="6" className="mx-auto">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h5 text-center mb-4">Login</p>
                <div className="grey-text">
                  <MDBInput
                    label="Username"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center">
                  <Link href="/admin">
                    <MDBBtn color="dark-green" size="sm">Login</MDBBtn>
                  </Link>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </Layout>
  </React.Fragment>
)

export default Index;
