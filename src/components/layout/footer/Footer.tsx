import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import { IconFacebook, IconIntagram, IconYouTube } from "../../icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-menu">
        <div className="footer-menu--list">
          <div className="footer-menu--col">
            <h3 className="col--title">Khám phá</h3>
            <ul className="col--item">
              <li>
                <Link to={"/"} className="col--link">
                  Khách sạn ở Việt Nam
                </Link>
              </li>
              <li>
                <Link to={"/"} className="col--link">
                  Tất cả các loại chỗ ở
                </Link>
              </li>
              <li>
                <Link to={"/"} className="col--link">
                  Cẩm nang du lịch
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-menu--col">
            <h3 className="col--title">Về Ravi.com</h3>
            <ul className="col--item">
              <li>
                <Link to={"/"} className="col--link">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link to={"/"} className="col--link">
                  Vì sao nên chọn Ravi.com?
                </Link>
              </li>
              <li>
                <Link to={"/"} className="col--link">
                  Tuyển dụng
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-menu--col">
            <h3 className="col--title">Chính sách</h3>
            <ul className="col--item">
              <li>
                <Link to={"/"} className="col--link">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link to={"/"} className="col--link">
                  Chính sách về Cookie
                </Link>
              </li>
              <li>
                <Link to={"/"} className="col--link">
                  Điều khoản sử dụng
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-menu--col">
            <h3 className="col--title">Trợ giúp</h3>
            <ul className="col--item">
              <li>
                <Link to={"/"} className="col--link">
                  Câu hỏi thường gặp
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-menu--social">
          <h3 className="col--title">Mạng xã hội</h3>
          <div className="social-list">
            <span className="social-item">
              <IconFacebook />
            </span>
            <span className="social-item">
              <IconYouTube />
            </span>
            <span className="social-item">
              <IconIntagram />
            </span>
          </div>
        </div>
      </div>
      <div className="footer-coppyright">
        <div className="footer-coppyright--logo">
          <img src={Logo} alt="" />
        </div>
        <p className="footer-coppyright--text">
          Copyright © RAVI 2022. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
