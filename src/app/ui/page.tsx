import React from "react";

export default function UiPage() {
  const bgImgStyle = {
    backgroundImage: `url(/bg.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="bg-[#80FFFF] min-h-screen flex items-center justify-center">
      <div className="lg:w-[80%] w-[95%] bg-white h-[100%] pb-14 relative">
        <div className="flex flex-row  flex-wrap justify-between">
          <div className=" h-full  ">
            <img
              src="/bg.png"
              alt="logo"
              className="h-full absolute left-0 top-0 lg:w-[70%] w-[100%]"
            />
            <div className="flex flex-col z-10 absolute pl-[2rem] pt-[2.1rem] ">
              <img
                src="/logo.png"
                alt="logo"
                className="h-[100px] w-[100px] "
              />
              <h1 className="text-[#FFF] font-pairPlay lg:text-[40px] normal font-[700] leading-normal text-[20px] ">
                <p>An Investment in Knowledge</p> pays the best interest
              </h1>
              <h1
                className="text-[#FFF] font-pairPlay lg:text-[24px]
 normal
font-[400] leading-normal

text-[12px]
"
              >
                <p>It is a long established fact that a reader</p>
                <p>will be distracted by the readable content</p>
                of a page when.
              </h1>

              <button className="lg:w-[180px] lg:h-[76px] w-[30%] h-[30%] rounded-[20px] border-[#FFF] bg-[#FFF]  lg:mt-[40px] mt-[1rem]">
                <p
                  className="text-[#CD1509] font-pairPlay
text-[24px]
  normal
  font-[600] leading-normal"
                >
                  Learn More
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center h-full pt-[2.1rem]">
            <div className="flex flex-row  justify-evenly text-black  gap-14 ">
              <div>
                <h1
                  className="text-[#1b1a1a] font-pairPlay
lg:text-[24px]
 normal
font-[400] leading-normal

text-[12px]
"
                >
                  Home
                </h1>
              </div>
              <div
                className="text-[#181717] font-pairPlay
lg:text-[24px]
 normal
font-[400] leading-normal

text-[12px]
"
              >
                About
              </div>

              <div
                className="text-[#141313] font-pairPlay
lg:text-[24px]
 normal
font-[400] leading-normal

text-[12px]
"
              >
                Services
              </div>
            </div>
            <img src="/group.png" className="pt-[50px]" />
          </div>
        </div>

        {/* Your content goes here */}
      </div>
    </div>
  );
}
