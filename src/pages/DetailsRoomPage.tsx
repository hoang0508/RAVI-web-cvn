import React from "react";
import DetailsRoomContent from "../modules/details-room/contents/DetailsRoomContent";
import "../modules/details-room/GlobalDetails.scss";
import DetailsRoomPay from "../modules/details-room/pays/DetailsRoomPay";
import { Swiper, SwiperSlide } from "swiper/react";
import CardItemHomePage from "../components/cards/card-home/CardItemHomePage";
import { BgGray } from "../components/common/backgroud";
import { Heading } from "../components/common/heading";
import { Gap } from "../components/common/gap";
import { RegisterMail } from "../components/register-mail";
import { Button } from "../components/button";

const DetailsRoomPage = () => {
  return (
    <div className="details-room">
      <div className="container details-room--page">
        <DetailsRoomContent />
        <DetailsRoomPay />
      </div>
      <div className="container">
        <div className="border-bottom--details">
          <BgGray className="details-hotel--recommended">
            <Heading
              size="small"
              heading="Những khách sạn khác được đề xuất"
            ></Heading>
            <div className="grid-layout">
              <Swiper grabCursor spaceBetween={20} slidesPerView={"auto"}>
                {Array(6)
                  .fill(0)
                  .map((item, index) => (
                    <SwiperSlide key={index}>
                      <CardItemHomePage></CardItemHomePage>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </BgGray>
        </div>
        <Gap gap="g-40" />
        <div className="details-hotel--search border-bottom--details">
          <Heading
            size="small"
            heading="Bạn chưa tìm được khách sạn ưng ý?"
          ></Heading>
          <Button type="button" kind="sm">
            Tiếp tục tìm kiếm
          </Button>
        </div>
        <Gap gap="g-40" />
        <RegisterMail />
      </div>
    </div>
  );
};

export default DetailsRoomPage;
