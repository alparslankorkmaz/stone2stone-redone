import Link from "next/link";

export default function Header() {
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
        <div className="inline-block font-montserrat capitalize">
          <Link
            href="/"
            className="inline-block mx-5 hover:text-s2s-green hover:font-semibold before:block before:font-semibold before:overflow-hidden before:invisible before:h-0 before:content-[attr(text)]"
            text="home"
          >
            home
          </Link>
          <Link
            href="/"
            className="inline-block mx-5 hover:text-s2s-green hover:font-semibold before:block before:font-semibold before:overflow-hidden before:invisible before:h-0 before:content-[attr(text)]"
            text="success stories"
          >
            success stories
          </Link>
          <Link
            href="/"
            className="inline-block mx-5 hover:text-s2s-green hover:font-semibold before:block before:font-semibold before:overflow-hidden before:invisible before:h-0 before:content-[attr(text)]"
            text="company"
          >
            company
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
