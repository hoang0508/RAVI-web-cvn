import React from "react";
import DetailsRoomContent from "../modules/details-room/DetailsRoomContent";
import DetailsRoomPay from "../modules/details-room/DetailsRoomPay";
import "../modules/details-room/GlobalDetails.scss";

const DetailsRoomPage = () => {
  return (
    <div className="container details-room">
      <DetailsRoomContent />
      <DetailsRoomPay />
    </div>
  );
};

export default DetailsRoomPage;
