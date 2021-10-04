import React from "react";
import LoginForm from "../components/LoginForm";
import Routes from "../constants/routes";
import { Link } from "react-router-dom";
import { Footer } from "antd/es/layout/layout";
// import  from "antd/es/descriptions/Row";
import { Col, Row } from "antd";

const LoginPage = () => {
  return (
    <>
      {/*<div style={{ backgroundColor: "#53504E", minHeight: "100vh" }}>*/}

      <Row
        justify="start"
        align="middle"
        style={{ backgroundColor: "#53504E", minHeight: "100vh" }}
      >
        <Col span={6} offset={9}>
          <LoginForm />
        </Col>
        <Col span={24}>
          {/*<Link exact to={Routes.DASHBOARD}>*/}
          {/*  To Dashboard*/}
          {/*</Link>*/}
          {/*</div>*/}
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
    </>
  );
};

export default LoginPage;
