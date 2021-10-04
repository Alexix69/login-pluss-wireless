import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import Link from "next/link";
import Routes from "../constants/routes";
import styled from "styled-components";
const { SubMenu } = Menu;
const MenuBar = () => {
  const [selectKey, setSelectKey] = useState("");
  const [selectItemKey, setSelectItemKey] = useState("");

  const handleClick = (e) => {
    console.log("click key", e.key);
    setSelectKey(e.key);
  };

  // useEffect(() => {
  //   console.log("IMPRIMIR CADA CAMNIO", selectKey);
  // }, [selectKey]);

  return (
    <Menu
      onClick={handleClick}
      style={{ width: 300, backgroundColor: "#bbbbbb" }}
      // defaultSelectedKeys={["1"]}
      // defaultOpenKeys={["sub1", "sub2", "sub3", "sub4"]}
      mode="inline"
      // selectedKeys={[selectKey]}
    >
      <MenuItemStyled key="1">
        <Link to={Routes.DASHBOARD}>Dashboard</Link>
      </MenuItemStyled>
      <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Seguridad">
        <MenuItemStyled key="2">
          <Link to={Routes.PERMISOS}>Permisos</Link>
        </MenuItemStyled>
        <Menu.Item key="3">
          <Link to={Routes.ROLES}>Roles</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to={Routes.USUARIOS}>Usuarios</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<SettingOutlined />} title="Base">
        <Menu.Item key="5">
          <Link to={Routes.CARGA_BD}>Cargar Base</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to={Routes.RETIRAR_BD}>Retirar Base</Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link to={Routes.ASIGNAR_BD}>Asignar Base</Link>
        </Menu.Item>
        <Menu.Item key="8">
          <Link to={Routes.HABILITAR_INHABILITAR}>Habilitar / Inhabilitar</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" icon={<SettingOutlined />} title="Reportes">
        <Menu.Item key="9">
          <Link to={Routes.BITACORA_CLIENTES}>Bitácora Clientes</Link>
        </Menu.Item>
        <Menu.Item key="10">
          <Link to={Routes.BITACORA_CREDITO}>Bitácora Crédito</Link>
        </Menu.Item>
        <Menu.Item key="11">
          <Link to={Routes.BITACORA_PDP}>Bitácora PDP</Link>
        </Menu.Item>
        <Menu.Item key="12">
          <Link to={Routes.TRAMA_GESTION}>Trama Gestión Completa</Link>
        </Menu.Item>
        <Menu.Item key="13">
          <Link to={Routes.INDICADORES}>Indicadores</Link>
        </Menu.Item>
        <Menu.Item key="14">
          <Link to={Routes.BREAK_TIMES}>Tiempos Break</Link>
        </Menu.Item>
        <Menu.Item key="15">
          <Link to={Routes.BD_GESTIONADA}>Base Gestionada</Link>
        </Menu.Item>
        <Menu.Item key="16">
          {" "}
          <Link to={Routes.MARKING_AGENTS}>Marcación Agentes</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Configuración">
        <Menu.Item key="17">
          <Link to={Routes.INICIO_GESTION}>Inicio Gestión</Link>
        </Menu.Item>
        <Menu.Item key="18">
          <Link to={Routes.DESHABILITAR_BD}>Deshabilitar Bases</Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="19">
        <Link to={Routes.GESTIONAR}>Gestionar</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuBar;

const MenuItemStyled = styled(Menu.Item)`
  background-color: #bbbbbb;
  color: crimson;
`;
