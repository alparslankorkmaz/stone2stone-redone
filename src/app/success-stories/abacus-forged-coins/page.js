import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-[url('/images/stories/page/16.jpg')] bg-cover bg-center bg-no-repeat text-white text-center p-20 lg:p-52">
        <h1 className="text-2xl lg:text-5xl font-bold font-playfair mb-4">
          Abacus Forged Coins
        </h1>
        <p className="text-xs lg:text-base font-montserrat font-light">
          Stone2Stone worked with Abacus to create messaging that highlighted
          how in-house penetration testing can provide businesses with a
          comprehensive understanding of their cybersecurity strengths and
          weaknesses.{" "}
        </p>
      </div>
      {/* HERO */}
      <div className="grid grid-cols-12 py-10 lg:p-16 lg:gap-6 justify-end relative">
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Challenge</h3>
            <p className="font-montserrat mt-3">
              Abacus aimed to develop a campaign highlighting the potential of
              their recent acquisition, Gotham Security, in bolstering
              cybersecurity defenses proactively, <br /> prior to any
              cyber-attack.{" "}
            </p>
          </div>
        </div>

        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg lg:text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Target</h3>
            <p className="font-montserrat mt-3">
              New, potential and existing Abacus and Gotham Security customers.{" "}
            </p>
          </div>
        </div>
        {/* COIN */}
        <div className="order-first lg:order-none p-5 col-span-12 lg:z-10 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:absolute lg:w-96">
          <img src="/images/stories/monitors/16.webp" alt="coin" />
        </div>
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Solution</h3>
            <p className="font-montserrat mt-3">
              A co-branded coin displayed both the Abacus and Gotham Security
              logos. It was packaged in an engaging booklet, accompanied by
              emails and a landing page.{" "}
            </p>
          </div>
        </div>
        <div className="m-5 lg:p-16 col-span-12 lg:col-span-6 bg-tab-dark-gray rounded-lg lg:text-right grid grid-cols-3 items-center">
          <div className="col-span-3 lg:col-span-2 lg:col-start-2 p-7 lg:p-0">
            <h3 className="font-playfair font-bold text-xl">The Outcome</h3>
            <p className="font-montserrat mt-3">
              This campaign successfully attracted 15 new customer
              opportunities, while also bringing back two returning customers,
              consolidating the customer base and driving business growth.{" "}
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
              100 Targets Identified
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/plus_icon.png"
              className="w-4 lg:w-7"
              alt="plus icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              15 New Customer Opportunities
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:flex-row justify-center text-center lg:text-left lg:gap-5 items-center">
            <img
              src="/images/stories/icons/return_icon.png"
              className="w-4 lg:w-7"
              alt="return icon"
            />
            <p className="font-montserrat text-xs lg:text-base">
              2 Returning Customers
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
