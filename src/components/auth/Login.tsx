import React, { useState } from "react";

//react-router-dom
import { useHistory } from "react-router-dom";

// firebase
import { useFirebase } from "react-redux-firebase";

//material-ui
import { Button, TextField } from "@material-ui/core";

interface IProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<IProps> = (props) => {
  const firebase = useFirebase();
  const history = useHistory();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const login = () => {
    props.setIsLoading(true);
    firebase.login({ email, password }).then((res) => {
      props.setIsLoading(false);
      history.push("room");
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TextField
        value={email}
        onChange={handleChangeEmail}
        style={{ width: "25rem", marginBottom: "1rem" }}
        label="Email"
        variant="outlined"
      />
      <TextField
        value={password}
        onChange={handleChangePassword}
        style={{ width: "25rem", marginBottom: "1rem" }}
        label="Password"
        variant="outlined"
        type={"password"}
      />
      <Button onClick={login} variant={"outlined"} color={"primary"}>
        Log In
      </Button>
    </div>
  );
};

export default Login;
