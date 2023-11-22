import { UserButton, currentUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { FiFilm, FiUser, FiSearch } from "react-icons/fi";

const NavBar = async () => {
  const checkUser = async () => {
    const user = await currentUser();
    return user !== null;
  };

  const renderAuthButtons = async () => {
    const userExists = await checkUser();

    if (userExists) {
      return <UserButton afterSignOutUrl="/sign-in"></UserButton>;
    } else {
      return (
        <>
          <Link href="/sign-in">
            <button className="bg-red-600 text-white px-2.5 py-0.5 rounded focus:outline-none hover:bg-red-500">
              Sign In
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="bg-red-600 text-white px-2.5 py-0.5 rounded focus:outline-none hover:bg-red-500">
              Sign Up
            </button>
          </Link>
        </>
      );
    }
  };

  return (
    <nav className="bg-gray-900 opacity-90 text-white p-4 fixed w-full top-0 z-50">
      <div className="flex items-center max-sm:px-5 px-12 justify-between">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center font-extrabold text-red-600 space-x-2"
          >
            <FiFilm className="text-2xl" />
            <span className="text-xl font-semibold">FlixFlex</span>
          </Link>
          <div className="ml-4 font-bold">
            <Link href="/movie">
              <button className="hover:text-gray-300 focus:outline-none">
                Movies
              </button>
            </Link>
            <div className="bg-gray-600 border-t border-gray-600 "></div>
            <Link href="/tv">
              <button className="ml-4 hover:text-gray-300 focus:outline-none">
                TV Series
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/search" className="md:block">
            <FiSearch className="text-xl text-red-500" />
          </Link>
          {await renderAuthButtons()}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
