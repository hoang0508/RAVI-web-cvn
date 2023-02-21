import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Navigation, Thumbs, Keyboard, Pagination } from "swiper";
import DetailsThumbImg from "../../../../assets/images/details-thumb.png";
import ThumbChild1 from "../../../../assets/images/thumb-child1.png";
import ThumbChild2 from "../../../../assets/images/thumb-child2.png";
import "./DetailsThumb.scss";
import DetailsThumbParent from "./DetailsThumbParent";
import DetailsThumbChild from "./DetailsThumbChild";

const dataThumbParent = [
  {
    id: 1,
    thumbImage: DetailsThumbImg,
  },
  {
    id: 2,
    thumbImage: ThumbChild1,
  },
  {
    id: 3,
    thumbImage: ThumbChild2,
  },
];

const dataThumbChild = [
  {
    id: 1,
    thumbImage: DetailsThumbImg,
  },
  {
    id: 2,
    thumbImage: ThumbChild1,
  },
  {
    id: 3,
    thumbImage: ThumbChild2,
  },
  {
    id: 4,
    thumbImage: ThumbChild2,
  },
  {
    id: 5,
    thumbImage: ThumbChild2,
  },
  {
    id: 6,
    thumbImage: ThumbChild2,
  },
  {
    id: 7,
    thumbImage: ThumbChild2,
  },
  {
    id: 8,
    thumbImage: ThumbChild2,
  },
  {
    id: 9,
    thumbImage: ThumbChild2,
  },
  {
    id: 10,
    thumbImage: ThumbChild2,
  },
  {
    id: 11,
    thumbImage: ThumbChild2,
  },
  {
    id: 12,
    thumbImage: ThumbChild2,
  },
  {
    id: 13,
    thumbImage: ThumbChild2,
  },
  {
    id: 14,
    thumbImage: ThumbChild2,
  },
];

const DetailsThumb = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <div className="details-thumb--container">
      <div className="card-item--hover thumb-parent">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[
            FreeMode,
            Navigation,
            Thumbs,
            Keyboard,
            Pagination,
            Navigation,
          ]}
        >
          {dataThumbParent &&
            dataThumbParent.map((item) => (
              <SwiperSlide key={item.id}>
                <DetailsThumbParent imageThumb={item.thumbImage} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="details-thumb--child-main">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView="auto"
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {dataThumbChild &&
            dataThumbChild.map((item) => (
              <SwiperSlide key={item.id}>
                <DetailsThumbChild imageThumbChild={item.thumbImage} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DetailsThumb;
