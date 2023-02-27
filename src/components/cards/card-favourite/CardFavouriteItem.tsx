import CardFavoriteContent from "./CardFavoriteContent";
import "./CardFavoriteItem.scss";
import CardFovoriteImage from "./CardFovoriteImage";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

const CardFavouriteItem = () => {
  return (
    <div className="card-fouvourite card-item--hover">
      <Swiper
        // slidesPerView={2}
        slidesPerView={1}
        // spaceBetween={50}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        // className="mySwiper"
      >
        <SwiperSlide>
          <CardFovoriteImage />
        </SwiperSlide>
        <SwiperSlide>
          <CardFovoriteImage />
        </SwiperSlide>
        <SwiperSlide>
          <CardFovoriteImage />
        </SwiperSlide>
        <SwiperSlide>
          <CardFovoriteImage />
        </SwiperSlide>
        <SwiperSlide>
          <CardFovoriteImage />
        </SwiperSlide>
      </Swiper>
      <CardFavoriteContent />
    </div>
  );
};

export default CardFavouriteItem;
