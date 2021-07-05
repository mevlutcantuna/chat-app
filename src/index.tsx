import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./styles/Global.scss";

//redux
import { store } from "./store/store";
import { Provider } from "react-redux";

//redux - firebase
import firebase from "./firebase";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

const rrfConfig = {
  userProfile: "users",
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

const RootApp = () => {
  return (
    <>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
        </ReactReduxFirebaseProvider>
      </Provider>
    </>
  );
};

render(<RootApp />, document.getElementById("root"));
