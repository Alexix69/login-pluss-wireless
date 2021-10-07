import React from "react";
import {Form, Input, Button, Checkbox, Row, Col} from "antd";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import Routes from "../constants/routes";
import { Link } from "react-router-dom";

const LoginForm = () => {
  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };
  //
  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };
  // return (
  //   <Form
  //     name="basic"
  //     labelCol={{
  //       span: 8,
  //     }}
  //     wrapperCol={{
  //       span: 12,
  //     }}
  //     initialValues={{
  //       remember: true,
  //     }}
  //     onFinish={onFinish}
  //     onFinishFailed={onFinishFailed}
  //     autoComplete="off"
  //   >
  //     <Form.Item
  //       label="Username"
  //       name="username"
  //       rules={[
  //         {
  //           required: true,
  //           message: "Please input your username!",
  //         },
  //       ]}
  //     >
  //       <Input />
  //     </Form.Item>
  //
  //     <Form.Item
  //       label="Password"
  //       name="password"
  //       rules={[
  //         {
  //           required: true,
  //           message: "Please input your password!",
  //         },
  //       ]}
  //     >
  //       <Input.Password />
  //     </Form.Item>
  //
  //     <Form.Item
  //       name="remember"
  //       valuePropName="checked"
  //       wrapperCol={{
  //         offset: 8,
  //         span: 16,
  //       }}
  //     >
  //       <Checkbox>Recordar</Checkbox>
  //     </Form.Item>
  //
  //     <Form.Item
  //       wrapperCol={{
  //         offset: 12,
  //         span: 12,
  //       }}
  //     >
  //       <Button type="primary" htmlType="submit">
  //         Ingresar
  //       </Button>
  //     </Form.Item>
  //   </Form>
  // );

  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Row justify="center">
            <Col span={12}>
                <Row >
                    <Col >
                        <Controller
                            name="users"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <StyledInput {...field} placeholder="Usuario" />}
                        />
                    </Col>
                </Row>
                <Row justify="center">
                    <Col>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <StyledInput {...field} placeholder="Contraseña" />
                            )}
                        />
                    </Col>
                </Row>
                <Row >
                    <Col  >
                        <StyledButton type="submit">
                            <Link exact to={Routes.DASHBOARD}>
                                Ingresar
                            </Link>
                        </StyledButton>
                    </Col>
                </Row>
            </Col>
        </Row>


      {/*<div style={{ justifyContent: "center" }}>*/}
      {/*  */}
      {/*</div>*/}
    </form>
  );
};

export default LoginForm;

const StyledButton = styled(Button)`
  background: #fe6c16;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  width: 150px;
  margin: auto;
`;

const StyledInput = styled(Input)`
  margin: 10px;
  min-height: 64px;
  min-width: 390px;
`;
