import React from "react";

const Thumbnails = ({ image, title }) => {
  return (
    <div className="thumb">
      <img src={image} alt="" className="thumb__img" />
      <div className="thumb__overlay"></div>
      <h2 className="thumb__title_image">{title}</h2>
    </div>
  );
};

export default Thumbnails;
