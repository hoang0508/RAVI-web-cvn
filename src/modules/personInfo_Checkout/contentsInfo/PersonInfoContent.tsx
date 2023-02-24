import { Button } from "../../../components/button";
import { ChecboxComp, CheckboxGroup } from "../../../components/checkbox";
import { Gap } from "../../../components/common/gap";
import { Heading } from "../../../components/common/heading";
import { Text } from "../../../components/common/text";
import { IconCheck, IconUserRoom } from "../../../components/icons";
import { TextAreaComp } from "../../../components/input";
import { SelectComp } from "../../../components/select";
import "./PersonInfoContent.scss";
import PersonInfoForm from "./PersonInfoForm";

interface IPersonInfoContent {
  setCurrentStep: any;
  currentStep: number;
}

const PersonInfoContent = ({
  setCurrentStep,
  currentStep,
}: IPersonInfoContent) => {
  const handleNextStepCheckout = () => {
    window.scrollTo(0, 0);
    setCurrentStep(currentStep + 1);
  };
  return (
    <div className="personinfo-content">
      <PersonInfoForm />
      <Gap gap="g-40" />
      <div className="personinfo-content-question border-bottom--custom">
        <Heading heading="Bạn đặt phòng này cho ai?" size="normal"></Heading>
        <div className="">
          <CheckboxGroup>
            <ChecboxComp
              text="Tôi là khách lưu trú chính"
              value="A"
            ></ChecboxComp>
            <ChecboxComp
              text="Tôi đặt phòng này cho người khác"
              value="B"
            ></ChecboxComp>
          </CheckboxGroup>
        </div>
      </div>
      <Gap gap="g-40" />
      <div className="personinfo-content-required border-bottom--custom">
        <div className="personinfo-content-required--heading">
          <Heading size="normal" heading="Yêu cầu đặc biệt " />
          <span className="text">(không bắt buộc)</span>
        </div>
        <Text className="personinfo-content-required--desc">
          Khách sạn sẽ cố gắng hết sức nhưng không thể bảo đảm là sẽ đáp ứng
          được mọi yêu cầu.
        </Text>
        <TextAreaComp
          value=""
          placeholder="Vui lòng ghi yêu cầu của bạn ở đây"
        ></TextAreaComp>
      </div>
      <Gap gap="g-40" />
      <div className="personinfo-content-timeroom border-bottom--custom">
        <Heading size="normal" heading="Thời gian đến nhận phòng"></Heading>
        <div className="personinfo-content-timeroom--list">
          <div className="personinfo-content-timeroom--item">
            <span>
              <IconCheck />
            </span>
            <Text>
              Phòng của bạn sẽ sẵn sàng để nhận trong khoảng từ 12:00 đến 00:00
            </Text>
          </div>
          <div className="personinfo-content-timeroom--item">
            <span>
              <IconUserRoom />
            </span>
            <Text>Lễ tân 24 giờ - Luôn có trợ giúp mỗi khi bạn cần!</Text>
          </div>
        </div>
        <div className="personinfo-content-timeroom--expected">
          <div className="expected-heading">
            <h3 className="expected-heading--title">
              Thêm thời gian dự kiến của bạn
            </h3>
            <span className="expected-heading--text">(không bắt buộc)</span>
          </div>
          <SelectComp name="" defaultValue="Vui lòng chọn"></SelectComp>
        </div>
      </div>
      <Gap gap="g-40" />
      <div className="border-bottom--custom button-details--checkout">
        <Button
          type="button"
          kind="xl"
          onClick={() => handleNextStepCheckout()}
        >
          Chi tiết thanh toán
        </Button>
      </div>
      <Gap gap="g-40" />
      <div className="personinfo-content-help border-bottom--custom">
        <Heading heading="Bạn có cần hỗ trợ" size="normal"></Heading>
        <Text>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>
        <Button type="button" kind="2xl">
          Bạn có cần hỗ trợ?
        </Button>
      </div>
    </div>
  );
};

export default PersonInfoContent;
