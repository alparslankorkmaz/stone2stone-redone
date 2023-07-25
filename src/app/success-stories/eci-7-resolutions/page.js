"use client";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function page() {
  return (
    <>
      <div className="bg-[url('/images/stories/page/1.jpg')] bg-cover bg-center bg-no-repeat text-white text-center p-20 lg:p-52">
        <h1 className="text-2xl lg:text-5xl font-bold font-playfair mb-4">
          ECI 7 Resolutions
        </h1>
        <p className="text-xs lg:text-base font-montserrat font-light">
          A series of videos and corresponding ‘resolutions’ informing viewers
          about how ECI’s services can transform their business in a visually
          stimulating environment. New Year, better security!
        </p>
      </div>
      {/* HERO */}
      <div className="grid grid-cols-12 py-10 lg:p-16 md:gap-6 justify-end relative">
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Challenge</h3>
            <p className="font-montserrat mt-3">
              To create an engaging way to encourage new users to utilise ECI’s
              services going into 2022.{" "}
            </p>
          </div>
        </div>

        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg lg:text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Target</h3>
            <p className="font-montserrat mt-3">
              Potential customers whose companies would benefit from ECI’s
              managed IT, cybersecurity and transformation services.{" "}
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
            <div className="absolute w-full h-full top-0">
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player absolute top-3 left-4"
                  url="https://www.youtube.com/playlist?list=PLXT5tViSP4xCUk_JmSLjIUErifBMsWo7j"
                  width="92%"
                  height="65%"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Solution</h3>
            <p className="font-montserrat mt-3">
              The creation of 7 ‘resolutions’ each demonstrating a benefit of
              ECI’s services, with a corresponding video hosted by ECI experts
              engaging in conversation.{" "}
            </p>
          </div>
        </div>
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg lg:text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Outcome</h3>
            <p className="font-montserrat mt-3">
              A visually engaging series of interesting tech ‘resolutions’
              backed up by videos hosted by experts from ECI, discussing why
              each resolution is so beneficial to customers – and why they don’t
              need to make their own resolutions this year!{" "}
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
              src="/images/stories/icons/person_icon.png"
              className="w-4 lg:w-7"
              alt="person icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              292 Unique Visitors
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/video_icon.png"
              className="w-6 lg:w-11"
              alt="video icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              481 Video Views
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
