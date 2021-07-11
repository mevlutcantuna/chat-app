export interface MessageTypes {
  key: string;
  value: {
    content: string;
    timestamp: number;
    user: {
      avatar: string;
      name: string;
      id: string;
    };
  };
}
