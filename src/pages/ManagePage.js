import React from "react";
import MainLayout from "../components/MainLayout";
import { Table } from "antd";
import MainLayoutTest from "../components/MainLayoutTest";
import CustomerTable from "../components/CustomerTable";

const ManagePage = () => {
  return (
    <MainLayoutTest>
      <CustomerTable />
    </MainLayoutTest>
  );
};

export default ManagePage;
