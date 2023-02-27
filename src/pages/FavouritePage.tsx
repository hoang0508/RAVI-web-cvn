import React from "react";
import { Button } from "../components/button";
import CardFavouriteItem from "../components/cards/card-favourite/CardFavouriteItem";
import { IconHeartV3 } from "../components/icons";
import "../modules/favourite/GlobalFavourite.scss";

const FavouritePage = () => {
  return (
    <div className="favourite">
      <div className="favourite-btn">
        <Button type="button" kind="xl">
          <span>Thêm vào danh sách yêu thích</span>
          <span>
            <IconHeartV3 />
          </span>
        </Button>
      </div>
      <div className="favourite-list">
        <CardFavouriteItem />
        <CardFavouriteItem />
        <CardFavouriteItem />
        <CardFavouriteItem />
      </div>
    </div>
  );
};

export default FavouritePage;
