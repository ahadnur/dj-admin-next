import React from 'react';
import Link from 'next/link';

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdbreact';

import Layout from '../../../components/Layout';
import AppCard from '../../../components/AppCard';


const App = () => (
  <React.Fragment>
    <Layout>
      <div className="text-center mt-4">
        <h1>Your App Information</h1>
        <MDBRow className="mt-2">
          <MDBCol className="ml-5 mr-5">
            <MDBCard>
              <MDBCardBody>
                <Link href="/admin/apps/create">
                  <MDBBtn color="mdb-color" className="mt-5 mb-5" size="lg">
                    <MDBIcon icon="plus" />  New Items
                  </MDBBtn>
                </Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <AppCard />
      </div>
    </Layout>
  </React.Fragment>
);

export default App;