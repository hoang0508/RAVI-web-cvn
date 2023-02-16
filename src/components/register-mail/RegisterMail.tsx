import React from "react";
import { Button } from "../button";
import "./RegisterMail.scss";

const RegisterMail = () => {
  return (
    <div className="register-mail">
      <div className="register-mail--content">
        <h3 className="content-tilte">
          Nhận ưu đãi độc quyền, câu chuyện truyền cảm hứng và cập nhật quy định
          du lịch.
        </h3>
        <p className="content-desc">
          Hãy trở thành người đăng ký và nhận các mẹo hay về lập kế hoạch du
          lịch được gửi đến hộp thư đến của bạn!
        </p>
      </div>
      <div className="register-mail--form">
        <div className="form-submit">
          <input
            type="text"
            placeholder="Địa chỉ email của bạn"
            className="input-email"
          />
          <Button className="btn-email" kind="xl" type="button">
            đăng ký
          </Button>
        </div>
        <p className="form-desc">
          Bằng cách đăng ký, bạn đồng ý với Điều khoản dịch vụ và Chính sách
          quyền riêng tư của chúng tôi. Bạn sẽ nhận được ưu đãi từ RAVI và đồng
          ý rằng chúng tôi có thể chia sẻ địa chỉ email đã băm của bạn với các
          bên thứ ba nhằm mục đích điều chỉnh quảng cáo phù hợp hơn với nhu cầu
          của bạn.
        </p>
      </div>
    </div>
  );
};

export default RegisterMail;
