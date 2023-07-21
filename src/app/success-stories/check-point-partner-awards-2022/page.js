"use client";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function page() {
  return (
    <>
      <div className="bg-[url('/images/stories/page/12.jpg')] bg-cover bg-center bg-no-repeat text-white text-center p-20 lg:p-52">
        <h1 className="text-2xl lg:text-5xl font-bold font-playfair mb-4">
          Check Point Partner Awards 2022
        </h1>
        <p className="text-xs lg:text-base font-montserrat font-light">
          An action packed in-person awards gala celebrating Check Point’s
          partners, complete with special guest star Ollie Ollerton, three
          course meal and physical awards.{" "}
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
              To organise and host the Check Point Partner Awards ceremony in a
              physical setting, following previous events held virtually. It had
              to be more engaging and virtually captivating than its online
              predecessor.{" "}
            </p>
          </div>
        </div>

        <div className="lg:p-16 col-span-6 bg-tab-dark-gray rounded-lg text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold lg:text-xl">The Target</h3>
            <p className="font-montserrat text-xs md:text-sm lg:text-base mt-3">
              Check Point’s partners and employees who were honoured with
              awards, as well as potential leads both attending and not.{" "}
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
              <img src="/images/stories/monitors/12.webp" alt="monitor" />
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
              Stone2Stone successfully mounted an engaging gala evening,
              bringing together all the crucial parts of a high-class awards
              event, including, but not limited to, background and presentation
              design, photography, videography, production of awards, culinary
              planning and scheduling.{" "}
            </p>
          </div>
        </div>
        <div className="lg:p-16 col-span-6 bg-tab-dark-gray rounded-lg text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold lg:text-xl">The Outcome</h3>
            <p className="font-montserrat text-xs md:text-sm lg:text-base mt-3">
              A hugely successful first large-scale event post covid, with over
              a hundred attendees and incredible social media engagement post
              event.{" "}
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
              src="/images/stories/icons/person_icon.png"
              className="w-3 lg:w-6"
              alt="person icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              130 Attendees
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/view_icon.png"
              className="w-4 lg:w-7"
              alt="view icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              37,694 Impressions
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/cursor_icon.png"
              className="w-3 lg:w-5"
              alt="cursor icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              15,731 Social Clicks
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
