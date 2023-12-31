import OurClients from "@/components/OurClients";
import Stories from "@/components/Stories";

export const metadata = {
  title: "Success Stories",
  description:
    "We're the B2B marketing agency built for technology companies. Our dedicated experts value your time, budget & vision, and can’t wait to start a conversation today.",
};

export default function SuccessStories() {
  return (
    <>
      {/* TEXT */}
      <div className="mt-10 p-4 lg:p-5">
        <div className="hero-text font-montserrat">
          <h1 className="capitalize mb-7 font-playfair text-center text-4xl lg:text-6xl font-bold bg-hero_bg bg-cover bg-center bg-clip-text text-transparent">
            {" "}
            Leading technology companies get{" "}
            <span className="block py-1 lg:py-5">
              noticed with Stone2Stone
            </span>{" "}
          </h1>
          <p className="text-center mb-5">
            More than 250 leading technology companies have trusted Stone2Stone
            so far. Learn how our clients,
            <span className="lg:block">
              {" "}
              small and large, have grown their marketing results and rapidly
              hit and exceeded their targets.
            </span>
          </p>
          <br />
          <p className="text-center mb-5">
            Ready to exceed your targets?{" "}
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
      <Stories />
    </>
  );
}
