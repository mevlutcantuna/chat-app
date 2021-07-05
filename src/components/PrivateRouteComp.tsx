import React from "react";

//redux
import { useSelector } from "react-redux";

//react-router-dom
import { Route, Redirect } from "react-router-dom";

//firebase
import { isLoaded, isEmpty } from "react-redux-firebase";

interface IProps {
  path: string;
  exact?: any;
}

const PrivateRouteComp: React.FC<IProps> = ({ children, ...rest }) => {
  const auth = useSelector<any>((state) => state.firebase.auth);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRouteComp;
