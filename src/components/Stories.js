"use client";
import { Tab } from "@headlessui/react";
import Link from "next/link";

export default function Stories() {
  return (
    <>
      <Tab.Group vertical>
        <div className="grid grid-cols-12 p-2 lg:p-16 gap-4 lg:gap-16 ">
          <div className="col-span-12 lg:col-span-3">
            <Tab.List className="flex lg:flex-col text-sm lg:text-base font-playfair font-bold lg:whitespace-nowrap">
              <Tab className="mx-1 lg:mx-0 my-2 p-2 rounded-md bg-tab-dark-gray focus:bg-s2s-green focus:text-white outline-none">
                All
              </Tab>
              <Tab className="mx-1 lg:mx-0 my-2 p-2 rounded-md bg-tab-dark-gray focus:bg-s2s-green focus:text-white outline-none">
                Content Marketing
              </Tab>
              <Tab className="mx-1 lg:mx-0 my-2 p-2 rounded-md bg-tab-dark-gray focus:bg-s2s-green focus:text-white outline-none">
                Creative
              </Tab>
              <Tab className="mx-1 lg:mx-0 my-2 p-2 rounded-md bg-tab-dark-gray focus:bg-s2s-green focus:text-white outline-none">
                Events
              </Tab>
              <Tab className="mx-1 lg:mx-0 my-2 p-2 rounded-md bg-tab-dark-gray focus:bg-s2s-green focus:text-white outline-none">
                Lead Generation
              </Tab>
            </Tab.List>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <Tab.Panels>
              {/* ALL */}
              <Tab.Panel>
                {" "}
                <div className="grid grid-cols-2 gap-7">
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story1 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          ECI's 7 Resolutions{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Creative / January 2022
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story2 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          CSI’s 12 Days of Christmas{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Content Marketing / December 2021
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story3 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          CDW’s Grounds for Security{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Content Marketing / November 2019
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story4 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          Cradlepoint PinPoint{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Creative / March 2022
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story5 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          GDW and Dell Technologies{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Content Marketing / July 2021
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story6 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          Check Point's Straight to the Point{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Content Marketing / September 2021
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story7 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          Check Point Partner Awards 2021{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Events / April 2021
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story8 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          e2e Assure Animation{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Creative / June 2020
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story9 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          ECI and Forcepoint Posters{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Lead Generation / February 2021
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story10 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          e92 Plus Calculator{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Lead Generation / November 2021
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story11 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          NetAlly Wifi Wonderperson{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Creative / September 2021
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story12 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          Check Point Partner Awards 2022{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Events / May 2022
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story13 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          SCC Quiz{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Content Marketing / August 2021
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story14 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          Software One Duet{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Creative / August 2021
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story15 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          Red Hat's Innovation Island{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Creative / February 2023
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story16 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          Abacus Forged Coins{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Lead Generation / May 2023
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story17 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          Forescout Graphic Hoodie{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Creative / March 2023
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story18 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          Trend Micro AWS Video{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Content Marketing / June 2023
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story19 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          Forescout Infosecurity Video{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Content Marketing / June 2023
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story20 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          SCC Animation{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Creative / June 2022
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                </div>
              </Tab.Panel>
              {/* CONTENT MARKETING */}
              <Tab.Panel>
                {" "}
                <div className="grid grid-cols-2 gap-7">
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story2 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          CSI’s 12 Days of Christmas{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Content Marketing / December 2021
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story3 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          CDW’s Grounds for Security{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Content Marketing / November 2019
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story5 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          GDW and Dell Technologies{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Content Marketing / July 2021
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story6 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          Check Point's Straight to the Point{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Content Marketing / September 2021
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story13 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          SCC Quiz{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Content Marketing / August 2021
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story18 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          Trend Micro AWS Video{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Content Marketing / June 2023
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story19 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          Forescout Infosecurity Video{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Content Marketing / June 2023
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                </div>
              </Tab.Panel>
              {/* CREATIVE */}
              <Tab.Panel>
                {" "}
                <div className="grid grid-cols-2 gap-7">
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story1 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          ECI's 7 Resolutions{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Creative / January 2022
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story4 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          Cradlepoint PinPoint{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Creative / March 2022
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story8 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          e2e Assure Animation{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Creative / June 2020
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story11 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          NetAlly Wifi Wonderperson{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Creative / September 2021
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story14 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          Software One Duet{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Creative / August 2021
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story15 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          Red Hat's Innovation Island{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Creative / February 2023
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story17 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          Forescout Graphic Hoodie{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Creative / March 2023
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story20 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          SCC Animation{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Creative / June 2022
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                </div>
              </Tab.Panel>
              {/* EVENTS */}
              <Tab.Panel>
                {" "}
                <div className="grid grid-cols-2 gap-7">
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story7 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          Check Point Partner Awards 2021{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Events / April 2021
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story12 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          Check Point Partner Awards 2022{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Events / May 2022
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                </div>
              </Tab.Panel>
              {/* LEAD GENERATION */}
              <Tab.Panel>
                {" "}
                <div className="grid grid-cols-2 gap-7">
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story9 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          ECI and Forcepoint Posters{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Lead Generation / February 2021
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story10 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          e92 Plus Calculator{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Lead Generation / November 2021
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Link href="/">
                      <div className="bg-story16 bg-center bg-cover col-span-2 lg:col-span-1 text-center py-20 px-10 text-white rounded-lg">
                        {" "}
                        <p className="font-playfair font-bold text-lg tracking-wide">
                          {" "}
                          Abacus Forged Coins{" "}
                          <span className="block mt-1 font-montserrat text-xs font-light">
                            Lead Generation / May 2023
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </Link>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </div>
      </Tab.Group>
    </>
  );
}
