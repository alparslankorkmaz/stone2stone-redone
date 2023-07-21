"use client";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function page() {
  return (
    <>
      <div className="bg-[url('/images/stories/page/19.jpg')] bg-cover bg-center bg-no-repeat text-white text-center p-20 lg:p-52">
        <h1 className="text-2xl lg:text-5xl font-bold font-playfair mb-4">
          Forescout Infosecurity 2023 Video
        </h1>
        <p className="text-xs lg:text-base font-montserrat font-light">
          Stone2Stone collaborated with Forescout to develop engaging social
          media video content that highlighted their active participation in the
          Infosecurity event held at the ExCel in London.{" "}
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
              To effectively showcase Forescout, its comprehensive services,
              dedicated employees, and active participation in the Infosecurity
              event at the ExCel in London.{" "}
            </p>
          </div>
        </div>

        <div className="lg:p-16 col-span-6 bg-tab-dark-gray rounded-lg text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold lg:text-xl">The Target</h3>
            <p className="font-montserrat text-xs md:text-sm lg:text-base mt-3">
              Both existing clients and new potential targets who demonstrated
              interest in Forescout's services, employees, and participation at
              the Infosecurity event in London.{" "}
            </p>
          </div>
        </div>
        {/* MIDDLE */}
        <div className="z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-32 lg:w-96">
          <div className="relative">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              className="block lg:hidden"
            >
              <img src="/images/stories/monitors/19.webp" alt="monitor" />
            </a>
            <img
              src="/images/stories/monitors/empty_monitor.png"
              alt="monitor"
              className="hidden lg:block"
            />
            <div className="hidden lg:block absolute top-3 left-1/2 -translate-x-1/2">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                width={360}
                height={205}
                controls
                light
              />
            </div>
          </div>
        </div>
        <div className="lg:p-16 col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold lg:text-xl">The Solution</h3>
            <p className="font-montserrat text-xs md:text-sm lg:text-base mt-3">
              Forescout capitalized on Rik Ferguson, renowned as the Cyber
              Rockstar, interviewing attendees. This engaging content was shared
              on LinkedIn, allowing Forescout to effectively demonstrate their
              expertise and create visibility among their target audience.{" "}
            </p>
          </div>
        </div>
        <div className="lg:p-16 col-span-6 bg-tab-dark-gray rounded-lg text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold lg:text-xl">The Outcome</h3>
            <p className="font-montserrat text-xs md:text-sm lg:text-base mt-3">
              A collection of 3 videos was produced to showcase the Forescout
              booth, presence and demonstrating the range of services offered by
              the company.{" "}
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
              src="/images/stories/icons/video_icon.png"
              className="w-4 lg:w-7"
              alt="video icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              10,328 Combined Views
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/cursor_icon.png"
              className="w-3 lg:w-5"
              alt="cursor icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              604 Combined Click-Throughs
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/share_icon.png"
              className="w-4 lg:w-7"
              alt="share icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              324 Combined Shares
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
