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
font-playfairDisplay
text-[40px]
 normal
font-[700] leading-norma"
              >
                <p>An Investment in Knowledge</p> pays the best interest
              </h1>
              <h1>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when.
              </h1>
            </div>
          </div>
        </div>

        {/* Your content goes here */}
      </div>
    </div>
  );
}
