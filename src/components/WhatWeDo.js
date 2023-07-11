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

const listedLeadGeneration = leadGeneration.map((lg) => {
  return <li>{lg}</li>;
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
        title: "Is tech making coffee better or worse?",
        text: "Jan 7",
        list: listedLeadGeneration,
        img: img2,
      },
    ],
    "Content Marketing": [
      {
        id: 3,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        text: "2d ago",
        list: listedLeadGeneration,
        img: img3,
      },
    ],
    Events: [
      {
        id: 4,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        text: "2d ago",
        list: listedLeadGeneration,
        img: img4,
      },
    ],
  });

  return (
    <>
      <h3 className="font-playfair font-bold  text-4xl text-center mt-16">
        What we do
      </h3>
      <div className="w-full p-16">
        <Tab.Group>
          <Tab.List className="flex space-x-1 bg-tab-dark-gray rounded-t-xl">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full py-10 font-playfair font-bold text-2xl first:rounded-tl-xl last:rounded-tr-xl shadow-[rgba(0,0,15,0.2)_10px_0px_10px_0px]",
                    selected
                      ? "bg-tab-gray shadow-[rgba(0,0,15,0.2)_10px_-10px_10px_0px] outline-none"
                      : " hover:bg-tab-gray/[0.12]"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames("rounded-b-xl bg-tab-gray p-3")}
              >
                <div>
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="grid grid-cols-2 relative rounded-md p-3"
                    >
                      <div className="col-span-2 lg:col-span-1">
                        <h3 className="text-2xl p-5 font-playfair font-bold">
                          {post.title}
                        </h3>

                        <div className=" mt-1 px-5 ">
                          <div className="font-light">{post.text}</div>
                          <ul className="mt-7 font-light list-disc list-inside">
                            {post.list}
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
                      <div className="col-span-2 lg:col-span-1 ">
                        <img src={post.img} alt="illustrations" />
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}
