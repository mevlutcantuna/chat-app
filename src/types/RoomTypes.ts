export interface RoomTypes {
  key: string;
  value: {
    roomName: string;
    desc: string;
    createdBy: {
      name: string;
      avatar: string;
    };
  };
}
