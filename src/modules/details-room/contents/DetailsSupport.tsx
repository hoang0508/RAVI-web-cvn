import React from "react";
import { Button } from "../../../components/button";
import { Heading } from "../../../components/common/heading";
import { Text } from "../../../components/common/text";
import "./DetailsSupport.scss";

const DetailsSupport = () => {
  return (
    <div className="DetailsSupport">
      <Heading heading="Bạn có cần hỗ trợ?" size="normal" />
      <Text>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </Text>
      <Button kind="2xl" type="button">
        Bạn có cần hỗ trợ?
      </Button>
    </div>
  );
};

export default DetailsSupport;
