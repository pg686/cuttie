import React from "react";
const Slider = ({ memesArr }) => {
  return (
    <div className="sliderWrapper">
      <div className="slider">
        <div className={"sliderGroup"}>
          {memesArr.map((meme) => (
            <div className="imageGroup">
              <span>{meme}</span>{" "}
            </div>
          ))}
        </div>
        <div className={"sliderGroup"}>
          {memesArr.map((meme) => (
            <div className="imageGroup">
              <span>{meme}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    // wrapper - sliderWrapper
    //marquee - slider
    //marqueeGroup - sliderGroup
  );
};

export default Slider;
