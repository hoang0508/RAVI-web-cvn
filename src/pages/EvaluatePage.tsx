import React from "react";
import { Button } from "../components/button";
import { Gap } from "../components/common/gap";
import { IconPencil } from "../components/icons";
import EvaluateItem from "../modules/evaluate/EvaluateItem";
import "../modules/evaluate/GlobalEvaluate.scss";

const EvaluatePage = () => {
  return (
    <>
      <div className="evaluate">
        <Button type="button" kind="xl">
          <span>Thêm đánh giá</span>
          <span>
            <IconPencil />
          </span>
        </Button>
        <Gap gap="g-40" />
        <EvaluateItem />
        <EvaluateItem />
      </div>
    </>
  );
};

export default EvaluatePage;
