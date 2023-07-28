"use client";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function page() {
  return (
    <>
      <div className="bg-[url('/images/stories/page/9.jpg')] bg-cover bg-center bg-no-repeat text-white text-center p-20 lg:p-52">
        <h1 className="text-2xl lg:text-5xl font-bold font-playfair mb-4">
          ECI and Forcepoint Posters
        </h1>
        <p className="text-xs lg:text-base font-montserrat font-light">
          2 separate Highly engaging, bold campaigns made up of niche posters
          sent to targeted personnel on behalf of ForcePoint and ECI.{" "}
        </p>
      </div>
      {/* HERO */}
      <div className="grid grid-cols-12 py-10 lg:p-16 lg:gap-6 justify-end relative">
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Challenge</h3>
            <p className="font-montserrat mt-3">
              Stone2Stone were tasked by our clients ForcePoint and ECI to
              identify ideal potential targets from within specific sectors and
              to create a thought provoking, memorable engagement.{" "}
            </p>
          </div>
        </div>

        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg lg:text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Target</h3>
            <p className="font-montserrat mt-3">
              Valuable potential leads were identified and researched from the
              key organisations in the specific sectors requested.{" "}
            </p>
          </div>
        </div>
        {/* POSTER */}
        <div className="order-first lg:order-none p-5 col-span-12 lg:z-10 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:absolute lg:w-96">
          <img src="/images/stories/monitors/9.webp" alt="poster" />
        </div>
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Solution</h3>
            <p className="font-montserrat mt-3">
              Identify key individuals from chosen organisations and carry out
              in depth intel gathering on said targets. Design, write copy and
              create a spoof bespoke poster featuring the target in a setting
              that fits their interests, delivered both physically and
              digitally.{" "}
            </p>
          </div>
        </div>
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg lg:text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Outcome</h3>
            <p className="font-montserrat mt-3">
              Fulfilment and deployment of a total of 45 individual assets by
              recorded delivery, followed up with a personalised letter. They
              were also sent the same posters digitally, generating quality
              leads for ForcePoint and ECI, respectively.{" "}
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
              45 Individuals Identified
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/org_icon.png"
              className="w-4 lg:w-7"
              alt="organisation icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              30 Organisations Identified
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/hands_icon.png"
              className="w-4 lg:w-7"
              alt="hands icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              28 Leads Generated
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
