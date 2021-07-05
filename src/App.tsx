import React from "react";

//components
import Auth from "./components/auth/Auth";
import Room from "./components/room/Room";

//react-router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRouteComp from "./components/PrivateRouteComp";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Auth} />
          <PrivateRouteComp exact path={"/room"}>
            <Room />
          </PrivateRouteComp>
        </Switch>
      </Router>
    </>
  );
};

export default App;
