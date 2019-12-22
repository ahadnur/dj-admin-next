import React from 'react';
import Link from 'next/link';

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { MDBInput, MDBBtn, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';

import Layout from '../../../components/Layout';


const Create = () => (
  <React.Fragment>
    <Layout>
      <MDBRow className="mt-5">
        <MDBCol className="ml-5 mr-5">
          <MDBCard>
            <MDBCardBody>
              <div className="text-center ml-5 mr-5">
                <h2>Create new items</h2>
                <MDBInput
                  label="Title"
                />
                <MDBInput
                  label="Enter your information"
                  type="textarea"
                />
                <Link href="/">
                  <MDBBtn color="dark-green">Create new</MDBBtn>
                </Link>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </Layout>
  </React.Fragment>
);

export default Create;