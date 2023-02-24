import React from "react";
import { Link } from "react-router-dom";
import { Gap } from "../../../components/common/gap";
import { Text } from "../../../components/common/text";
import {
  IconBedroom,
  IconClock,
  IconOverView,
  IconParlking,
  IconShuttle,
  IconUserReceptionist,
  IconWifi,
} from "../../../components/icons";
import IconBedRoomV2 from "../../../components/icons/IconBedRoomV2";
import DetailsTable from "../parts/table/DetailsTable";
import "./DetailsContentTable.scss";

interface IDetailsContentTable {
  idTableDetails: any;
}

const DetailsContentTable = ({ idTableDetails }: IDetailsContentTable) => {
  return (
    <>
      <DetailsTable heading="Tổng quan">
        <div className="DetailsOverView-list">
          <div className="DetailsOverView-list--item">
            <span>
              <IconBedRoomV2 />
            </span>
            <span className="DetailsOverView-list--item-text">Phòng ngủ</span>
          </div>
          <div className="DetailsOverView-list--item">
            <span>
              <IconShuttle />
            </span>
            <span className="DetailsOverView-list--item-text">
              Có xe đưa đón
            </span>
          </div>
        </div>
        <div className="DetailsOverView-list">
          <div className="DetailsOverView-list--item">
            <span>
              <IconParlking />
            </span>
            <span className="DetailsOverView-list--item-text">
              Có chỗ để xe
            </span>
          </div>
          <div className="DetailsOverView-list--item">
            <span>
              <IconUserReceptionist />
            </span>
            <span className="DetailsOverView-list--item-text">
              Lễ tân 24/24
            </span>
          </div>
        </div>
        <div className="DetailsOverView-list">
          <div className="DetailsOverView-list--item">
            <span>
              <IconWifi />
            </span>
            <span className="DetailsOverView-list--item-text">Phòng ngủ</span>
          </div>
        </div>
      </DetailsTable>
      <Gap gap="g-40" />
      <div className="column-table" ref={idTableDetails?.utilitiesHotel}>
        <DetailsTable heading="Tiện nghi phổ biến nhất" headingInline="inline">
          <div className="DetailsOverView-list">
            <div className="DetailsOverView-list--item">
              <span>
                <IconOverView />
              </span>
              <span className="DetailsOverView-list--item-text">Tổng quát</span>
            </div>
            <ul>
              <li>
                <Link to={"/"}>
                  <Text>Dịch vụ đưa đón (phụ phí)</Text>
                </Link>
              </li>
            </ul>
          </div>
          <div className="DetailsOverView-list">
            <div className="DetailsOverView-list--item">
              <span>
                <IconBedRoomV2 />
              </span>
              <span className="DetailsOverView-list--item-text">Phòng ngủ</span>
            </div>
            <ul>
              <li>
                <Link to={"/"}>
                  <Text>Dịch vụ đưa đón (phụ phí)</Text>
                </Link>
              </li>
            </ul>
          </div>
          <div className="DetailsOverView-list">
            <div className="DetailsOverView-list--item">
              <span>
                <IconWifi />
              </span>
              <span className="DetailsOverView-list--item-text">Internet</span>
            </div>
            <ul>
              <li>
                <Link to={"/"}>
                  <Text>Dịch vụ đưa đón (phụ phí)</Text>
                </Link>
              </li>
            </ul>
          </div>
          <div className="DetailsOverView-list">
            <div className="DetailsOverView-list--item">
              <span>
                <IconParlking />
              </span>
              <span className="DetailsOverView-list--item-text">
                Chỗ đậu xe
              </span>
            </div>
            <ul>
              <li>
                <Link to={"/"}>
                  <Text>Dịch vụ đưa đón (phụ phí)</Text>
                </Link>
              </li>
            </ul>
          </div>
        </DetailsTable>
      </div>
      <Gap gap="g-40" />
      <DetailsTable heading="Khu vực xung quanh">
        <div className="DetailsOverView-list">
          <div className="DetailsOverView-list--item">
            <span>
              <IconBedRoomV2 />
            </span>
            <span className="DetailsOverView-list--item-text">Phòng ngủ</span>
          </div>
        </div>
        <div className="DetailsOverView-list">
          <div className="DetailsOverView-list--item">
            <span>
              <IconParlking />
            </span>
            <span className="DetailsOverView-list--item-text">
              Có chỗ để xe
            </span>
          </div>
        </div>
      </DetailsTable>
      <Gap gap="g-40" />
      <DetailsTable heading="Mô tả khách sạn" grid="full" headingInline="block">
        <Text>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet.
        </Text>
      </DetailsTable>
      <Gap gap="g-40" />
      <div ref={idTableDetails?.infoHotel}>
        <DetailsTable
          heading="Thời gian nhận phòng"
          grid="full"
          headingInline="block"
        >
          <div className="DetailsOverView-list">
            <div className="DetailsOverView-list--item">
              <span>
                <IconClock />
              </span>
              <span className="DetailsOverView-list--item-text">
                Từ 12:00 - 00:00 giờ chiều
              </span>
            </div>
          </div>
        </DetailsTable>
        <Gap gap="g-40" />
        <DetailsTable
          heading="Thời gian trả phòng"
          grid="full"
          headingInline="block"
        >
          <div className="DetailsOverView-list">
            <div className="DetailsOverView-list--item">
              <span>
                <IconClock />
              </span>
              <span className="DetailsOverView-list--item-text">
                Đến 11:00 - 13:00 giờ sáng
              </span>
            </div>
          </div>
        </DetailsTable>
        <Gap gap="g-40" />
      </div>
      <div ref={idTableDetails?.ruleHotel}>
        <DetailsTable heading="Quy tắc chung" grid="full" headingInline="block">
          <Text>
            Phù hợp cho tất cả trẻ em. Trẻ em từ 12 tuổi trở lên được tính như
            người lớn tại chỗ nghỉ này. Để xem thông tin giá và tình trạng phòng
            trống chính xác, vui lòng thêm số lượng và độ tuổi của trẻ em trong
            nhóm của bạn khi tìm kiếm. Không có yêu cầu về độ tuổi khi nhận
            phòng Vật nuôi không được phép. Hút thuốc không được cho phép.
          </Text>
        </DetailsTable>
        <Gap gap="g-40" />
      </div>
      <DetailsTable heading="Ghi chú" grid="full">
        <Text>
          Xin vui lòng liên hệ trực tiếp với khách sạn để biết thêm thông tin về
          các dịch vụ đưa đón qua chi tiết liên hệ có trong xác nhận đặt phòng.
          Du khách phải xác minh thẻ tín dụng trước khi đến. Du khách vui lòng
          xuất trình đúng thẻ tín dụng đã dùng để đảm bảo đặt phòng khi làm thủ
          tục nhận phòng tại khách sạn. Nếu không ủy quyền thẻ tín dụng hoặc
          không xuất trình thẻ tín dụng ban đầu, du khách sẽ không được phép
          nhận phòng. Quý khách phải xuất trình các giấy tờ sau khi đến, trước
          khi nhận phòng: 1. Thẻ tín dụng được sử dụng để đặt phòng và bản sao
          của thẻ ở mặt trước có chữ ký của chủ thẻ 2. Xác nhận giao dịch (được
          gửi trực tiếp đến email của du khách sau khi thanh toán thành công)
        </Text>
      </DetailsTable>
    </>
  );
};

export default DetailsContentTable;
