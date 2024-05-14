"use client";
import { CiBowlNoodles } from "react-icons/ci";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";

export default function Header() {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("Search triggered");
    }
  };

  return (
    <nav className="text-white bg-purple-950 flex items-center">
      <CiBowlNoodles className="pl-2 text-7xl" />
      <Link legacyBehavior href="/">
        <a className="text-white font-semibold text-3xl font-calibri transition-duration-300 cursor-pointer hover:text-purple-500">
          Food4Thought
        </a>
      </Link>
      <div className="flex justify-center items-center mx-auto relative">
        <div className="relative">
          <input
            type="text"
            placeholder=""
            className="rounded-full py-2 px-4 outline-none bg-white text-purple-950 pl-10"
            onKeyPress={handleKeyPress}
          />
          <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500 text-2xl" />
        </div>
      </div>
    </nav>
  );
}