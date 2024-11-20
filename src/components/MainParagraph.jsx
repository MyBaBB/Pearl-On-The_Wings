import React from "react";
 

const MainParagraph = () => {
  return (
    <div>
      <div className="mainParagraph relative flex justify-center m-auto w-screen px-[1rem] sm:px-[8rem] lg:px-[10rem] 
                       font-LibreBaskerville-Bold
                       text-sm xxs:text-[.9rem] xs:text-[1.25rem] sm:text-[1.25rem] md:text-3xl lg:text-4xl
                       overflow-hidden
                      bg-[#e7c282]/50   

                        ">
        <p className="m-auto py-2  ">
          <span className="fancyParagraph block text-center">
            Welcome to the vibrant world of Tom Pergola!
          </span>
          <span className="fancyParagraph block text-center  ">
 
            As a renowned artist, I create dynamic and captivating
            &apos;<span><em>Assemblage Plastique</em></span>&apos; sculptures that immortalize the
            everyday icons of our culture.
          </span>
        </p>
      </div>
    </div>
  );
};

export default MainParagraph;
