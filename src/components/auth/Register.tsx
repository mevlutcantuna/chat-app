import React, { useState } from "react";

//material-ui
import { Button, TextField } from "@material-ui/core";

//firebase
import { useFirebase } from "react-redux-firebase";

interface IProps {
  setIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Register: React.FC<IProps> = (props) => {
  const firebase = useFirebase();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const createUser = () => {
    const [first, last] = username.split(" ");
    props.setIsLoading(true);
    firebase
      .createUser(
        {
          email,
          password,
        },
        {
          name: username,
          avatar: `https://ui-avatars.com/api/?name=${first}+${last}&background=random&color=fff`,
        }
      )
      .then((res) => {
        props.setIsLoading(false);
        props.setIsChanged(true);
      })
      .catch((err) => alert(err));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TextField
        value={username}
        onChange={handleChangeUsername}
        style={{ width: "25rem", marginBottom: "1rem" }}
        label="Username"
        variant="outlined"
      />
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
      <Button onClick={createUser} variant={"outlined"} color={"primary"}>
        Sign Up
      </Button>
    </div>
  );
};

export default Register;
