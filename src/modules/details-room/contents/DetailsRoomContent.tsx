import React, { useRef } from "react";
import { Button } from "../../../components/button";
import { Gap } from "../../../components/common/gap";
import { Heading } from "../../../components/common/heading";
import { IconChecked } from "../../../components/icons";
import DetailsNav from "../parts/nav/DetailsNav";
import DetailsThumb from "../parts/thumb/DetailsThumb";
import DetailsChosePayment from "./DetailsChosePayment";
import DetailsContentTable from "./DetailsContentTable";
import DetailsExpenseRoom from "./DetailsExpenseRoom";
import DetailsSupport from "./DetailsSupport";
import DetailsVoteRatings from "./DetailsVoteRatings";
import DetailsWatchMap from "./DetailsWatchMap";

const DetailsRoomContent = () => {
  const utilitiesHotel = useRef(null);
  const infoHotel = useRef(null);
  const ruleHotel = useRef(null);
  const voteHotel = useRef(null);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 30,
      behavior: "smooth",
    });
  };
  const idTableDetails = { utilitiesHotel, infoHotel, ruleHotel, voteHotel };
  return (
    <div className="details-room--left">
      <DetailsThumb />
      <DetailsNav
        scrollToSection={scrollToSection}
        idTableDetails={idTableDetails}
      />
      <DetailsContentTable idTableDetails={idTableDetails} />
      <Gap gap="g-40" />
      <div ref={voteHotel}>
        <DetailsVoteRatings />
      </div>
      <Gap gap="g-40" />
      <DetailsWatchMap />
      <Gap gap="g-40" />
      <DetailsExpenseRoom />
      <Gap gap="g-40" />
      <DetailsChosePayment />
      <Gap gap="g-40" />
      <div className="border-bottom--details cancel-payment">
        <Heading size="normal" heading="Lorem Ipsum" />
        <div className="cancel-payment--check">
          <span>
            <IconChecked />
          </span>
          <div className="cancel-payment--check-text">
            <span className="text-strong">Miễn phí hủy </span>{" "}
            <span className="text-normal">
              đến 23:59 ngày ngày 12 tháng 12 năm 2022
            </span>
          </div>
        </div>
      </div>
      <Gap gap="g-40" />
      <div className="border-bottom--details details-book--now">
        <Button type="button" kind="xl">
          Đặt ngay
        </Button>
        <span className="details-book--now-text">Bạn sẽ không bị tính phí</span>
      </div>
      <Gap gap="g-40" />
      <div className="details-room--code border-bottom--details">
        <span>Mã đặt phòng: </span>
        <strong className="reservation-code">HSF69WL</strong>
      </div>
      <Gap gap="g-40" />
      <DetailsSupport />
      <Gap gap="g-40" />
    </div>
  );
};

export default DetailsRoomContent;
