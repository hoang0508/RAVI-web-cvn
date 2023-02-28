import React, { useEffect } from "react";
import BlogBanner from "../../assets/images/blog-banner.png";
import Blogdetailsimage from "../../assets/images/blog-details-img.png";
import Blogbaner from "./parts/banner/Blogbaner";
import "./BlogDetails.scss";
import { Heading } from "../../components/common/heading";
import { Link } from "react-router-dom";
import { IconFacebook } from "../../components/icons";
import { RegisterMail } from "../../components/register-mail";
import BlogList from "./BlogList";

const dataBlog = [
  {
    id: 1,
    title: "Shinrin-yoku: Nghệ thuật chữa lành của tắm rừng",
    date: "03.10.2022",
  },
  {
    id: 2,
    title: "Shinrin-yoku: Nghệ thuật chữa lành của tắm rừng",
    date: "03.10.2022",
  },
  {
    id: 3,
    title: "Shinrin-yoku: Nghệ thuật chữa lành của tắm rừng",
    date: "03.10.2022",
  },
];

const BlogDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="blog-details">
      <Blogbaner
        bannerImage={BlogBanner}
        gradientBG={`linear-gradient(0deg, rgba(37, 37, 37, 0.2), rgba(37, 37, 37, 0.2)),`}
        height="546px"
        className="background blog-details--banner"
      >
        <div className="blog-details--banner-content">
          <Heading
            heading="Shinrin-yoku: Nghệ thuật chữa lành của tắm rừng"
            size="big"
          />
          <ul className="blog-details--banner-nav">
            <li>
              <Link to={"/"} className="blog-details--banner-nav-link">
                03.10.2022
              </Link>
            </li>
            <li>
              <Link to={"/"} className="blog-details--banner-nav-link">
                03.10.2022
              </Link>
            </li>
            <li>
              <Link to={"/"} className="blog-details--banner-nav-link">
                03.10.2022
              </Link>
            </li>
            <li>
              <Link to={"/"} className="blog-details--banner-nav-link">
                03.10.2022
              </Link>
            </li>
          </ul>
        </div>
      </Blogbaner>
      <div className="container blog-details--content">
        <div className="content-left">
          <span>Chia sẻ bài viết</span>
          <span>
            <IconFacebook />
          </span>
        </div>
        <div className="content-right">
          <div className="content-right--desc">
            <p className="content-right--desc-define">
              “Tắm rừng” được dịch sát nghĩa từ “Shinrin-yoku” là một cụm từ do
              chính phủ Nhật sáng tạo vào năm 1982 nhằm khuyến khích những cư
              dân thành thị đắm mình vào thiên nhiên. Dĩ nhiên là bạn không cần
              “nhảy vào bồn tắm” mà là bạn đang “phơi mình” giữa thiên nhiên,
              giữa rừng xanh, chậm lại và tận hưởng vẻ đẹp tuyệt vời của thiên
              nhiên.
            </p>
            <p className="content-right--desc-location">
              Tại Nhật, Shinrin-yoku đang đóng một vai trò quan trọng như một
              dạng trị liệu phòng và chữa bệnh. Shinrin-yoku đang dần trở thành
              một dạng “yoga” mới tại các nước phương Tây, với việc những chuyến
              đi trị liệu có hướng dẫn hiện trở nên phổ biến hơn. Đây cũng là
              một điểm khác biệt, một nét chấm phá mới trong cách làm nghỉ dưỡng
              xanh của Ravi. Đến với các khu nghỉ dưỡng của Ravi, bạn có thể tự
              mình thực hành Shinrin-yoku với bầu không khí của rừng xanh bằng
              tất cả các giác quan.
            </p>
          </div>
          <div className="content-right--topic">
            <Heading
              heading="Đánh thức 5 giác quan để 'tắm rừng'"
              size="normal"
            />
            <ul className="topic-list">
              <li>
                Nhìn ngắm cây, nhìn những loại cây nhỏ mọc dưới gốc cây, nấm,
                rêu. Ngắm toàn bộ thân cây, cành cây. Chú ý màu, hình dáng và
                cách cấu tạo.
              </li>
              <li>
                Nghe những âm thanh xào xạc của lá, tiếng chim hót hay tiếng
                nước chảy. Hãy lắng nghe những âm thanh tinh tế nhất.
              </li>
              <li>
                Cảm nhận mặt đất dưới chân bạn, cảm nhận sức mạnh của thân cây,
                sự mềm mại của lá, hay độ sắc nhọn của quả thông.
              </li>
              <li>
                Ngửi không khí trong lành và mùi của cây xanh. Hãy đến gần và
                ngửi mùi của hoa.
              </li>
              <li>
                Nếm mùi của lá thông kim hay loại lá nào mà bạn xác định có thể
                nếm được.
              </li>
            </ul>
          </div>
          <div className="content-right--topic">
            <Heading heading="Ion âm - Vitamin của không khí" size="normal" />
            <ul className="topic-list">
              <li>
                Nhìn ngắm cây, nhìn những loại cây nhỏ mọc dưới gốc cây, nấm,
                rêu. Ngắm toàn bộ thân cây, cành cây. Chú ý màu, hình dáng và
                cách cấu tạo.
              </li>
              <li>
                Nghe những âm thanh xào xạc của lá, tiếng chim hót hay tiếng
                nước chảy. Hãy lắng nghe những âm thanh tinh tế nhất.
              </li>
              <li>
                Cảm nhận mặt đất dưới chân bạn, cảm nhận sức mạnh của thân cây,
                sự mềm mại của lá, hay độ sắc nhọn của quả thông.
              </li>
              <li>
                Ngửi không khí trong lành và mùi của cây xanh. Hãy đến gần và
                ngửi mùi của hoa.
              </li>
              <li>
                Nếm mùi của lá thông kim hay loại lá nào mà bạn xác định có thể
                nếm được.
              </li>
            </ul>
          </div>
          <div className="content-right--topic">
            <Heading heading="Giúp giảm stress" size="normal" />
            <p className="topic-text">
              Tắm rừng có ảnh hưởng tích cực với nhiều vấn đề của stress, giúp
              giảm huyết áp, sự lo âu và hoóc môn stress. Khi cảm nhận sự thư
              giãn, chúng ta sẽ kích hoạt hệ thống thần kinh đối giao cảm. Chúng
              ta “tắt” những phần của não liên quan đến các chức năng như tổ
              chức, lập kế hoạch và giải quyết vấn đề, đồng thời “mở” những phần
              của não liên quan đến hạnh phúc và sự cảm thông.
            </p>
            <div className="topic-image">
              <img src={Blogdetailsimage} alt="" />
            </div>
          </div>
          <div className="content-right--topic">
            <Heading heading="Giúp giảm stress" size="normal" />
            <p className="topic-text">
              Tắm rừng có ảnh hưởng tích cực với nhiều vấn đề của stress, giúp
              giảm huyết áp, sự lo âu và hoóc môn stress. Khi cảm nhận sự thư
              giãn, chúng ta sẽ kích hoạt hệ thống thần kinh đối giao cảm. Chúng
              ta “tắt” những phần của não liên quan đến các chức năng như tổ
              chức, lập kế hoạch và giải quyết vấn đề, đồng thời “mở” những phần
              của não liên quan đến hạnh phúc và sự cảm thông.
            </p>
            <div className="topic-image">
              <img src={Blogdetailsimage} alt="" />
            </div>
          </div>
          <div className="content-right--topic">
            <Heading heading="Giúp giảm stress" size="normal" />
            <p className="topic-text">
              Tắm rừng có ảnh hưởng tích cực với nhiều vấn đề của stress, giúp
              giảm huyết áp, sự lo âu và hoóc môn stress. Khi cảm nhận sự thư
              giãn, chúng ta sẽ kích hoạt hệ thống thần kinh đối giao cảm. Chúng
              ta “tắt” những phần của não liên quan đến các chức năng như tổ
              chức, lập kế hoạch và giải quyết vấn đề, đồng thời “mở” những phần
              của não liên quan đến hạnh phúc và sự cảm thông.
            </p>
            <div className="topic-image">
              <img src={Blogdetailsimage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="blog-details--register">
        <RegisterMail />
      </div>
      <div className="container">
        <BlogList heading="Tin tức tiếp theo" dataBlog={dataBlog} />
      </div>
    </div>
  );
};

export default BlogDetails;
