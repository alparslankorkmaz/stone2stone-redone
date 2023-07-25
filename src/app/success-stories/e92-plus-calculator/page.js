"use client";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function page() {
  return (
    <>
      <div className="bg-[url('/images/stories/page/10.jpg')] bg-cover bg-center bg-no-repeat text-white text-center p-20 lg:p-52">
        <h1 className="text-2xl lg:text-5xl font-bold font-playfair mb-4">
          e92 Plus Calculator
        </h1>
        <p className="text-xs lg:text-base font-montserrat font-light">
          An interactive calculator demonstrating the benefits of using e92plus’
          vendor partner Bitdefender’s MDR services.{" "}
        </p>
      </div>
      {/* HERO */}
      <div className="grid grid-cols-12 py-10 lg:p-16 lg:gap-6 justify-end relative">
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Challenge</h3>
            <p className="font-montserrat mt-3">
              To create an easy way for customers to find out how much they will
              benefit from employing Bitdefender’s MDR services compared to
              their current service.{" "}
            </p>
          </div>
        </div>

        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg lg:text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Target</h3>
            <p className="font-montserrat mt-3">
              Potential Customers looking for an easy way to reduce the cost and
              increase the efficiency of their SOC with bitdefender.{" "}
            </p>
          </div>
        </div>
        {/* MONITOR */}
        <div className="order-first lg:order-none p-5 col-span-12 lg:z-10 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:absolute lg:w-96">
          <a href="https://e92-calculator.netlify.app/" target="_blank">
            <img src="/images/stories/monitors/10.webp" alt="monitor" />
          </a>
        </div>
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg lg:text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Outcome</h3>
            <p className="font-montserrat mt-3">
              An easy-to-use online calculator that quickly and effectively
              informs users how much they could be saving if they used
              Bitdefender MDR, saving them time and hopefully money.{" "}
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
              className="w-3 lg:w-6"
              alt="person icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              256 Unique Visitors
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/con_icon.png"
              className="w-4 lg:w-7"
              alt="conversation icon"
            />
            <p className="font-montserrat text-xs lg:text-base">122 Entries</p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/like_icon.png"
              className="w-5 lg:w-8"
              alt="like icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              47 Review Requests
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
