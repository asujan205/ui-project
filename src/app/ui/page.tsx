import React from "react";

export default function UiPage() {
  const bgImgStyle = {
    backgroundImage: `url(/bg.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="bg-[#80FFFF] min-h-screen flex items-center justify-center">
      <div className="w-[1240px] bg-white h-[638px] relative">
        <div className="flex flex-row justify-between">
          <div className=" h-full  ">
            <img
              src="/bg.png"
              alt="logo"
              className="h-full absolute left-0 top-0"
            />
            <div className="flex flex-col z-10 absolute pl-[2rem] pt-[2.1rem] ">
              <img
                src="/logo.png"
                alt="logo"
                className="h-[100px] w-[100px] "
              />
              <h1
                className="text-[#FFF]
font-pairPlay
text-[40px]
 normal
font-[700] leading-normal"
              >
                <p>An Investment in Knowledge</p> pays the best interest
              </h1>
              <h1
                className="text-[#FFF] font-pairPlay
text-[24px]
 normal
font-[400] leading-normal"
              >
                <p>It is a long established fact that a reader</p>
                <p>will be distracted by the readable content</p>
                of a page when.
              </h1>

              <button className=" w-[180px] h-[76px] rounded-[20px] border-[#FFF] bg-[#FFF]  mt-[61px]">
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
            <div className="flex flex-row  justify-evenly text-black  ">
              <div>
                <h1>Home</h1>
              </div>
              <div>About</div>

              <div>Services</div>
            </div>
            <img src="/group.png" className="pt-[50px]" />
          </div>
        </div>

        {/* Your content goes here */}
      </div>
    </div>
  );
}
