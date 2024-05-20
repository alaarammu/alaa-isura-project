"use client";
import { CiBowlNoodles } from "react-icons/ci";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("Search triggered");
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="text-white bg-purple-950 flex items-center justify-between border-b border-purple-500 text-sm text-center px-4 w-full">
      <div className="flex items-center">
        <CiBowlNoodles className="text-7xl" />
        <Link legacyBehavior href="/">
          <a className="text-white font-semibold text-3xl font-calibri transition duration-300 cursor-pointer hover:text-purple-500 ml-2 pr-10">
            Food4Thought
          </a>
        </Link>
      </div>
      <div className="flex items-center relative flex-grow max-w-md mx-4">
        <input
          type="text"
          placeholder=""
          className="rounded-full py-2 px-4 outline-none bg-white text-purple-950 pr-10 pl-10 w-full"
          onKeyPress={handleKeyPress}
        />
        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500 text-2xl" />
      </div>
      <div className="flex items-center space-x-4 relative">
        <div className="relative">
          <a
            className="text-white font-semibold font-calibri transition duration-300 cursor-pointer hover:text-purple-500 text-lg flex items-center"
            onClick={toggleDropdown}
          >
            Login
            <IoMdArrowDropdown className="ml-1" />
          </a>
          {dropdownVisible && (
            <div className="absolute top-full mt-2 right-0 bg-purple-800 text-white font-bold rounded-xl shadow-xl py-2 px-4 z-10 min-w-max">
              <Link legacyBehavior href="/profile">
                <a className="block px-4 py-2 hover:bg-purple-700">My Profile</a>
              </Link>
            </div>
          )}
        </div>
        <span className="block w-px h-6 bg-purple-400"></span>
        <Link legacyBehavior href="">
          <a className="text-white font-semibold font-calibri transition duration-300 cursor-pointer hover:text-purple-500 text-lg">
            Sign-up
          </a>
        </Link>
      </div>
    </nav>
  );
}
