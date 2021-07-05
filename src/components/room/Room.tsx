import React from "react";
import { useFirebase } from "react-redux-firebase";

const Room: React.FC = () => {
  const firebase = useFirebase();

  console.log(firebase);
  const logout = () => {
    firebase.logout().then((res) => console.log("çıkış yapıldı"));
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Room;
