import React from 'react';
import { Breadcrumb, BreadcrumbItem, Divider } from '@chakra-ui/react';
import Header from './Header';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <br />
      <Divider />
      <Breadcrumb separator="-">
        <BreadcrumbItem>
          <Link className="linkstyle" to="/">
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link className="linkstyle" to="/all">
            All
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link className="linkstyle" to="/students">
            Students
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link className="linkstyle" to="/teachers">
            Teachers
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <Link className="linkstyle" to="/form">
            Create
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Dashboard;
