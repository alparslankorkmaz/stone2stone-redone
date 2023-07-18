"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const currentRoute = usePathname();
  return (
    <>
      <nav className="py-5 px-10 flex justify-between items-center">
        {/* LOGO */}
        <div className="min-w-fit w-32 flex justify-center items-center">
          <Link href="/">
            <img
              src="/images/header/logo.png"
              alt="stone2stone logo"
              className="w-16 h-auto"
            />
          </Link>
        </div>
        {/* NAV LINKS */}
        <div className="inline-block text-center font-montserrat font-light">
          <Link
            href="/"
            text="home"
            className={
              currentRoute === "/"
                ? "mx-5 inline-block font-semibold text-s2s-green"
                : "mx-5 inline-block"
            }
          >
            Home
          </Link>
          <Link
            href="/success-stories"
            text="success stories"
            className={
              currentRoute === "/success-stories"
                ? "mx-5 inline-block font-semibold text-s2s-green"
                : "mx-5 inline-block"
            }
          >
            Success Stories
          </Link>
          <Link
            href="/company"
            text="company"
            className={
              currentRoute === "/company"
                ? "mx-5 inline-block font-semibold text-s2s-green"
                : "mx-5 inline-block"
            }
          >
            Company
          </Link>
        </div>
        {/* CONTACT US BUTTON */}
        <div className="circle flex justify-center items-center">
          <Link href="/" className="z-10 absolute">
            <img src="/images/header/contact_us.png" className="w-11 lg:w-14" />
          </Link>
          <svg
            id="rotatingText"
            viewBox="0 0 200 200"
            className="w-24 lg:w-32 h-auto"
          >
            <defs>
              <path
                id="circle"
                d="M 100, 100
                m -75, 0
                a 75, 75 0 1, 0 150, 0
                a 75, 75 0 1, 0 -150, 0
                "
              ></path>
            </defs>
            <text>
              <textPath
                alignmentBaseline="top"
                xlinkHref="#circle"
                className="text font-playfair tracking-widest text-2xl lg:text-xl"
              >
                Contact Us Now
              </textPath>
              <textPath
                alignmentBaseline="top"
                startOffset="230"
                xlinkHref="#circle"
                className="text font-playfair tracking-widest text-2xl lg:text-xl"
              >
                Contact Us Now
              </textPath>
            </text>
          </svg>
        </div>
      </nav>
    </>
  );
}
