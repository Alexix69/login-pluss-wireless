import React from "react";
import { Layout } from "antd";
import MenuBar from "./MenuBar";
import crmlogo from "../crmlogo.jpeg";
const { Header, Content, Sider, Footer } = Layout;

const MainLayout = ({ children }) => {
  return (
    <>
      <Layout>
        <Header style={{ backgroundColor: "#F7F7F7" }}>
          {
            <img
              src={crmlogo}
              alt="Well Done Kids"
              style={{ width: "375px", height: "55px" }}
            />
          }
        </Header>
      </Layout>
      <Layout>
        <Sider>
          <MenuBar />
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              {children}
            </div>
          </Content>
          {/*<Footer style={{ textAlign: "center" }}>*/}
          {/*  Ant Design ©2018 Created by Ant UED*/}
          {/*</Footer>*/}
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
