import React from 'react';

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Layout from '../components/Layout';
import AdminCardGrid from '../components/AdminCardGrid';
import AppsCardGrid from '../components/AppsCardGrid';


const Admin = () => (
  <React.Fragment>
    <Layout>
      <div className="mt-4">
        <h2>Authentication and Authorization</h2>
        <AdminCardGrid />
      </div>
      <div className="mt-4">
        <h2>Your Apps List</h2>
        <AppsCardGrid />
      </div>
    </Layout>
  </React.Fragment>
);

export default Admin;