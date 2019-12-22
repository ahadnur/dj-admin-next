import React from 'react';
import Link from 'next/link';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const UserTable = () => {
  return (
    <MDBRow className="mt-4">
          <MDBCol md="9">
              <MDBCard>
                  <MDBCardBody>
                    <MDBTable hover>
                      <MDBTableHead color="blue lighten-4">
                        <tr>
                          <th>Username</th>
                          <th>Email</th>
                          <th>First name</th>
                          <th>Last name</th>
                          <th>Stuff status</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        <tr>
                          <td>ahadnur</td>
                          <td>ahadnur44@gmail.com</td>
                          <td>Ahadujjaman</td>
                          <td>Nur</td>
                          <td>Yes</td>
                        </tr>
                        <tr>
                          <td>asifauvi</td>
                          <td>aaasif.auvi@gmail.com</td>
                          <td>Asif</td>
                          <td>Auvi</td>
                          <td>Yes</td>
                        </tr>
                        <tr>
                          <td>basem_pok</td>
                          <td>basem007@gmail.com</td>
                          <td>Basem</td>
                          <td>Patel</td>
                          <td>No</td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>
          <MDBCol md="3">
              <MDBCard>
                  <MDBCardBody>
                    <form>
                      <h1 className="mb-4">Filters</h1>
                      <div className="grey-text">
                        <MDBInput
                          label="Search Users"
                          group
                          type="text"
                          validate
                        />
                        <MDBInput
                          label="By staff status"
                        />
                        <MDBInput
                          label="By superuser status"
                        />
                        <MDBInput
                          label="By active"
                        />
                      </div>
                    </form>
                  </MDBCardBody>
              </MDBCard>
              <div className="text-center mt-2">
                <Link href="/admin/auth/user/add">
                  <MDBBtn color="blue-grey">Add User</MDBBtn>
                </Link>
              </div>
          </MDBCol>
      </MDBRow>
  )
}

export default UserTable;
