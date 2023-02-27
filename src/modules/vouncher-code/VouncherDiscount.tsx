import React from "react";
import { Button } from "../../components/button";
import { FormGroup } from "../../components/form";
import { InputComp } from "../../components/input";
import { Label } from "../../components/label";
import "./VouncherDiscount.scss";

const VouncherDiscount = () => {
  return (
    <div className="vouncher-discount">
      <FormGroup>
        <Label labelMark htmlFor="discount">
          Mã khuyến mãi
        </Label>
        <div className="vouncher-discount--code">
          <InputComp
            name="discount"
            placeholder="Nhập mã khuyến mãi"
            type="text"
          />
          <Button type="submit" kind="xl">
            Áp dụng mã
          </Button>
        </div>
      </FormGroup>
    </div>
  );
};

export default VouncherDiscount;
