"use client";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function page() {
  return (
    <>
      <div className="bg-[url('/images/stories/page/3.jpg')] bg-cover bg-center bg-no-repeat text-white text-center p-20 lg:p-52">
        <h1 className="text-2xl lg:text-5xl font-bold font-playfair mb-4">
          CDW's Grounds for Security
        </h1>
        <p className="text-xs lg:text-base font-montserrat font-light">
          A 7 week coffee break series on cyber security for CDW. Comprised of a
          dedicated portal filled with white papers, videos and Q&As.{" "}
        </p>
      </div>
      {/* HERO */}
      <div className="grid grid-cols-12 py-10 lg:p-16 lg:gap-6 justify-end relative">
        <div className="m-5 lg:m-0 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Challenge</h3>
            <p className="font-montserrat mt-3">
              To give customers a thorough understanding of all the secure cloud
              solutions CDW offers in a unique, engaging way, from the experts
              themselves.{" "}
            </p>
          </div>
        </div>

        <div className="m-5 lg:m-0 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg lg:text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Target</h3>
            <p className="font-montserrat mt-3">
              Potential users of CDW cyber security solutions, along with those
              that are already customers but would like to find out more about
              all they can offer.{" "}
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
            <div className="player-wrapper">
              <ReactPlayer
                className="absolute top-3 left-4"
                url="https://www.youtube.com/playlist?list=PLXT5tViSP4xBsF1kPF-A1lVRFkiDaB3JJ"
                width="92%"
                height="65%"
              />
            </div>
          </div>
        </div>
        <div className="m-5 lg:m-0 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Solution</h3>
            <p className="font-montserrat mt-3">
              The creation of a series of virtual coffee breaks over 7 weeks,
              each one led by a cloud security expert. Each watched video
              resulted in a stamp, with 5 stamps leading to a coffee hamper and
              invitation to a virtual coffee experience (complete with an expert
              barista!).{" "}
            </p>
          </div>
        </div>
        <div className="m-5 lg:m-0 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg lg:text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Outcome</h3>
            <p className="font-montserrat mt-3">
              An influx of registrations from net new potential customers, along
              with established ones too.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* RESULTS */}
      <div className="lg:px-16 pb-10">
        <div className="bg-tab-dark-gray rounded-lg flex items-center gap-8 lg:gap-28 p-5 lg:p-10">
          <h4 className="font-playfair font-bold text-xl">Results</h4>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/video_icon.png"
              className="w-4 lg:w-7"
              alt="video icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              7 Weekly Video Sessions
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/form_icon.png"
              className="w-4 lg:w-7"
              alt="form icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              300 Registrations
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/person_icon.png"
              className="w-4 lg:w-7"
              alt="person icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              28 Dedicated Leads
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
