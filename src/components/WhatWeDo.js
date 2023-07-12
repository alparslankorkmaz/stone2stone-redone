"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const img1 = "/images/what_we_do/1.jpg";
const img2 = "/images/what_we_do/2.jpg";
const img3 = "/images/what_we_do/3.jpg";
const img4 = "/images/what_we_do/4.jpg";

const leadGeneration = [
  "ABM",
  "Email Marketing",
  "Direct Marketing",
  "Social Media Marketing",
  "Social Selling",
  "Sales Promotion",
];

const listedLeadGeneration = leadGeneration.map((lg, idx) => {
  return <li key={idx}>{lg}</li>;
});

const creative = [
  "Branding",
  "Website Design",
  "Campaign Creation",
  "Concept Development",
  "Digital Advertising",
  "Physical Advertising",
];

const listedCreative = creative.map((lg, idx) => {
  return <li key={idx}>{lg}</li>;
});

const contentMarketing = [
  "Blogs",
  "Social",
  "Website Content",
  "Case Studies",
  "White Papers",
  "Technical Specifications",
];

const listedContentMarketing = contentMarketing.map((lg, idx) => {
  return <li key={idx}>{lg}</li>;
});

const events = [
  "Virtual",
  "Physical",
  "Internal",
  "External",
  "Registration Drives",
];

const listedEvents = events.map((lg, idx) => {
  return <li key={idx}>{lg}</li>;
});

export default function WhatWeDO() {
  let [categories] = useState({
    "Lead Generation": [
      {
        id: 1,
        title: "Leads on Demand: Unleash Your Business Potential",
        text: "Unleash a Flood of Quality Leads with Our Expert Strategies: Harnessing the Power of Email, Direct Marketing, Social Media, and ABM",
        list: listedLeadGeneration,
        img: img1,
      },
    ],
    Creative: [
      {
        id: 2,
        title: "Use your (and our) imagination to fuel award-worthy campaigns",
        text: "From website design to physical advertising to campaign creation, our team prioritises showing your creativity and personality in everything we create.",
        list: listedCreative,
        img: img2,
      },
    ],
    "Content Marketing": [
      {
        id: 3,
        title: "Engaging content in unison across multiple channels",
        text: "It pays to look good, literally. Via blogs, social media and website content, we love to connect with people like you! Have a gander at what we have to offer.",
        list: listedContentMarketing,
        img: img3,
      },
    ],
    Events: [
      {
        id: 4,
        title: "Put on the event of the year – virtual or physical",
        text: "We might not be able to plan a wedding, but this B2B marketing agency certainly knows how to pull off a successful corporate event. Be it physically or virtually, the Stone2Stone atmosphere is sure to help you shine through.",
        list: listedEvents,
        img: img4,
      },
    ],
  });

  return (
    <>
      <div className="">
        <h3 className="font-playfair font-bold  text-4xl text-center mt-20 mb-5">
          What we do
        </h3>
        <div className="w-full p-3 lg:py-10 lg:px-16">
          <Tab.Group>
            <Tab.List className="flex space-x-1 bg-tab-dark-gray rounded-t-xl">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-10 font-playfair font-bold lg:text-2xl first:rounded-tl-xl last:rounded-tr-xl shadow-[rgba(0,0,15,0.2)_15px_0px_10px_0px]",
                      selected
                        ? "bg-tab-gray shadow-[rgba(0,0,15,0.2)_15px_-15px_10px_0px] outline-none"
                        : " hover:bg-tab-gray/[0.12]"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="">
              {Object.values(categories).map((tabs, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames("rounded-b-xl bg-tab-gray p-3")}
                >
                  <div>
                    {tabs.map((tab) => (
                      <div
                        key={tab.id}
                        className="grid grid-cols-2 lg:gap-20 relative rounded-md p-5"
                      >
                        <div className="col-span-2 lg:col-span-1">
                          <h3 className="text-2xl p-5 font-playfair font-bold">
                            {tab.title}
                          </h3>

                          <div className=" mt-1 px-5 ">
                            <div className="font-light">{tab.text}</div>
                            <ul className="mt-7 font-light list-disc list-inside">
                              {tab.list}
                            </ul>
                            <div className="my-10">
                              <Link
                                href="/"
                                className="bg-s2s-green px-7 py-3 rounded-xl font-playfair font-bold text-white"
                              >
                                See examples
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 order-first lg:order-last lg:col-span-1 ">
                          <img src={tab.img} alt="illustrations" />
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  );
}
