import React from "react";
import { useParams } from "react-router-dom";

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomID } = useParams();
  const meeting = async (element) => {
    const appID = 1375406431;
    const serverSecret = "c31cb8ef7a14967793675e0f2bd5598a";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Varun"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };

  return <div ref={meeting} style={{ width: "100vw", height: "100vh" }}></div>;
};

export default Room;
