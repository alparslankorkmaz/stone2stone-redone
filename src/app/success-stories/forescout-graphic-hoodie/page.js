import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-[url('/images/stories/page/17.jpg')] bg-cover bg-center bg-no-repeat text-white text-center p-20 lg:p-52">
        <h1 className="text-2xl lg:text-5xl font-bold font-playfair mb-4">
          Forescout Graphic Hoodie
        </h1>
        <p className="text-xs lg:text-base font-montserrat font-light">
          Stone2Stone worked with Forescout to create some striking event
          apparel that would be recognisable whilst displaying visual
          information regarding Forescout’s services.{" "}
        </p>
      </div>
      {/* HERO */}
      <div className="grid grid-cols-12 py-10 lg:p-16 lg:gap-6 justify-end relative">
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Challenge</h3>
            <p className="font-montserrat mt-3">
              Forescout approached Stone2Stone with a hoodie design that aimed
              to establish recognizable branding while effectively conveying
              information about Forescout's services.{" "}
            </p>
          </div>
        </div>

        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg lg:text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Target</h3>
            <p className="font-montserrat mt-3">
              Event attendees that were actively looking for services at events
              such as Infosecurity 2023.{" "}
            </p>
          </div>
        </div>
        {/* HOODIE */}
        <div className="order-first lg:order-none p-5 col-span-12 lg:z-10 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:absolute lg:w-96">
          <img src="/images/stories/monitors/17.webp" alt="hoodie" />
        </div>
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Solution</h3>
            <p className="font-montserrat mt-3">
              A hoodie design featured a combination of cyber-related
              illustrations and the company logo stamp, resulting in a visually
              striking design. Additionally, the graphic incorporated the event
              name and relevant cyber-related terminology.{" "}
            </p>
          </div>
        </div>
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg lg:text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Outcome</h3>
            <p className="font-montserrat mt-3">
              The hoodie design gained significant popularity during the events.
              This captivating design became a regular feature at every event
              where Forescout participated, making it a consistent and
              recognizable element of their branding.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
