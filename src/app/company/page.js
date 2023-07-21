"use client";
import OurClients from "@/components/OurClients";
import OurVision from "@/components/OurVision";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Company() {
  return (
    <>
      {/* TEXT */}
      <div className="mt-10 p-4 lg:p-5">
        <div className="hero-text font-montserrat">
          <h1 className="capitalize mb-7 font-playfair text-center text-4xl lg:text-6xl font-bold bg-hero_bg bg-cover bg-center bg-clip-text text-transparent">
            {" "}
            Stone2Stone: A Full Service B2B{" "}
            <span className="block py-1 lg:py-5">
              Technology Marketing Agency
            </span>{" "}
          </h1>
          <p className="text-center mb-5">
            We are experienced, knowledgeable and dedicated experts who are
            ready to define your goals and
            <span className="lg:block">
              {" "}
              build your dream campaign. Technology runs through our veins here
              at Stone2Stone.
            </span>
          </p>
          <br />
          <p className="text-center mb-5">
            Ready to define your goals?{" "}
            <span className="block underline font-bold">
              Reach out at{" "}
              <a href="mailto:info@stone2stone.co.uk">
                info@stone2stone.co.uk{" "}
              </a>{" "}
            </span>
          </p>
        </div>
      </div>
      <OurClients />
      {/* OUR STORY */}
      <div className="p-10 lg:p-20 mb-16 lg:mb-0">
        <h2 className="font-playfair font-bold text-4xl text-center mb-24">
          Our Story
        </h2>
        <div className="grid grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="col-span-2 lg:col-span-1 order-last lg:order-first font-montserrat">
            <p>
              Let’s start with our Business & Commercial lead and our Concept
              Copywriter; the two Davids. Friends for over forty years, they
              formed their own B2B marketing company in 2002. 17 years and over
              200 loyal clients later, they successfully sold the business in
              2019.
            </p>
            <br />
            <p>
              A year later, Business & Commercial Lead David decided to create
              Stone2Stone. The first step was to bring a little help on board,
              with our Creative Lead Sam being the obvious starting point.
              Having worked at David’s previous business, he was ready to take
              on the fast-paced environment of the B2B world once again.
            </p>
            <br />
            <p>
              In just threeyear, Stone2Stone has already developed a vast
              catalogue of treasured clients, some old, many new. As a result,
              we too have had to expand. With a dedicated team of 10, we
              continue to grow as creatives and as a business, increasing in
              office size three times in 2021. And we are showing no signs of
              slowing down.
            </p>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <img src="/images/company/our_story.png" alt="illustration" />
          </div>
        </div>
      </div>
      <OurVision slides={SLIDES} options={OPTIONS} />
      {/* WHO WE ARE */}
      <div className="p-10 lg:px-32 lg:mb-24">
        <h4 className="font-playfair font-bold text-4xl text-center mb-20 lg:mb-28">
          Who We Are
        </h4>
        <div className="grid grid-cols-3 gap-20 lg:gap-28">
          {/* DAVID N */}
          <div className="flex items-center justify-center flex-col gap-5 col-span-3 lg:col-span-1">
            <img
              src="/images/company/1.png"
              alt="illustration"
              className="w-3/4"
            />
            <div className="font-montserrat">
              <h5 className="font-playfair font-bold text-2xl mb-3">
                David Nossiter
              </h5>
              <p>
                {" "}
                <span className="font-bold block whitespace-nowrap">
                  {" "}
                  Business And Commercial Director
                </span>
                Our founder, David, has over 30 years’ of experience in B2B
                sales and marketing, David is here to help our clients deliver
                greater ROI from their marketing budget.
              </p>
            </div>
          </div>
          {/* SAM */}
          <div className="flex items-center justify-center flex-col gap-5 col-span-3 lg:col-span-1">
            <img
              src="/images/company/2.png"
              alt="illustration"
              className="w-3/4"
            />
            <div className="font-montserrat">
              <h5 className="font-playfair font-bold text-2xl mb-3">
                Sam Graham
              </h5>
              <p>
                {" "}
                <span className="font-bold block whitespace-nowrap">
                  {" "}
                  Creative Director
                </span>
                Having worked with David at his previous company, Sam leads our
                creative team and studio. He brings fresh ideas backed by a rich
                design background.{" "}
              </p>
            </div>
          </div>
          {/* DAVID H */}
          <div className="flex items-center justify-center flex-col gap-5 col-span-3 lg:col-span-1">
            <img
              src="/images/company/3.png"
              alt="illustration"
              className="w-3/4"
            />
            <div className="font-montserrat">
              <h5 className="font-playfair font-bold text-2xl mb-3">
                David Hartley
              </h5>
              <p>
                {" "}
                <span className="font-bold block whitespace-nowrap">
                  {" "}
                  Concept and Copywriting
                </span>
                David helps our clients achieve their business aspirations
                through incisive, thoughtful promotional concepts and meaningful
                copy.{" "}
              </p>
            </div>
          </div>
          {/* DONNA */}
          <div className="flex items-center justify-center flex-col gap-5 col-span-3 lg:col-span-1">
            <img
              src="/images/company/4.png"
              alt="illustration"
              className="w-3/4"
            />
            <div className="font-montserrat">
              <h5 className="font-playfair font-bold text-2xl mb-3">
                Donna Smith
              </h5>
              <p>
                {" "}
                <span className="font-bold block whitespace-nowrap">
                  {" "}
                  Account Manager
                </span>
                Donna has over 20 years of marketing and sales experience
                working with some of the world’s leading brands and brings with
                her a wealth of marketing knowledge.{" "}
              </p>
            </div>
          </div>
          {/* ALISTAIR */}
          <div className="flex items-center justify-center flex-col gap-5 col-span-3 lg:col-span-1">
            <img
              src="/images/company/5.png"
              alt="illustration"
              className="w-3/4"
            />
            <div className="font-montserrat">
              <h5 className="font-playfair font-bold text-2xl mb-3">
                Alistair Shrimpling
              </h5>
              <p>
                {" "}
                <span className="font-bold block whitespace-nowrap">
                  {" "}
                  Designer
                </span>
                Having worked in the b2b technology Sector for 10 years,
                Alistair is an experienced graphic designer who is skilled in
                UX, logo design, typography and more.{" "}
              </p>
            </div>
          </div>
          {/* ALPARSLAN */}
          <div className="flex items-center justify-center flex-col gap-5 col-span-3 lg:col-span-1">
            <img
              src="/images/company/6.png"
              alt="illustration"
              className="w-3/4"
            />
            <div className="font-montserrat">
              <h5 className="font-playfair font-bold text-2xl mb-3">
                Alparslan Korkmaz
              </h5>
              <p>
                {" "}
                <span className="font-bold block whitespace-nowrap">
                  {" "}
                  Web Developer
                </span>
                Having moved from Turkey, Alparslan (Aslan) has an extensive
                knowledge of all things digital, from site design to e-commerce.{" "}
              </p>
            </div>
          </div>
          {/* GRAINNE */}
          <div className="flex items-center justify-center flex-col gap-5 col-span-3 lg:col-span-1">
            <img
              src="/images/company/7.png"
              alt="illustration"
              className="w-3/4"
            />
            <div className="font-montserrat">
              <h5 className="font-playfair font-bold text-2xl mb-3 whitespace-nowrap">
                Grainne Devine-Gill
              </h5>
              <p>
                {" "}
                <span className="font-bold block whitespace-nowrap">
                  {" "}
                  SEO and Social Media
                </span>
                Grainne has over 25 years of marketing experience across B2B and
                consumer sectors, building a reputation for insightful and
                flexible problem-solving.{" "}
              </p>
            </div>
          </div>
          {/* JOHN */}
          <div className="flex items-center justify-center flex-col gap-5 col-span-3 lg:col-span-1">
            <img
              src="/images/company/8.png"
              alt="illustration"
              className="w-3/4"
            />
            <div className="font-montserrat">
              <h5 className="font-playfair font-bold text-2xl mb-3">
                John Holden
              </h5>
              <p>
                {" "}
                <span className="font-bold block whitespace-nowrap">
                  {" "}
                  Video And Content Creation{" "}
                </span>
                An emmy award winner, John has over 20 years experience in
                producing concise, compelling and engaging content for our
                clients.{" "}
              </p>
            </div>
          </div>
          {/* LIESKE */}
          <div className="flex items-center justify-center flex-col gap-5 col-span-3 lg:col-span-1">
            <img
              src="/images/company/9.png"
              alt="illustration"
              className="w-3/4"
            />
            <div className="font-montserrat">
              <h5 className="font-playfair font-bold text-2xl mb-3">
                Lieske Tombokan
              </h5>
              <p>
                {" "}
                <span className="font-bold block whitespace-nowrap">
                  {" "}
                  Finance
                </span>
                Lieske is in charge of finance at Stone2Stone. With years of
                experience and an unbeatable understanding of all things money,
                the team is lucky to have her.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
