"use client";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function page() {
  return (
    <>
      <div className="bg-[url('/images/stories/page/5.jpg')] bg-cover bg-center bg-no-repeat text-white text-center p-20 lg:p-52">
        <h1 className="text-2xl lg:text-5xl font-bold font-playfair mb-4">
          CDW and Dell Technologies
        </h1>
        <p className="text-xs lg:text-base font-montserrat font-light">
          An educational, long form promotional video explaining the support CDW
          and Dell Technologies can offer customers evolving into a hybrid
          working environment.{" "}
        </p>
      </div>
      {/* HERO */}
      <div className="grid grid-cols-12 py-10 lg:p-16 lg:gap-6 justify-end relative">
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Challenge</h3>
            <p className="font-montserrat mt-3">
              To inform both new and established customers about how CDW and
              Dell Technologies’ joint server solutions are designed to help
              them.{" "}
            </p>
          </div>
        </div>

        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg lg:text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Target</h3>
            <p className="font-montserrat mt-3">
              IT Managers That Need To Adapt Their Data Processing And Storage
              Systems To Match A Hybrid Working Environment.{" "}
            </p>
          </div>
        </div>
        {/* MONITOR */}
        <div className="p-5 lg:p-0 order-first lg:order-none col-span-12 md:col-span-7 md:col-start-3 lg:col-start-auto lg:z-10 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:absolute lg:w-96">
          <div className="relative">
            <img
              src="/images/stories/monitors/empty_monitor.png"
              alt="monitor"
            />
            <div className="absolute w-[93%] top-[.90rem] left-[.87rem]">
              <div className="aspect-video relative">
                <ReactPlayer
                  className="react-player"
                  url="https://youtu.be/_rnSbpIViXQ"
                  width="100%"
                  height="100%"
                  controls
                />
              </div>
            </div>
          </div>
        </div>
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Solution</h3>
            <p className="font-montserrat mt-3">
              Creation of an informative video hosted by leading experts from
              Dell Technologies outlining the benefits of their and CDW’s newly
              developed 15G PowerEdge Servers in a hybrid working environment.{" "}
            </p>
          </div>
        </div>
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg lg:text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Outcome</h3>
            <p className="font-montserrat mt-3">
              An engaging & conversational 7-minute video teaching IT Managers
              about the benefits of Dell and CDW’s servers for both remote and
              in office data processing and storage.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* RESULTS */}
      <div className="lg:px-16 pb-10">
        <div className="bg-tab-dark-gray rounded-lg flex items-center gap-8 lg:gap-32 p-5 lg:p-10">
          <h4 className="font-playfair font-bold text-xl">Results</h4>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/video_icon.png"
              className="w-4 lg:w-7"
              alt="video icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              6230 Video Views
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/cursor_icon.png"
              className="w-3 lg:w-5"
              alt="cursor icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              235 Click Throughs
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/share_icon.png"
              className="w-4 lg:w-7"
              alt="share icon"
            />
            <p className="font-montserrat text-xs lg:text-base">121 Shares</p>
          </div>
        </div>
      </div>
    </>
  );
}
