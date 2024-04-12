import React, { useState } from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelListContainer, ChannelContainer } from "./exports";
import Login from "../pages/Login";
import 'stream-chat-react/dist/css/v2/index.css';

const apiKey = import.meta.env.VITE_STREAM_API_KEY;
const client = StreamChat.getInstance(apiKey);

const cookies = new Cookies();
const authToken = cookies.get("streamToken");

if (authToken) {
  client.connectUser(
    {
      id: cookies.get("userId"),
      fullName: cookies.get("fullName"),
      role: cookies.get("role"),
    },

    authToken
  );
}

const ChatApp = () => {
  const [createType, setCreateType] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  if (!authToken) return <Login />;

  return (
    <>
      <div className="app__wrapper">
        <Chat client={client} theme="team light">
          <ChannelListContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            setCreateType={setCreateType}
            setIsEditing={setIsEditing}
          />
          <ChannelContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            createType={createType}
          />
        </Chat>
      </div>
    </>
  );
};

export default ChatApp;
