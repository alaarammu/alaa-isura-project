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
    <nav className="text-white bg-purple-950 flex items-center justify-between border-b border-purple-500 text-sm text-center px-4">
      <div className="flex items-center">
        <CiBowlNoodles className="text-7xl" />
        <Link legacyBehavior href="/">
          <a className="text-white font-semibold text-3xl font-calibri transition-duration-300 cursor-pointer hover:text-purple-500 ml-2 pr-10">
            Food4Thought
          </a>
        </Link>
      </div>
      <div className="flex items-center relative flex-grow mx-4">
        <input
          type="text"
          placeholder=""
          className="rounded-full py-2 px-4 outline-none bg-white text-purple-950 pr-10 pl-10"
          onKeyPress={handleKeyPress}
        />
        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500 text-2xl" />
      </div>
      <div className="flex items-center space-x-10">
        <Link legacyBehavior href="">
          <a className="text-white font-semibold font-calibri transition-duration-300 cursor-pointer hover:text-purple-500 text-lg pr-10">
            Login
          </a>
        </Link>
        <span className="block w-px h-6 bg-purple-400"></span>{" "}
        {/* Horizontal line */}
        <Link legacyBehavior href="">
          <a className="text-white font-semibold font-calibri transition-duration-300 cursor-pointer hover:text-purple-500 text-lg pr-10 pl-10">
            Sign-up
          </a>
        </Link>
      </div>
    </nav>
  );
}
