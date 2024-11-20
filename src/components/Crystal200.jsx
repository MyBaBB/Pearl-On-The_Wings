import React from "react";
import Crystal200 from "../assets/Crystal200.jpg";
 

function TrumpsArt() {
   

  return (
    <div>
      {" "}
      <div className="Crystals200Wrapper   relative flex justify-center custom-landscape: mt-[12rem]
                      xxs:mt-[8rem] xs:mt-[5rem] sm:mt-0
                      scale-1 xxl:scale-150">
        <div className=" Crystals200    ">
          <img
            src={Crystal200}
            alt="Image of Beloved Crystal"
            className="Crystal200Img"
          />
        </div>
      </div>
    </div>
  );
};

export default TrumpsArt;
