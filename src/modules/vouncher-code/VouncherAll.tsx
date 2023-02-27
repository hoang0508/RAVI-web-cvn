import React from "react";
import CardVouncher from "../../components/cards/card-vouncher/CardVouncher";

const VouncherAll = () => {
  return (
    <div>
      <CardVouncher vouncherFeature="use" />
      <CardVouncher vouncherFeature="expired" />
      <CardVouncher vouncherFeature="touse" />
    </div>
  );
};

export default VouncherAll;
