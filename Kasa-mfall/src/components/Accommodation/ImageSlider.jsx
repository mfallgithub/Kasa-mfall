import React from "react";
import { useState } from "react";
import styled from "styled-components";

//Style
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";
const NumOfSlide = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: center;
  position: absolute;
  left: 48.95%;
  right: 49.11%;
  top: 86.19%;
  bottom: 6.01%;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 142.6%;
  color: #ffffff;
`;
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const goToNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const goToPrevious = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      {slides.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "slide slider__active-picture"
                : "slide slider__inactive-picture"
            }
          >
            {index === current && (
              <img src={picture} alt="" className="slider__picture" />
            )}
          </div>
        );
      })}
      {/* get button if there are more thant one picture */}
      {length > 1 ? (
        <>
          <div className="slider__previous" onClick={goToPrevious}>
            <img src={arrowLeft} alt="" className="slider__previous-icon" />
          </div>
          <div className="slider__next" onClick={goToNext}>
            <img src={arrowRight} alt="" className="slider__next-icon" />
          </div>
        </>
      ) : null}
      <NumOfSlide>
        {current + 1}/{length}
      </NumOfSlide>
    </div>
  );
};

export default ImageSlider;
