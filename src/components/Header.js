"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const currentRoute = usePathname();
  return (
    <>
      <nav className="py-5 px-10 flex justify-between items-center">
        {/* LOGO */}
        <div>
          <Link href="/">
            <img
              src="/images/header/logo.png"
              alt="stone2stone logo"
              className="w-14 h-auto"
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
            <img src="/images/header/contact_us.png" className="w-14" />
          </Link>
          <svg id="rotatingText" viewBox="0 0 200 200" width="120" height="120">
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
            <text width="400">
              <textPath
                alignmentBaseline="top"
                xlinkHref="#circle"
                className="text font-montserrat text-xl"
              >
                Contact Us&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Contact Us
              </textPath>
            </text>
          </svg>
        </div>
      </nav>
    </>
  );
}
