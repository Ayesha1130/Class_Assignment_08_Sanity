"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import {
  FaTimes,
  FaBars,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="max-w-7xl justify-between  mx-auto flex p-4 text-white bg-primary">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-extrabold">
          TheCuriousMind
        </h1>

        <nav className="hidden md:hidden lg:block justify-center p-3">
          <div className="flex gap-4">
            <ul className="flex gap-4 font-serif">
              <li className="hover:underline">
                <Link href={"/"}>Home</Link>
              </li>
              <li className=" hover:underline">
                <Link href={"/blog"}>Blogs</Link>
              </li>
              <li className=" hover:underline">
                <Link href={"/about"}>About Us</Link>
              </li>
              <li className=" hover:underline">
                <Link href={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>

        {isOpen && (
          <nav className="absolute top-[14%] w-[70%] right-0 h-[100vh] bg-blue-900  rounded-lg">
            <ul className="p-4 flex flex-col gap-4  font-serif justify-center text-center">
              <li className="text-primary underline">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:text-primary hover:underline">
                <Link href={"/blog"}>Blogs</Link>
              </li>
              <li className="hover:text-primary hover:underline">
                <Link href={"/about"}>About Us</Link>
              </li>
              <li className="hover:text-primary hover:underline">
                <Link href={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </nav>
        )}
        <button
          onClick={toggleMenu}
          className="text-xl md:text-2xl  sm:block md:block lg:hidden"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </header>

      <hr className="border" />
    </>
  );
};

export default Navbar;
