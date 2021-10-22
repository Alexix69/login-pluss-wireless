import { Layout, Menu, Breadcrumb, Row, Col, Dropdown } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  DownOutlined,
  PoweroffOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import "../styles/MainLayoutTest.css";
import crmlogo from "../crmlogo.jpeg";
import avatar from "../avatar.png";
import React from "react";
import { Link } from "react-router-dom";
import Routes from "../constants/routes";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const MainLayoutTest = ({ children }) => {
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
    <Layout style={{ minHeight: "100vh" }}>
      {/*<Header className="header">*/}
      {/*  <div className="logo" />*/}
      {/*  /!*<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>*!/*/}
      {/*  /!*  <Menu.Item key="1">nav 1</Menu.Item>*!/*/}
      {/*  /!*  <Menu.Item key="2">nav 2</Menu.Item>*!/*/}
      {/*  /!*  <Menu.Item key="3">nav 3</Menu.Item>*!/*/}
      {/*  /!*</Menu>*!/*/}
      {/*</Header>*/}
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
      <Layout>
        <Sider
          width={235}
          className="site-layout-background"
          style={{
            overflow: "auto",
            height: "90vh",
            // position: "fixed",
            // left: 0,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav 3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        {/*<Sider*/}
        {/*  style={{*/}
        {/*    overflow: "auto",*/}
        {/*    height: "100vh",*/}
        {/*    position: "fixed",*/}
        {/*    left: 0,*/}
        {/*  }}*/}
        {/*>*/}
        {/*  /!*<div className="logo" />*!/*/}
        {/*  <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>*/}
        {/*    <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">*/}
        {/*      <Menu.Item key="1">option1</Menu.Item>*/}
        {/*      <Menu.Item key="2">option2</Menu.Item>*/}
        {/*      <Menu.Item key="3">option3</Menu.Item>*/}
        {/*      <Menu.Item key="4">option4</Menu.Item>*/}
        {/*    </SubMenu>*/}
        {/*    <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">*/}
        {/*      <Menu.Item key="5">option5</Menu.Item>*/}
        {/*      <Menu.Item key="6">option6</Menu.Item>*/}
        {/*      <Menu.Item key="7">option7</Menu.Item>*/}
        {/*      <Menu.Item key="8">option8</Menu.Item>*/}
        {/*    </SubMenu>*/}
        {/*    <SubMenu*/}
        {/*      key="sub3"*/}
        {/*      icon={<NotificationOutlined />}*/}
        {/*      title="subnav 3"*/}
        {/*    >*/}
        {/*      <Menu.Item key="9">option9</Menu.Item>*/}
        {/*      <Menu.Item key="10">option10</Menu.Item>*/}
        {/*      <Menu.Item key="11">option11</Menu.Item>*/}
        {/*      <Menu.Item key="12">option12</Menu.Item>*/}
        {/*    </SubMenu>*/}
        {/*    <Menu.Item key="1" icon={<UserOutlined />}>*/}
        {/*      nav 1*/}
        {/*    </Menu.Item>*/}
        {/*    <Menu.Item key="2" icon={<VideoCameraOutlined />}>*/}
        {/*      nav 2*/}
        {/*    </Menu.Item>*/}
        {/*    <Menu.Item key="3" icon={<UploadOutlined />}>*/}
        {/*      nav 3*/}
        {/*    </Menu.Item>*/}
        {/*    <Menu.Item key="4" icon={<BarChartOutlined />}>*/}
        {/*      nav 4*/}
        {/*    </Menu.Item>*/}
        {/*    <Menu.Item key="5" icon={<CloudOutlined />}>*/}
        {/*      nav 5*/}
        {/*    </Menu.Item>*/}
        {/*    <Menu.Item key="6" icon={<AppstoreOutlined />}>*/}
        {/*      nav 6*/}
        {/*    </Menu.Item>*/}
        {/*    <Menu.Item key="7" icon={<TeamOutlined />}>*/}
        {/*      nav 7*/}
        {/*    </Menu.Item>*/}
        {/*    <Menu.Item key="8" icon={<ShopOutlined />}>*/}
        {/*      nav 8*/}
        {/*    </Menu.Item>*/}
        {/*  </Menu>*/}
        {/*</Sider>*/}
        <Layout style={{ padding: "0 24px 24px" }}>
          {/*<Breadcrumb style={{ margin: "16px 0" }}>*/}
          {/*  /!*<Breadcrumb.Item>Home</Breadcrumb.Item>*!/*/}
          {/*  /!*<Breadcrumb.Item>List</Breadcrumb.Item>*!/*/}
          {/*  /!*<Breadcrumb.Item>App</Breadcrumb.Item>*!/*/}
          {/*</Breadcrumb>*/}
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: "16px 0",
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayoutTest;
