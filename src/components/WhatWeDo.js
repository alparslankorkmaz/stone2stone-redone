"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function WhatWeDO() {
  let [categories] = useState({
    "Lead Generation": [
      {
        id: 1,
        title: "Leads on Demand: Unleash Your Business Potential",
        text: "Unleash a Flood of Quality Leads with Our Expert Strategies: Harnessing the Power of Email, Direct Marketing, Social Media, and ABM",
        list: 5,
      },
    ],
    Creative: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        text: "Jan 7",
        list: 29,
      },
    ],
    "Content Marketing": [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        text: "2d ago",
        list: 9,
      },
    ],
    Events: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        text: "2d ago",
        list: 9,
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
                    "w-full py-10 font-playfair font-bold text-2xl first:rounded-tl-xl last:rounded-tr-xl last:shadow-none shadow-[rgba(0,0,15,0.2)_4px_0px_2px_0px]",
                    selected
                      ? "bg-tab-gray last:shadow-[rgba(0,0,15,0.2)_6px_-2.5px_2px_1px] shadow-[rgba(0,0,15,0.2)_6px_-2.5px_2px_1px] outline-none"
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
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 hover:bg-gray-100"
                    >
                      <h3 className="text-2xl font-playfair font-bold leading-5">
                        {post.title}
                      </h3>

                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                        <li>{post.text}</li>
                        <li>&middot;</li>
                        <li>{post.list} comments</li>
                        <li>&middot;</li>
                      </ul>

                      <a
                        href="#"
                        className={classNames("absolute inset-0 rounded-md")}
                      />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}
