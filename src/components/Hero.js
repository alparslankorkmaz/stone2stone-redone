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
            <div className="col-span-2 lg:col-span-1">
              <img src="/images/placeholder.png" alt="placeholder" />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <img src="/images/placeholder.png" alt="placeholder" />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <img src="/images/placeholder.png" alt="placeholder" />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <img src="/images/placeholder.png" alt="placeholder" />
            </div>
          </div>
          {/* SECOND ROW */}
          <div className="grid grid-cols-4 gap-5 lg:ms-20 mt-7">
            <div className="col-span-2 lg:col-span-1">
              <img src="/images/placeholder.png" alt="placeholder" />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <img src="/images/placeholder.png" alt="placeholder" />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <img src="/images/placeholder.png" alt="placeholder" />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <img src="/images/placeholder.png" alt="placeholder" />
            </div>
          </div>
        </div>
      </div>
      {/* OUR CLIENTS */}
      <div className="bg-footer_bg bg-cover bg-center p-8">
        <h2 className="font-playfair font-bold text-4xl text-center text-white pt-10">
          Some of our clients
        </h2>
        <div className="grid grid-cols-6 lg:grid-cols-5 justify-center items-center gap-6 lg:gap-3 py-10 lg:py-3 lg:px-14">
          <div className="col-span-3 lg:col-span-1">
            <img
              src="/images/clients/cradlepoint.png"
              alt=""
              className="aspect-3/2 object-contain p-3 lg:p-5"
            />
          </div>

          <div className="col-span-3 lg:col-span-1">
            <img
              src="/images/clients/forescout.png"
              alt=""
              className="aspect-3/2 object-contain p-3 lg:p-5"
            />
          </div>

          <div className="col-span-3 lg:col-span-1">
            <img
              src="/images/clients/checkpoint.png"
              alt=""
              className="aspect-3/2 object-contain p-3 lg:p-5"
            />
          </div>

          <div className="col-span-3 lg:col-span-1">
            <img
              src="/images/clients/trendmicro.png"
              alt=""
              className="aspect-3/2 object-contain p-3 lg:p-5"
            />
          </div>

          <div className="col-span-3 lg:col-span-1">
            <img
              src="/images/clients/cynet.png"
              alt=""
              className="aspect-3/2 object-contain p-3 lg:p-5"
            />
          </div>
        </div>
      </div>
    </>
  );
}
