import React, { useEffect, useState } from "react";
import "../../styles/Auth.scss";

//components
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";

//firebase
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";

const Auth: React.FC = () => {
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      //console.log(user);
      if (user !== null) {
        history.push("/room");
      }
    });
  }, [history]);

  return (
    <div className="auth">
      <Header isChanged={isChanged} setIsChanged={setIsChanged} />
      {isChanged ? (
        <Login setIsLoading={setIsLoading} />
      ) : (
        <Register setIsLoading={setIsLoading} setIsChanged={setIsChanged} />
      )}
      {isLoading && (
        <div className={"auth__loading"}>
          <img alt={"loading"} src={"https://i.stack.imgur.com/kOnzy.gif"} />
        </div>
      )}
    </div>
  );
};

export default Auth;
