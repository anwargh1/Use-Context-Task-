import React, { useContext } from "react";
import { getImageUrl } from "./Utils";
import { MyContext } from "./MyContext";
const PlaceImage = ({ place}) => {
  const imageSize = useContext(MyContext)
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
};

export default PlaceImage;
