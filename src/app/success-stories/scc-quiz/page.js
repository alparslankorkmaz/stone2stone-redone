"use client";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function page() {
  return (
    <>
      <div className="bg-[url('/images/stories/page/13.jpg')] bg-cover bg-center bg-no-repeat text-white text-center p-20 lg:p-52">
        <h1 className="text-2xl lg:text-5xl font-bold font-playfair mb-4">
          SCC Quiz
        </h1>
        <p className="text-xs lg:text-base font-montserrat font-light">
          A fully interactive, user controlled online quiz based on a series of
          lifestyle questions to match the user with the Philips screen best
          suited to them.{" "}
        </p>
      </div>
      {/* HERO */}
      <div className="grid grid-cols-12 py-10 lg:p-16 gap-6 justify-end relative">
        <div className="lg:p-16 col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold lg:text-xl">
              The Challenge
            </h3>
            <p className="font-montserrat text-xs md:text-sm lg:text-base mt-3">
              To create a unique and engaging format with which to help users
              decide on the best Philips screen for them.{" "}
            </p>
          </div>
        </div>

        <div className="lg:p-16 col-span-6 bg-tab-dark-gray rounded-lg text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold lg:text-xl">The Target</h3>
            <p className="font-montserrat text-xs md:text-sm lg:text-base mt-3">
              Users from a wide array of lifestyles and business environments
              looking for a Philips monitor that works specifically for them.{" "}
            </p>
          </div>
        </div>
        {/* MIDDLE */}
        <div className="z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-24 lg:w-72">
          <img src="/images/stories/monitors/13.webp" alt="monitor" />
        </div>
        <div className="lg:p-16 col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold lg:text-xl">The Solution</h3>
            <p className="font-montserrat text-xs md:text-sm lg:text-base mt-3">
              An interactive series of questions that allowed the user to
              specify their individual needs in order to narrow down the
              results, eventually being suggested the monitor suited to them.{" "}
            </p>
          </div>
        </div>
        <div className="lg:p-16 col-span-6 bg-tab-dark-gray rounded-lg text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold lg:text-xl">The Outcome</h3>
            <p className="font-montserrat text-xs md:text-sm lg:text-base mt-3">
              A user controlled interactive quiz that provided an attractive,
              clear service that through specific questions would match the user
              with the Philips monitor best suited for their needs.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* RESULTS */}
      <div className="lg:px-16 pb-10">
        <div className="bg-tab-dark-gray rounded-lg flex items-center gap-8 lg:gap-32 p-5 lg:p-10">
          <h4 className="font-playfair font-bold lg:text-xl">Results</h4>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/journey_icon.png"
              className="w-4 lg:w-7"
              alt="journey icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              296 Possible Journeys
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/monitor_icon.png"
              className="w-4 lg:w-7"
              alt="monitor icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              34 Suggested Monitors
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/cursor_icon.png"
              className="w-3 lg:w-5"
              alt="cursor icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              2436 Click-Throughs
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
