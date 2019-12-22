import React from 'react';
import { MDBRow, MDBCard } from 'mdbreact';

import Card from './Card';

const AdminCardGrid = () => (
  <React.Fragment>
    <MDBRow className="mt-4">
      <Card icon="users" data="Groups" link="/admin/auth/group/groups"/>
      <Card icon="user" data="User" link="/admin/auth/user/users" />
    </MDBRow>
  </React.Fragment>
);

export default AdminCardGrid;