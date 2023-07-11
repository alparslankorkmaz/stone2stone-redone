export default function Hero() {
  return (
    <>
      <div className="hero mt-20 p-5">
        <div className="hero-text">
          <h1 className="capitalize mb-5 font-playfair text-center lg:text-6xl font-bold bg-hero_bg bg-cover bg-center bg-clip-text text-transparent">
            {" "}
            A B2B Marketing Agency for{" "}
            <span className="block py-5">Technology Companies</span>{" "}
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
    </>
  );
}
