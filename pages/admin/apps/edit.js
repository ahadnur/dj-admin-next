import React from 'react';
import Link from 'next/link'

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBCardText, MDBCardTitle, MDBBtn } from 'mdbreact';
import Layout from '../../../components/Layout';

const EditPage = () => (
  <React.Fragment>
    <Layout>
      <div className="text-center mt-5">
        <h1>Edit your info here</h1>
        <hr/>
      </div>
      <MDBRow className="mt-4">
          <MDBCol className="text-center ml-5 mr-5">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>
                  <h3>Hey Don't Touch My heir</h3>
                </MDBCardTitle>
                <MDBCardText>
                  Lorem sum dolor sit amet consectetur, adipisicing elit. Sapiente, amet.
                </MDBCardText>
                <Link href="/admin">
                  <MDBBtn color="dark-green" size="sm">Save</MDBBtn>
                </Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
    </Layout>
  </React.Fragment>
);

export default EditPage;