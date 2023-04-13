import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex flex-row items-center p-5 justify-between sticky
     top-0 bg-white
      z-2 shadow-md">
      {/* LEFT SIDE */}
      <div className="flex flex-row space-x-2 items-center">
        <Image
          src="https://www.arshdeeps.com/_next/static/media/navIcon.4190af36.svg"
          alt="LOGO"
          height={50}
          width={50}
        />
        <div>
          <h1 className="font-extrabold">
            Imaginize{" "}
            <span className="text-violet-500">AI Image Generator</span>
          </h1>
        </div>
      </div>
      {/* LEFT SIDE ENDS */}

      {/* RIGHT SIDE */}
      <div className="flex text-xs md:text-base divide-x">
        <Link target="_blank" href={"https://github.com/ArshS1"} className="px-2 font-light text-right">GitHub</Link>
      </div>
      {/* RIGHT SIDE ENDS */}
    </header>
  );
}

export default Header;
