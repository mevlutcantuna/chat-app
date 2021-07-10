import React from "react";
import "../../styles/Navbar.scss";

//firebase
import { useFirebase } from "react-redux-firebase";

//redux
import { useSelector } from "react-redux";

//image
import Exit from "../../assets/exit.png";

const Navbar: React.FC = () => {
  const firebase = useFirebase();

  // @ts-ignore I could not find redux-firebase types so,I ignored that
  const profile = useSelector((state) => state.firebase.profile);
  console.log(profile.avatar);
  const logout = () => {
    firebase.logout().then((res) => console.log("çıkış yapıldı"));
  };

  return (
    <div className="navbar">
      <div className="navbar__title">Chat Room</div>
      <div className="navbar__profile">
        <span className="navbar__profile__name">{profile.name}</span>
        <span>
          <img
            className="navbar__profile__avatar"
            alt={"avatar"}
            src={profile.avatar}
          />
        </span>
        <span>
          <button className="navbar__profile__button" onClick={logout}>
            <img alt="exit" src={Exit} />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
