import "./styles/App.css";
import React from "react";
import MainLayout from "./components/MainLayout";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Routes from "./constants/routes";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      {/*<Link to={Routes.HOME}>HOme</Link>*/}
      <MainLayout>
        <div>
          <ul>
            <li>
              <Link to={Routes.DASHBOARD}>Dashboard</Link>
            </li>
          </ul>

          <Switch>
            <Route path={Routes.DASHBOARD}>
              <DashboardPage />
            </Route>
          </Switch>
        </div>
      </MainLayout>
      {/*<Switch>*/}
      {/*  <Route path={Routes.HOME}>*/}
      {/*    <HomePage />*/}
      {/*  </Route>*/}
      {/*</Switch>*/}
    </Router>
  );
}

export default App;
