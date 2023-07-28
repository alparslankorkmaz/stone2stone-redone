"use client";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function page() {
  return (
    <>
      <div className="bg-[url('/images/stories/page/11.jpg')] bg-cover bg-center bg-no-repeat text-white text-center p-20 lg:p-52">
        <h1 className="text-2xl lg:text-5xl font-bold font-playfair mb-4">
          NetAlly Wifi Wonderperson
        </h1>
        <p className="text-xs lg:text-base font-montserrat font-light">
          Personalised comic book strips were created using the likeness of
          senior Telco targets to promote the netAlly handheld device, including
          bespoke posters and landing pages.{" "}
        </p>
      </div>
      {/* HERO */}
      <div className="grid grid-cols-12 py-10 lg:p-16 lg:gap-6 justify-end relative">
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Challenge</h3>
            <p className="font-montserrat mt-3">
              To create an utterly unique and engaging campaign for e92plus
              vendor netAlly’s new handheld device.{" "}
            </p>
          </div>
        </div>

        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg lg:text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Target</h3>
            <p className="font-montserrat mt-3">
              Senior contacts including engineering and operational directors at
              Telcos, who’s engineers rely on accurate and reliable testing
              equipment.{" "}
            </p>
          </div>
        </div>
        {/* MONITOR */}
        <div className="p-5 lg:p-0 order-first lg:order-none col-span-12 md:col-span-7 md:col-start-3 lg:col-start-auto lg:z-10 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:absolute lg:w-96">
          <div className="relative">
            <img
              src="/images/stories/monitors/empty_monitor.png"
              alt="monitor"
              className=""
            />
            <div className="absolute top-3 overflow-scroll h-48 p-5">
              <img src="/images/stories/wonderperson.jpeg" alt="" />{" "}
            </div>
          </div>
        </div>
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Solution</h3>
            <p className="font-montserrat mt-3">
              Creation of ‘Wi-Fi Wonderperson’, our very own superhero with the
              power to save networks everywhere.{" "}
            </p>
          </div>
        </div>
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg lg:text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Outcome</h3>
            <p className="font-montserrat mt-3">
              Creation of personalised comic book strips and email campaigns
              featuring targets as the superhero – because who wouldn’t want to
              save the (Wi-Fi) world?{" "}
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
              src="/images/stories/icons/book_icon.png"
              className="w-4 lg:w-7"
              alt="book icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              29 Targeted Comic Books
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/mail_icon.png"
              className="w-4 lg:w-7"
              alt="mail icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              20 Unique Opens
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/cursor_icon.png"
              className="w-3 lg:w-6"
              alt="cursor icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              15 Click-Throughs
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
