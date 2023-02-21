import React from "react";
import { IconFeeling, IconStar } from "../../../../components/icons";
import CardImageVote from "../../../../assets/images/user-vote.png";
import "./CardVote.scss";
import { Text } from "../../../../components/common/text";

const CardVote = () => {
  return (
    <div className="detailsCard-vote">
      <div className="detailsCard-vote--user">
        <div className="detailsCard-vote--user-image">
          <img src={CardImageVote} alt="" />
        </div>
        <div className="detailsCard-vote--user-info">
          <h3 className="info-name">Kathryn Murphy</h3>
          <span className="info-date">tháng 07 năm 2022</span>
        </div>
      </div>
      <div className="detailsCard-vote--rating">
        <div className="detailsCard-vote--rating-number">
          <span className="number-quanlity">5.0</span>
          <span className="number-stars">
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <span key={index}>
                  <IconStar />
                </span>
              ))}
          </span>
        </div>
        <span className="detailsCard-vote--rating-text">“Tuyệt vời”</span>
      </div>
      <Text className="detailsCard-vote--desc">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.Exercitation veniam
        consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est
        sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
        mollit.Exercitation veniam consequat sunt nostrud amet.
      </Text>
      <div className="detailsCard-vote--commnent">
        <span>
          <IconFeeling />
        </span>
        <span className="detailsCard-vote--commnent-text">
          Tuyệt vời: Sạch sẽ, nhân viên nhiệt tình, dịch vụ siêu tốt
        </span>
      </div>
      <span className="detailsCard-vote--time">
        Đăng vào lúc ngày 12 tháng 07 năm 2022
      </span>
    </div>
  );
};

export default CardVote;
