import "./styles/App.css";
import React from "react";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./constants/routes";
import HomePage from "./pages/HomePage";
import RolesPage from "./pages/RolesPage";
import PermisosPage from "./pages/PermisosPage";
import UsersPage from "./pages/UsersPage";
import UploadDbPage from "./pages/UploadDBPage";
import RemoveDbPage from "./pages/RemoveDBPage";
import AssignDbPage from "./pages/AssignDBPage";
import EnableDisablePage from "./pages/EnableDisablePage";
import ClientsBinnaclePage from "./pages/ClientsBinnaclePage";
import CreditBinnaclePage from "./pages/CreditBinnaclePage";
import PdpBinnaclePage from "./pages/PdpBinnaclePage";
import CompleteManagementPage from "./pages/CompleteManagementPage";
import IndicatorsPage from "./pages/IndicatorsPage";
import BreakTimesPage from "./pages/BreakTimesPage";
import ManagedBdPage from "./pages/ManagedBDPage";
import MarkingAgentsPage from "./pages/MarkingAgentsPage";
import HomeManagementPage from "./pages/HomeManagementPage";
import DisableBdPage from "./pages/DisableBDPage";
import ManagePage from "./pages/ManagePage";

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
        <Route exact path={Routes.USUARIOS}>
          <UsersPage />
        </Route>
        <Route exact path={Routes.CARGA_BD}>
          <UploadDbPage />
        </Route>
        <Route exact path={Routes.RETIRAR_BD}>
          <RemoveDbPage />
        </Route>
        <Route exact path={Routes.ASIGNAR_BD}>
          <AssignDbPage />
        </Route>
        <Route exact path={Routes.HABILITAR_INHABILITAR}>
          <EnableDisablePage />
        </Route>
        <Route exact path={Routes.BITACORA_CLIENTES}>
          <ClientsBinnaclePage />
        </Route>
        <Route exact path={Routes.BITACORA_CREDITO}>
          <CreditBinnaclePage />
        </Route>
        <Route exact path={Routes.BITACORA_PDP}>
          <PdpBinnaclePage />
        </Route>
        <Route exact path={Routes.TRAMA_GESTION}>
          <CompleteManagementPage />
        </Route>
        <Route exact path={Routes.INDICADORES}>
          <IndicatorsPage />
        </Route>
        <Route exact path={Routes.BREAK_TIMES}>
          <BreakTimesPage />
        </Route>
        <Route exact path={Routes.BD_GESTIONADA}>
          <ManagedBdPage />
        </Route>
        <Route exact path={Routes.MARKING_AGENTS}>
          <MarkingAgentsPage />
        </Route>
        <Route exact path={Routes.INICIO_GESTION}>
          <HomeManagementPage />
        </Route>
        <Route exact path={Routes.DESHABILITAR_BD}>
          <DisableBdPage />
        </Route>
        <Route exact path={Routes.GESTIONAR}>
          <ManagePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
