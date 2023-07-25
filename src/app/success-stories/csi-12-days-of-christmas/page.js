import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-[url('/images/stories/page/2.jpg')] bg-cover bg-center bg-no-repeat text-white text-center p-20 lg:p-52">
        <h1 className="text-2xl lg:text-5xl font-bold font-playfair mb-4">
          CSI's 12 Days of Christmas
        </h1>
        <p className="text-xs lg:text-base font-montserrat font-light">
          An easy-to-use interactive Christmas calendar informing customers
          about CSI and IBM’s solutions through the magic of Santa’s Workshop.{" "}
        </p>
      </div>
      {/* HERO */}
      <div className="grid grid-cols-12 py-10 lg:p-16 lg:gap-6 justify-end relative">
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Challenge</h3>
            <p className="font-montserrat mt-3">
              To create an informative series of videos about who CSI, and IBM,
              are and how their solutions can benefit customers in a visually
              stimulating medium.{" "}
            </p>
          </div>
        </div>

        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg lg:text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Target</h3>
            <p className="font-montserrat mt-3">
              Potential Customers With Great Christmas Elf Skills That Would
              Benefit From CSI’s Managed Support And Cloud Services.{" "}
            </p>
          </div>
        </div>
        {/* MONITOR */}
        <div className="order-first lg:order-none p-5 col-span-12 lg:z-10 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:absolute lg:w-96">
          <img src="/images/stories/monitors/2.webp" alt="monitor" />
        </div>
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Solution</h3>
            <p className="font-montserrat mt-3">
              The creation of 12 short form videos presented by experts from CSI
              and IBM, educating viewers in a conversational manner on their
              services from power servers to hybrid cloud solutions.{" "}
            </p>
          </div>
        </div>
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg lg:text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Outcome</h3>
            <p className="font-montserrat mt-3">
              A fun, interactive 12 Days of Christmas calendar filled with
              informational videos with a corresponding quiz to win a variety of
              amazing prizes.{" "}
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
              src="/images/stories/icons/con_icon.png"
              className="w-4 lg:w-7"
              alt="chat icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              287 Correct Answers
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/video_icon.png"
              className="w-4 lg:w-7"
              alt="video icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              346 Video Views
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/like_icon.png"
              className="w-4 lg:w-7"
              alt="like icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              53% Increased Social
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
