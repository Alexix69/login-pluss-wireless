import "./styles/App.css";
import React from "react";
import MainLayout from "./components/MainLayout";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Routes from "./constants/routes";
import HomePage from "./pages/HomePage";
import { BorderOuterOutlined } from "@ant-design/icons";
import RolesPage from "./pages/RolesPage";
import PermisosPage from "./pages/PermisosPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={Routes.LOGIN}>
          <LoginPage />
        </Route>
        <Route exact path={Routes.HOME}>
          <HomePage />
        </Route>
        <Route exact path={Routes.DASHBOARD}>
          <DashboardPage />
        </Route>
        <Route exact path={Routes.ROLES}>
          <RolesPage />
        </Route>
        <Route exact path={Routes.PERMISOS}>
          <PermisosPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
