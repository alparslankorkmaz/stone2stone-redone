import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-[url('/images/stories/page/15.jpg')] bg-cover bg-center bg-no-repeat text-white text-center p-20 lg:p-52">
        <h1 className="text-2xl lg:text-5xl font-bold font-playfair mb-4">
          Red Hat's Innovation Island
        </h1>
        <p className="text-xs lg:text-base font-montserrat font-light">
          Stone2Stone worked with SCC and Red Hat to create Innovation Island. A
          platform that allowed SCC and Red Hat to market their products and
          partnership in an innovative way.{" "}
        </p>
      </div>
      {/* HERO */}
      <div className="grid grid-cols-12 py-10 lg:p-16 lg:gap-6 justify-end relative">
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Challenge</h3>
            <p className="font-montserrat mt-3">
              To create a central hub for both SCC and Red Hat which would act
              as a place which clients and targets would go to find out about
              certain products and services.{" "}
            </p>
          </div>
        </div>

        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg lg:text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Target</h3>
            <p className="font-montserrat mt-3">
              New, potential and existing Red Hat and SCC clients. Innovation
              Island served as an informational centre where anyone could go to
              do an array of activities.{" "}
            </p>
          </div>
        </div>
        {/* PHONE */}
        <div className="order-first lg:order-none p-5 col-span-12 lg:z-10 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:absolute lg:w-96">
          <a href="https://innovation-island.netlify.app/" target="_blank">
            {" "}
            <img src="/images/stories/monitors/15.webp" alt="phone" />
          </a>
        </div>
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Solution</h3>
            <p className="font-montserrat mt-3">
              An informational and captivating platform that engaged users with
              its retro vibe. Allowing users to explore Innovation Island to
              find information and collect power-ups for the prize draw.{" "}
            </p>
          </div>
        </div>
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg lg:text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Outcome</h3>
            <p className="font-montserrat mt-3">
              New, potential and existing Red Hat and SCC clients. Innovation
              Island served as an informational centre where anyone could go to
              do an array of activities.{" "}
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
              src="/images/stories/icons/person_icon.png"
              className="w-3 lg:w-5"
              alt="person icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              200 Users in first week
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/controller_icon.png"
              className="w-4 lg:w-7"
              alt="controller icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              600+ Playthroughs
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/form_icon.png"
              className="w-4 lg:w-7"
              alt="form icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              21 Completed Forms
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
