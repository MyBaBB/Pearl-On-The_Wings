import React from "react";
import Pearls200 from "../assets/Pearls200.jpg";
import "./Pearls.css"

function TrumpsArt() {
     return (
    <div>
      {" "}
      <div className="pearls200Wrapper  relative flex justify-center custom-landscape: mt-[12rem]
                      xxs:mt-[8rem] xs:mt-[5rem] sm:mt-0
                      scale-1 xxl:scale-150">
          <div className="pearls200    ">
          <img
            src={Pearls200}
            alt="Image of Beloved Crystal"
            className="pearls200Img"
           
           />
        </div>
      </div>
    </div>
  );
};

export default TrumpsArt;
