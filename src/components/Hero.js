import OurClients from "./OurClients";

export default function Hero() {
  return (
    <>
      <div className="hero mt-10 lg:mt-20 p-4 lg:p-5">
        {/* TEXT */}
        <div className="hero-text">
          <h1 className="capitalize mb-5 font-playfair text-center text-4xl lg:text-6xl font-bold bg-hero_bg bg-cover bg-center bg-clip-text text-transparent">
            {" "}
            A B2B Marketing Agency for{" "}
            <span className="block py-1 lg:py-5">
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
        {/* GIFS */}
        <div className="my-10">
          {/* FIRST ROW */}
          <div className="grid grid-cols-4 gap-5 lg:me-14 mt-14">
            <div className="col-span-2 lg:col-span-1 rounded-xl overflow-hidden">
              <img src="/gifs/1_AdobeExpress.gif" alt="short clip" />
            </div>
            <div className="col-span-2 lg:col-span-1 rounded-xl overflow-hidden">
              <img src="/gifs/2_AdobeExpress.gif" alt="short clip" />
            </div>
            <div className="col-span-2 lg:col-span-1 rounded-xl overflow-hidden">
              <img src="/gifs/3_AdobeExpress.gif" alt="short clip" />
            </div>
            <div className="col-span-2 lg:col-span-1 rounded-xl overflow-hidden">
              <img src="/gifs/4_AdobeExpress.gif" alt="short clip" />
            </div>
          </div>
          {/* SECOND ROW */}
          <div className="grid grid-cols-4 gap-5 lg:ms-20 mt-7">
            <div className="col-span-2 lg:col-span-1 rounded-xl overflow-hidden">
              <img src="/gifs/5_AdobeExpress.gif" alt="short clip" />
            </div>
            <div className="col-span-2 lg:col-span-1 rounded-xl overflow-hidden">
              <img src="/gifs/6_AdobeExpress.gif" alt="short clip" />
            </div>
            <div className="col-span-2 lg:col-span-1 rounded-xl overflow-hidden">
              <img src="/gifs/7_AdobeExpress.gif" alt="short clip" />
            </div>
            <div className="col-span-2 lg:col-span-1 rounded-xl overflow-hidden">
              <img src="/gifs/8_AdobeExpress.gif" alt="short clip" />
            </div>
          </div>
        </div>
      </div>
      <OurClients />
    </>
  );
}
