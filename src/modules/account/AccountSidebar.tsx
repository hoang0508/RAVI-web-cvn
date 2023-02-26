import React from "react";
import { NavLink } from "react-router-dom";
import {
  Icongift,
  IconHistorybook,
  IconUser,
  IconHeart,
} from "../../components/icons";
import IconStarV3 from "../../components/icons/IconStarV3";
import "./AccountSidebar.scss";

const sidebarLinks = [
  {
    id: 1,
    title: "Thông tin cá nhân",
    icon: <IconUser />,
    url: "/account-info",
  },
  {
    id: 2,
    title: "Lịch sự đặt phòng",
    icon: <IconHistorybook />,
    url: "/history-booking",
  },
  {
    id: 3,
    title: "Mã khuyến mãi",
    icon: <Icongift />,
    url: "/history-book",
  },
  {
    id: 4,
    title: "Yêu thích",
    icon: <IconHeart />,
    url: "/history-book",
  },
  {
    id: 5,
    title: "Đánh giá",
    icon: <IconStarV3 />,
    url: "/history-book",
  },
];

const AccountSidebar = () => {
  return (
    <div className="account-sidebar">
      <div className="account-sidebar--info">
        <span className="info-gmail">tmduca8@gmail.com</span>
        <span className="sidebar-logout">Đăng xuất</span>
      </div>
      <div className="account-sidebar--select">
        {sidebarLinks &&
          sidebarLinks.map((item) => (
            <NavLink
              to={item.url}
              key={item.id}
              className={({ isActive }) =>
                isActive
                  ? "account-sidebar--link-active account-sidebar--link"
                  : "account-sidebar--link"
              }
            >
              <span className="account-sidebar--link-icon">{item.icon}</span>
              <span className="account-sidebar--link-text">{item.title}</span>
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default AccountSidebar;
