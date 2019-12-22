import React from 'react';
import { MDBRow, MDBCard } from 'mdbreact';

import Card from './Card';

const AppsCardGrid = () => (
  <React.Fragment>
    <MDBRow className="mt-4">
      <Card icon="cogs" data="App name" link="/admin/apps/app"/>
    </MDBRow>
  </React.Fragment>
);

export default AppsCardGrid;