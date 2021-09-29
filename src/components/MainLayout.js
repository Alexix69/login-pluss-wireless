import React from "react";
import { Layout } from "antd";
import MenuBar from "./MenuBar";
const { Header, Content, Sider } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout>
      <Header>HEADER</Header>
      <Layout>
        <Sider>
          <MenuBar />
        </Sider>

        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
