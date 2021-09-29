import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const MenuBar = () => {
  const handleClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <Menu.Item key="1">Dashboard</Menu.Item>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Seguridad">
        <Menu.Item key="5">Permisos</Menu.Item>
        <Menu.Item key="6">Roles</Menu.Item>
        <Menu.Item key="6">Usuarios</Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Base">
        <Menu.Item key="9">Cargar base</Menu.Item>
        <Menu.Item key="10">Retirar base</Menu.Item>
        <Menu.Item key="11">Asignar base</Menu.Item>
        <Menu.Item key="12">Habilitar / Inhabilitar</Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Reportes">
        <Menu.Item key="9">Bitácora Clientes</Menu.Item>
        <Menu.Item key="10">Bitácora Crédito</Menu.Item>
        <Menu.Item key="10">Bitácora PDP</Menu.Item>
        <Menu.Item key="11">Trama Gestión Completa</Menu.Item>
        <Menu.Item key="12">Indicadores</Menu.Item>
        <Menu.Item key="12">Tiempos Break</Menu.Item>
        <Menu.Item key="12">Base Gestionada</Menu.Item>
        <Menu.Item key="12">Marcación Agentes</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default MenuBar;
