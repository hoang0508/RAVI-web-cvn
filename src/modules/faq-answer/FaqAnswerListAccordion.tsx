import React from "react";
import { Collapse } from "antd";
import { Heading } from "../../components/common/heading";
import { AccordionGroup } from "../../components/accordion";
import { Gap } from "../../components/common/gap";

const { Panel } = Collapse;
interface IFaqAnswerListAccordion {
  idScrollToView: any;
}

const FaqAnswerListAccordion = ({
  idScrollToView,
}: IFaqAnswerListAccordion) => {
  return (
    <>
      <div ref={idScrollToView?.reservationQuery}>
        <Heading
          className="heading-accordion"
          heading="Truy vấn đặt chỗ"
          size="small"
        ></Heading>
        <AccordionGroup>
          <Panel
            header="Tôi không thể tìm đc phòng của tôi trên Ravi.com."
            key={"1"}
          >
            Bạn có thể kiểm tra chi tiết đặt phòng khách sạn của mình bằng cách
            đăng nhập vào Ravi.com hoặc tài khoản khách của bạn bằng địa chỉ
            email được sử dụng trong đặt phòng.
          </Panel>
          <Panel
            header="Tôi không thể tìm đc phòng của tôi trên Ravi.com."
            key={"2"}
          >
            Bạn có thể kiểm tra chi tiết đặt phòng khách sạn của mình bằng cách
            đăng nhập vào Ravi.com hoặc tài khoản khách của bạn bằng địa chỉ
            email được sử dụng trong đặt phòng.
          </Panel>
        </AccordionGroup>
      </div>
      <Gap gap="g-60" />
      <div ref={idScrollToView?.cancelChange}>
        <Heading
          className="heading-accordion"
          heading="Hủy bỏ và sửa đổi"
          size="small"
        ></Heading>
        <AccordionGroup>
          <Panel
            header="Tôi không thể tìm đc phòng của tôi trên Ravi.com."
            key={"1"}
          >
            Bạn có thể kiểm tra chi tiết đặt phòng khách sạn của mình bằng cách
            đăng nhập vào Ravi.com hoặc tài khoản khách của bạn bằng địa chỉ
            email được sử dụng trong đặt phòng.
          </Panel>
          <Panel
            header="Tôi không thể tìm đc phòng của tôi trên Ravi.com."
            key={"2"}
          >
            Bạn có thể kiểm tra chi tiết đặt phòng khách sạn của mình bằng cách
            đăng nhập vào Ravi.com hoặc tài khoản khách của bạn bằng địa chỉ
            email được sử dụng trong đặt phòng.
          </Panel>
        </AccordionGroup>
      </div>
      <Gap gap="g-60" />
      <div ref={idScrollToView?.payment}>
        <Heading
          className="heading-accordion"
          heading="Thanh toán và hoàn tiền"
          size="small"
        ></Heading>
        <AccordionGroup>
          <Panel
            header="Tôi không thể tìm đc phòng của tôi trên Ravi.com."
            key={"1"}
          >
            Bạn có thể kiểm tra chi tiết đặt phòng khách sạn của mình bằng cách
            đăng nhập vào Ravi.com hoặc tài khoản khách của bạn bằng địa chỉ
            email được sử dụng trong đặt phòng.
          </Panel>
          <Panel
            header="Tôi không thể tìm đc phòng của tôi trên Ravi.com."
            key={"2"}
          >
            Bạn có thể kiểm tra chi tiết đặt phòng khách sạn của mình bằng cách
            đăng nhập vào Ravi.com hoặc tài khoản khách của bạn bằng địa chỉ
            email được sử dụng trong đặt phòng.
          </Panel>
        </AccordionGroup>
      </div>
      <Gap gap="g-60" />
      <div ref={idScrollToView?.checkIn}>
        <Heading
          className="heading-accordion"
          heading="Nhận phòng và trả phòng"
          size="small"
        ></Heading>
        <AccordionGroup>
          <Panel
            header="Tôi không thể tìm đc phòng của tôi trên Ravi.com."
            key={"1"}
          >
            Bạn có thể kiểm tra chi tiết đặt phòng khách sạn của mình bằng cách
            đăng nhập vào Ravi.com hoặc tài khoản khách của bạn bằng địa chỉ
            email được sử dụng trong đặt phòng.
          </Panel>
          <Panel
            header="Tôi không thể tìm đc phòng của tôi trên Ravi.com."
            key={"2"}
          >
            Bạn có thể kiểm tra chi tiết đặt phòng khách sạn của mình bằng cách
            đăng nhập vào Ravi.com hoặc tài khoản khách của bạn bằng địa chỉ
            email được sử dụng trong đặt phòng.
          </Panel>
        </AccordionGroup>
      </div>
      <Gap gap="g-60" />
      <div ref={idScrollToView?.receipt}>
        <Heading
          className="heading-accordion"
          heading="Biên lai và hóa đơn"
          size="small"
        ></Heading>
        <AccordionGroup>
          <Panel
            header="Tôi không thể tìm đc phòng của tôi trên Ravi.com."
            key={"1"}
          >
            Bạn có thể kiểm tra chi tiết đặt phòng khách sạn của mình bằng cách
            đăng nhập vào Ravi.com hoặc tài khoản khách của bạn bằng địa chỉ
            email được sử dụng trong đặt phòng.
          </Panel>
          <Panel
            header="Tôi không thể tìm đc phòng của tôi trên Ravi.com."
            key={"2"}
          >
            Bạn có thể kiểm tra chi tiết đặt phòng khách sạn của mình bằng cách
            đăng nhập vào Ravi.com hoặc tài khoản khách của bạn bằng địa chỉ
            email được sử dụng trong đặt phòng.
          </Panel>
        </AccordionGroup>
      </div>
    </>
  );
};

export default FaqAnswerListAccordion;
