import React from 'react';

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Layout from '../../../../components/Layout';
import UserTable from '../../../../components/UserTable';




const Users = () => (
  <React.Fragment>
    <Layout>
      <UserTable />
    </Layout>
  </React.Fragment>
);

export default Users;