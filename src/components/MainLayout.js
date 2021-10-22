import React from "react";
import { Button, Col, Layout, Menu, Row, Dropdown } from "antd";
import { DownOutlined, PoweroffOutlined } from "@ant-design/icons";
import MenuBar from "./MenuBar";
import crmlogo from "../crmlogo.jpeg";
import avatar from "../avatar.png";
import { Link } from "react-router-dom";
import Routes from "../constants/routes";
import styled from "styled-components";
import Title from "antd/es/typography/Title";
const { Header, Content, Sider, Footer } = Layout;

const MainLayout = ({ children }) => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link exact to={Routes.LOGIN}>
          <PoweroffOutlined /> Salir
        </Link>
      </Menu.Item>
    </Menu>
  );
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
                    alt="crm"
                    style={{ width: "375px", height: "55px" }}
                  />
                </Col>
                <Col span={8} offset={8}>
                  <Row>
                    <Col span={2} offset={14}>
                      <img
                        src={avatar}
                        alt="crm"
                        style={{ width: "29px", height: "29px" }}
                      />
                    </Col>
                    <Col span={8}>
                      <Dropdown overlay={menu} trigger={["click"]}>
                        <a
                          className="ant-dropdown-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Administrador <DownOutlined />
                        </a>
                      </Dropdown>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </>
          }
        </Header>
      </Layout>
      <Layout>
        {/*<Sider>*/}
        {/*  <MenuBar />*/}
        {/*</Sider>*/}
        {/*<Layout className="site-layout" style={{ marginLeft: 200 }}>*/}
        <Row>
          <Col>
            <Row>
              <Col span={8}>sider</Col>
              <Col span={16}>
                <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
                  <div
                    className="site-layout-background"
                    style={{ padding: 24, textAlign: "center" }}
                  >
                    {children}
                  </div>
                </Content>{" "}
              </Col>
            </Row>
          </Col>
        </Row>

        {/*<Footer style={{ textAlign: "center" }}>*/}
        {/*  Ant Design ©2018 Created by Ant UED*/}
        {/*</Footer>*/}
        {/*</Layout>*/}
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
