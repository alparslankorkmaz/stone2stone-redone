import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* FOOTER 1 */}
      <div className="bg-footer_bg bg-center bg-cover">
        <h4 className="font-playfair font-bold text-3xl text-center capitalize text-white pt-14 pb-5">
          generate a high ROI
        </h4>
        <p className="font-montserrat text-center text-white">
          Sounds too good to be true? Get in touch now to{" "}
          <span className="block">
            {" "}
            start your project, we’d love to prove you wrong.
          </span>
        </p>
        <div className="flex justify-center items-center pt-10 pb-14">
          <Link
            href="/"
            className="font-playfair font-extrabold capitalize bg-white py-3 px-8 rounded-xl"
          >
            generate now
          </Link>
        </div>
      </div>
      {/* FOOTER 2 */}
      <div>
        <div className="bg-black h-5"></div>
        <div className="bg-s2s-slate grid grid-cols-4 gap-14 p-20">
          <div className="logo col-span-4 lg:col-span-2">
            <Link href="/">
              <img
                src="/images/footer/footer_logo.png"
                alt="logo"
                className="w-7/12"
              />
            </Link>
          </div>
          <div className="flex flex-col max-w-fit col-span-4 lg:col-span-1 text-white font-montserrat gap-3">
            <Link href="/" className="hover:font-semibold">
              Home
            </Link>
            <Link href="/" className="hover:font-semibold">
              Success Stories
            </Link>
            <Link href="/" className="hover:font-semibold">
              Company
            </Link>
            <Link href="/" className="hover:font-semibold">
              Contact
            </Link>
          </div>
          <div className="flex flex-col col-span-4 lg:col-span-1 text-white font-montserrat gap-6">
            <div className="flex items-center">
              {" "}
              <img
                src="/images/footer/mail_icon.png"
                alt="phone icon"
                className="w-4 mx-4"
              />
              <a
                href="mailto:info@stone2stone.co.uk"
                className="hover:font-semibold"
              >
                info@stone2stone.co.uk
              </a>
            </div>
            <div className="flex items-center">
              <img
                src="/images/footer/phone_icon.png"
                alt="phone icon"
                className="w-4 mx-4"
              />
              <p> +44(0) 203 4689 945</p>
            </div>
            <div className="flex items-start">
              <img
                src="/images/footer/location_icon.png"
                alt="phone icon"
                className="w-4 mx-4 mt-1"
              />
              <a href="/" className="hover:font-semibold whitespace-nowrap">
                <span className="block"> Block B, Marvan Court,</span>
                <span className="block"> 1 Waldegrave Road,</span>
                <span className="block"> Teddington,</span>
                <span className="block"> TW11 8LZ</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* COPYRIGHT */}
      <div className="bg-s2s-green">
        <p className="text-center text-white font-montserrat p-3">
          © 2023 Stone2Stone | Powered by Stone2Stone
        </p>
      </div>
    </>
  );
}
