import React from "react";
import { Button, Col, Layout, Row } from "antd";
import MenuBar from "./MenuBar";
import crmlogo from "../crmlogo.jpeg";
import { Link } from "react-router-dom";
import Routes from "../constants/routes";
import styled from "styled-components";
const { Header, Content, Sider, Footer } = Layout;

const MainLayout = ({ children }) => {
  return (
    <>
      <Layout>
        <Header style={{ backgroundColor: "#F7F7F7" }}>
          {
            <>
              <Row>
                <Col span={8}>
                  <img
                    src={crmlogo}
                    alt="Well Done Kids"
                    style={{ width: "375px", height: "55px" }}
                  />
                </Col>
                <Col span={8} offset={8}>
                  <StyledButton>
                    <Link exact to={Routes.LOGIN}>
                      Cerrar sesión
                    </Link>
                  </StyledButton>
                </Col>
              </Row>
            </>
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
const StyledButton = styled(Button)`
  background: #fe6c16;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  width: 150px;
  margin: auto;
`;
