import React from "react";
import "../../styles/RoomNames.scss";

//firebase - redux
import { useFirebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { useDispatch, useSelector } from "react-redux";

//types
import { RoomTypes } from "../../types/RoomTypes";

//actions
import { changePage } from "../../store/actions/CurrentPage";

const RoomNames = () => {
  useFirebaseConnect([{ path: "rooms" }]);

  const currentPage = useSelector(
    // @ts-ignore
    (state) => state.CurrentPage.currentPage.value.roomName
  );
  const dispatch = useDispatch();

  console.log(currentPage);

  const changeCurrentPage = (currentPage: RoomTypes) => {
    dispatch(changePage(currentPage));
  };

  // @ts-ignore
  const rooms = useSelector((state) => state.firebase.ordered?.rooms);

  if (!isLoaded(rooms)) {
    return <div className="roomNames">Loading Rooms</div>;
  }

  if (isEmpty(rooms)) {
    return <div className="roomNames">No Rooms</div>;
  }

  return (
    <div className="roomNames">
      <ul>
        {rooms?.map((item: RoomTypes) => (
          <li
            style={
              item.value.roomName === currentPage
                ? { backgroundColor: "#053c72" }
                : {}
            }
            onClick={() => changeCurrentPage(item)}
            key={item?.key}
          >
            {item?.value.roomName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomNames;
