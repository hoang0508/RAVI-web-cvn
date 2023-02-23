import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/vi";
import { IconArrow } from "../icons";

dayjs.extend(localizedFormat);
dayjs.locale("vi");

interface IDatePickerComp {
  picker: "time" | "date" | "week" | "month" | "quarter" | "year" | undefined;
}

const DatePickerComp = ({ picker }: IDatePickerComp) => {
  const dateFormat = "DD-MM";
  const yearFormat = "YYYY";

  const now: any = dayjs();
  console.log(now);
  console.log(now?.$y);

  let nowPicker;
  let fomatPicker;

  switch (picker) {
    case "date":
      nowPicker = now?.$d;
      fomatPicker = dateFormat;
      break;
    case "year":
      nowPicker = now?.$y;
      fomatPicker = yearFormat;
      break;

    default:
      break;
  }

  return (
    <>
      <DatePicker
        className="datepicker-custom"
        defaultValue={dayjs(nowPicker)}
        format={fomatPicker}
        picker={picker}
        suffixIcon={<IconArrow />}
      />
    </>
  );
};

export default DatePickerComp;
