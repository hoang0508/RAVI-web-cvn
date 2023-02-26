import React from "react";
import { Tabs, TabsProps } from "antd";
import HistoryBookingAll from "../modules/history-booking/HistoryBookingAll";
import { Gap } from "../components/common/gap";
import HistoryBookingCancel from "../modules/history-booking/HistoryBookingCancel";
import HistoryBookingDone from "../modules/history-booking/HistoryBookingDone";
import HistoryBookingWait from "../modules/history-booking/HistoryBookingWait";

const HistoryBooking = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Toàn bộ`,
      children: <HistoryBookingAll></HistoryBookingAll>,
    },
    {
      key: "2",
      label: `Chờ thanh toán`,
      children: <HistoryBookingWait></HistoryBookingWait>,
    },
    {
      key: "3",
      label: `Đã thanh toán`,
      children: <HistoryBookingDone></HistoryBookingDone>,
    },
    {
      key: "4",
      label: `Đã hủy`,
      children: <HistoryBookingCancel></HistoryBookingCancel>,
    },
  ];
  return (
    <>
      <div>
        <Tabs className="tab-custom" defaultActiveKey="1" items={items} />
      </div>
      <Gap gap="g-80" />
    </>
  );
};

export default HistoryBooking;
