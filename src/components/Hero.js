import OurClients from "./OurClients";
import Marquee from "react-fast-marquee";

export default function Hero() {
  return (
    <>
      <div className="hero mt-8 p-2 lg:p-5">
        {/* TEXT */}
        <div className="hero-text">
          <h1 className="capitalize mb-5 font-playfair text-center text-4xl lg:text-6xl font-bold bg-hero_bg bg-cover bg-center bg-clip-text text-transparent">
            {" "}
            A B2B Marketing Agency for{" "}
            <span className="lg:block py-1 lg:py-5">
              Technology Companies
            </span>{" "}
          </h1>
          <p className="text-center font-montserrat">
            Specialising in Lead Generation, Creative, Content Marketing and
            Events for{" "}
            <span className="block">
              {" "}
              Leading B2B Technology, Software and SaaS Businesses.
            </span>
          </p>
        </div>
      </div>

      {/* GIF */}
      <div className="mb-20">
        {/* FIRST ROW */}
        <div className="relative flex overflow-x-hidden">
          <Marquee pauseOnHover speed={25} className="flex mt-14">
            <div className="mx-1 lg:mx-4 rounded-xl overflow-hidden w-36 lg:w-72">
              <img src="/gifs/1_AdobeExpress.gif" alt="short clip" />
            </div>
            <div className="mx-1 lg:mx-4 rounded-xl overflow-hidden w-36 lg:w-72">
              <img src="/gifs/2_AdobeExpress.gif" alt="short clip" />
            </div>
            <div className="mx-1 lg:mx-4 rounded-xl overflow-hidden w-36 lg:w-72">
              <img src="/gifs/3_AdobeExpress.gif" alt="short clip" />
            </div>
            <div className="mx-1 lg:mx-4 rounded-xl overflow-hidden w-36 lg:w-72">
              <img src="/gifs/4_AdobeExpress.gif" alt="short clip" />
            </div>
            <div className="mx-1 lg:mx-4 rounded-xl overflow-hidden w-36 lg:w-72">
              <img src="/gifs/1_AdobeExpress.gif" alt="short clip" />
            </div>
            <div className="mx-1 lg:mx-4 rounded-xl overflow-hidden w-36 lg:w-72">
              <img src="/gifs/2_AdobeExpress.gif" alt="short clip" />
            </div>
            <div className="mx-1 lg:mx-4 rounded-xl overflow-hidden w-36 lg:w-72">
              <img src="/gifs/3_AdobeExpress.gif" alt="short clip" />
            </div>
            <div className="mx-1 lg:mx-4 rounded-xl overflow-hidden w-36 lg:w-72">
              <img src="/gifs/4_AdobeExpress.gif" alt="short clip" />
            </div>
          </Marquee>
        </div>
        {/* SECOND ROW */}
        <div className="relative overflow-x-hidden">
          <Marquee pauseOnHover speed={35} className="flex mt-14">
            <div className="mx-1 lg:mx-4 rounded-xl overflow-hidden w-36 lg:w-72">
              <img src="/gifs/5_AdobeExpress.gif" alt="short clip" />
            </div>
            <div className="mx-1 lg:mx-4 rounded-xl overflow-hidden w-36 lg:w-72">
              <img src="/gifs/6_AdobeExpress.gif" alt="short clip" />
            </div>
            <div className="mx-1 lg:mx-4 rounded-xl overflow-hidden w-36 lg:w-72">
              <img src="/gifs/7_AdobeExpress.gif" alt="short clip" />
            </div>
            <div className="mx-1 lg:mx-4 rounded-xl overflow-hidden w-36 lg:w-72">
              <img src="/gifs/8_AdobeExpress.gif" alt="short clip" />
            </div>
            <div className="mx-1 lg:mx-4 rounded-xl overflow-hidden w-36 lg:w-72">
              <img src="/gifs/5_AdobeExpress.gif" alt="short clip" />
            </div>
            <div className="mx-1 lg:mx-4 rounded-xl overflow-hidden w-36 lg:w-72">
              <img src="/gifs/6_AdobeExpress.gif" alt="short clip" />
            </div>
            <div className="mx-1 lg:mx-4 rounded-xl overflow-hidden w-36 lg:w-72">
              <img src="/gifs/7_AdobeExpress.gif" alt="short clip" />
            </div>
            <div className="mx-1 lg:mx-4 rounded-xl overflow-hidden w-36 lg:w-72">
              <img src="/gifs/8_AdobeExpress.gif" alt="short clip" />
            </div>
          </Marquee>
        </div>
      </div>
      <OurClients />
    </>
  );
}
