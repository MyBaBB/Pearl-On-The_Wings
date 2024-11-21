import React from "react";
import "./App.css";
import Copyright from "./components/Copyright";
import EnterWorld from "./components/EnterWorld";
import Pearls200 from "./components/Pearls200";
import MainParagraph from "./components/MainParagraph";
// import Gorilla from "./components/GorillaFolder/Gorilla";
import { useState,useRef, useEffect } from "react";
 
import { gsap } from "gsap";
 
const App = () => {
  let logoItem = useRef('null');
  useEffect(() => {
    console.log(logoItem);
    gsap.from(
      logoItem,
    
       { scale: 0,
        ease: "bounce", 
        duration: 2.2,
        y: 100,
        opacity: 1,
       });
   
  }, []);
   console.log(logoItem);


  let paragraphBlock = useRef('null');
  useEffect(() => {
  
    gsap.from(
      paragraphBlock,
    
       { 
        delay:1.5,
        ease: "power3.out", 
        duration: 0.8,
        x: 800,
        opacity: 0,
       });
   
  }, []);
   console.log(paragraphBlock);


  let fancyWorld= useRef('null');
  useEffect(() => {
  
    gsap.from(
      fancyWorld,
    
       { 
        delay:1.5,
        ease: "power3.out", 
        duration: 2,
        y: 20,
        opacity: 1,
        elastic: 0.5,
   
      
       });
   
  }, []);
   console.log(fancyWorld);

  return (
    <div className="mainWrapper relative flex justify-center  border-2 border-solid border-black overflow-hidden  ">
       {/* <div className="fixed z-10 top-0 right-2 " >< Gorilla /></div>  */}
      <main className="relative flex justify-center border-4  border-solid border-[#203f53] m-auto overflow-hidden  ">
        <header className="sr-only">
          <h1>Pearls on the Wings</h1>
        </header>

      
        <section className=" ">
          <h2 className="sr-only">Carnel Baker Counseling</h2>
        </section>
        
        <div className="outerWrapper ">
          <div className="bgImageWrapper     ">
            <div className="opacityLayer relative flex w-screen h-screen bg-white/60">
              <div className="relative flex flex-col items-center justify-around h-full ">


              {/* ref={el => (logoItem = el)}  */}
                <div ref={el => (logoItem = el)} className="crystalAnimation ">
                  <Pearls200/>
                </div>

                {/* ref={el => (fancyWorld = el)} */}
                <div  ref={el => (fancyWorld = el)}  className="fancyWorld ">
                  <EnterWorld />
                </div>


                {/* ref={el => (paragraphBlock = el)} */}
                <div ref={el => (paragraphBlock = el)}     className="paragraphBlock ">
                  <MainParagraph />
                  
                </div>
             
              </div>
              
            </div>

            <Copyright /> 
          </div>
        </div>
      </main>
  
    </div>
  );
};

 

export default App;
