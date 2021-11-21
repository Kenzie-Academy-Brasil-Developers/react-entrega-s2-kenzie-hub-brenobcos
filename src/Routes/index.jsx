import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@kenziehub:token"));

    if (token) {
      return setLogged(true);
    }
  }, [logged]);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Login logged={logged} setLogged={setLogged}></Login>
        </Route>
        <Route exact path="/register">
          <Register logged={logged} setLogged={setLogged}></Register>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard logged={logged} setLogged={setLogged}></Dashboard>
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
