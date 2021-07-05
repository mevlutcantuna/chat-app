import React from "react";
import "../../styles/Header.scss";

interface IProps {
  isChanged: boolean;
  setIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<IProps> = (props) => {
  const { isChanged, setIsChanged } = props;

  return (
    <div className={"header"}>
      <div
        onClick={() => setIsChanged(true)}
        style={
          isChanged
            ? { backgroundColor: "#115293", borderRadius: "0.5rem" }
            : {}
        }
      >
        Login
      </div>
      <div
        onClick={() => setIsChanged(false)}
        style={
          !isChanged
            ? { backgroundColor: "#115293", borderRadius: "0.5rem" }
            : {}
        }
      >
        Register
      </div>
    </div>
  );
};

export default Header;
