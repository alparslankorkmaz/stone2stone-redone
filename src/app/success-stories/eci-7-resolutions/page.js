import React from "react";

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
      <div className="grid grid-cols-12 py-10 lg:p-16 gap-6 justify-end relative">
        <div className="lg:p-16 col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold lg:text-xl">
              The Challenge
            </h3>
            <p className="font-montserrat text-xs md:text-sm lg:text-base mt-3">
              To create an engaging way to encourage new users to utilise ECI’s
              services going into 2022.{" "}
            </p>
          </div>
        </div>

        <div className="lg:p-16 col-span-6 bg-tab-dark-gray rounded-lg text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold lg:text-xl">The Target</h3>
            <p className="font-montserrat text-xs md:text-sm lg:text-base mt-3">
              Potential customers whose companies would benefit from ECI’s
              managed IT, cybersecurity and transformation services.{" "}
            </p>
          </div>
        </div>
        {/* MIDDLE */}
        <div className="z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-32 lg:w-96">
          <img src="/images/stories/monitors/1.webp" alt="monitor" />
        </div>
        <div className="lg:p-16 col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold lg:text-xl">The Solution</h3>
            <p className="font-montserrat text-xs md:text-sm lg:text-base mt-3">
              The creation of 7 ‘resolutions’ each demonstrating a benefit of
              ECI’s services, with a corresponding video hosted by ECI experts
              engaging in conversation.{" "}
            </p>
          </div>
        </div>
        <div className="lg:p-16 col-span-6 bg-tab-dark-gray rounded-lg text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold lg:text-xl">The Outcome</h3>
            <p className="font-montserrat text-xs md:text-sm lg:text-base mt-3">
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
          <h4 className="font-playfair font-bold lg:text-xl">Results</h4>
          <div className="flex gap-2 lg:gap-5 items-center">
            <img
              src="/images/stories/icons/person_icon.png"
              className="w-4 lg:w-7"
              alt="person icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              292 Unique Visitors
            </p>
          </div>
          <div className="flex gap-2 lg:gap-5 items-center">
            <img
              src="/images/stories/icons/video_icon.png"
              className="w-6 lg:w-11"
              alt="person icon"
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
