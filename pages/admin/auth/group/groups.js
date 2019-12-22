import React from 'react';
import Link from 'next/link';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCard, MDBCardBody, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Layout from '../../../../components/Layout';

const Groups = () => (
  <React.Fragment>
    <Layout>
      <MDBRow className="mt-4">
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <MDBCardText>
                No such Groups
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <div className="text-center mt-2">
            <Link href="/admin/auth/group/add">
              <MDBBtn color="blue-grey">Add Group</MDBBtn>
            </Link>
          </div>
        </MDBCol>
      </MDBRow>
    </Layout>
  </React.Fragment>
);

export default Groups;