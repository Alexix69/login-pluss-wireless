import React from "react";
import { Menu } from "antd";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Routes from "../constants/routes";

const { SubMenu } = Menu;
const MenuBar = () => {
  const handleClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      onClick={handleClick}
      style={{ width: 300 }}
      defaultSelectedKeys={["1"]}
      // defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <Menu.Item key="1">
        <Link to={Routes.DASHBOARD}>Dashboard</Link>
      </Menu.Item>
      <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Seguridad">
        <Menu.Item key="2">
          <Link to={Routes.PERMISOS}>Permisos</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to={Routes.ROLES}>Roles</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to={Routes.USUARIOS}>Usuarios</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<SettingOutlined />} title="Base">
        <Menu.Item key="5">Cargar base</Menu.Item>
        <Menu.Item key="6">Retirar base</Menu.Item>
        <Menu.Item key="7">Asignar base</Menu.Item>
        <Menu.Item key="8">Habilitar / Inhabilitar</Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" icon={<SettingOutlined />} title="Reportes">
        <Menu.Item key="9">Bitácora Clientes</Menu.Item>
        <Menu.Item key="10">Bitácora Crédito</Menu.Item>
        <Menu.Item key="11">Bitácora PDP</Menu.Item>
        <Menu.Item key="12">Trama Gestión Completa</Menu.Item>
        <Menu.Item key="13">Indicadores</Menu.Item>
        <Menu.Item key="14">Tiempos Break</Menu.Item>
        <Menu.Item key="15">Base Gestionada</Menu.Item>
        <Menu.Item key="16">Marcación Agentes</Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Configuración">
        <Menu.Item key="17">Inicio Gestión</Menu.Item>
        <Menu.Item key="18">Deshabilitar Bases</Menu.Item>
      </SubMenu>
      <Menu.Item key="19">Gestionar</Menu.Item>
    </Menu>
  );
};

export default MenuBar;
