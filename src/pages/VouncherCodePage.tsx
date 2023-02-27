import { Tabs, TabsProps } from "antd";
import React from "react";
import { Gap } from "../components/common/gap";
import VouncherAll from "../modules/vouncher-code/VouncherAll";
import VouncherDiscount from "../modules/vouncher-code/VouncherDiscount";
import VouncherExprired from "../modules/vouncher-code/VouncherExprired";
import VouncherTouse from "../modules/vouncher-code/VouncherTouse";
import VouncherUse from "../modules/vouncher-code/VouncherUse";

const VouncherCodePage = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Toàn bộ`,
      children: <VouncherAll />,
    },
    {
      key: "2",
      label: `Chưa dùng`,
      children: <VouncherUse />,
    },
    {
      key: "3",
      label: `Đã hết hạn`,
      children: <VouncherExprired />,
    },
    {
      key: "4",
      label: `Đã sử dụng`,
      children: <VouncherTouse />,
    },
  ];
  return (
    <>
      <div>
        <VouncherDiscount></VouncherDiscount>
        <Tabs className="tab-custom" defaultActiveKey="1" items={items} />
      </div>
      <Gap gap="g-80" />
    </>
  );
};

export default VouncherCodePage;
