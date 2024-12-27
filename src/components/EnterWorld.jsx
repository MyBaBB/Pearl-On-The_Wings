import React from "react";
 

const EnterWorld = () => {
  return (
    <div>
      <div className="EnterWorld ">

      <a
            href="https://pearlsonthewings.com"
            onClick={(e) => {
              // e.target refers to the element that triggered the event, in this case the <a> element
              // We set its opacity to 0 to create a fade-out effect when the link is clicked
              const pleaseWait = document.createElement("p");
              pleaseWait.textContent = "Please wait while loading...";
              pleaseWait.className = "pleaseWait absolute  top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg  ";
              document.body.appendChild(pleaseWait);
              setTimeout(() => pleaseWait.remove(), 10000);
            }}
          >
        <div
          className="MomsWorld block  z-12 font-Aclonica-Regular w-fit mx-auto  
                     px-5 py-2 border-[.5px] border-solid border-[#150806] rounded-full     
                     hover:shadow-[0_0_10px_rgb(0,0,0,0.4)] hover:scale-[.90]
                     transition-all duration-200 ease-in-out
                     mt-[-6rem] xxs:mt-[-4rem] xs:mt-[-3rem] xxl:mt-0"
          onClick={(e) => {
            e.currentTarget.style.opacity = 0;
          }}
        >
          
            <span className="text-base md:text-2xl">Visit Pearls on the Wings</span>
         
        </div>
        </a>
      </div>
    </div>
  );
};

export default EnterWorld;
