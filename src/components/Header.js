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
        <div className="inline-block font-montserrat font-light">
          <Link
            href="/"
            text="home"
            className={
              currentRoute === "/"
                ? "mx-5 font-semibold text-s2s-green"
                : "mx-5"
            }
          >
            Home
          </Link>
          <Link
            href="/success-stories"
            text="success stories"
            className={
              currentRoute === "/success-stories"
                ? "mx-5 font-semibold text-s2s-green"
                : "mx-5"
            }
          >
            Success Stories
          </Link>
          <Link
            href="/company"
            text="company"
            className={
              currentRoute === "/company"
                ? "mx-5 font-semibold text-s2s-green"
                : "mx-5"
            }
          >
            Company
          </Link>
        </div>
        {/* CONTACT US BUTTON */}
        <div>
          <Link href="/">
            <img
              src="/images/header/vector.png"
              alt="contact us"
              className="bg-s2s-green rounded-full p-3 w-14"
            />
          </Link>
        </div>
      </nav>
    </>
  );
}
