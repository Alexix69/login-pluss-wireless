import React from "react";
import LoginForm from "../components/LoginForm";
import Routes from "../constants/routes";
import { Link } from "react-router-dom";
import { Footer } from "antd/es/layout/layout";
// import  from "antd/es/descriptions/Row";
import { Col, Row, Space } from "antd";
import crmlogo from "../crmlogo.jpeg";
import userlogin from "../userlogin.png";
import Title from "antd/es/typography/Title";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <>
      {/*<div style={{ backgroundColor: "#53504E", minHeight: "100vh" }}>*/}
      {/*<Row>*/}
      {/*  <Col>hols</Col>*/}
      {/*</Row>*/}
      {/*<Row*/}
      {/*  justify="start"*/}
      {/*  align="middle"*/}
      {/*  style={{ backgroundColor: "#53504E", minHeight: "100vh" }}*/}
      {/*>*/}
      {/*  <Col span={6} offset={9}>*/}
      {/*    <LoginForm />*/}
      {/*  </Col>*/}
      {/*  <Col span={24}>*/}
      {/*    /!*<Link exact to={Routes.DASHBOARD}>*!/*/}
      {/*    /!*  To Dashboard*!/*/}
      {/*    /!*</Link>*!/*/}
      {/*    /!*</div>*!/*/}
      {/*    <Footer*/}
      {/*      style={{*/}
      {/*        textAlign: "center",*/}
      {/*        backgroundColor: "#53504E",*/}
      {/*        color: "#ffffff",*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      ©Copyright 2020 Plus Wireless - Todos los derechos reservados*/}
      {/*    </Footer>*/}
      {/*  </Col>*/}
      {/*</Row>*/}

      <Row
        justify="center"
        align="middle"
        style={{ backgroundColor: "#53504E", minHeight: "100vh" }}
      >
        <Col >
          <Space direction="vertical" size="large">
            <Row justify="center">
              <Col >
                <StyledTitle level={2} style={{ color: "#fe6c16" }}>
                  CONVERSIONES
                </StyledTitle>
              </Col>
            </Row>
            <Row justify="center">
              <Col>
                <img
                  src={userlogin}
                  alt="LOGO"
                  style={{ width: "180px", height: "180px" }}
                />
              </Col>
            </Row>
            <Row >
              <Col  span={8}>
                <LoginForm />
              </Col>
            </Row>
            <Row justify="center">
              <Col>
                <Footer
                  style={{
                    textAlign: "center",
                    backgroundColor: "#53504E",
                    color: "#ffffff",
                  }}
                >
                  ©Copyright 2020 Plus Wireless - Todos los derechos reservados
                </Footer>
              </Col>
            </Row>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;

const StyledTitle = styled(Title)`
  color: #fe6c16;
`;
