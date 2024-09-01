'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
        <div className="w-full h-3 bg-gradient-to-l from-orange-500 to-yellow-300 fixed top-0 left-0 z-20"></div>
        <nav className="fixed top-3 left-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
                <Link href="/">
                <Image
                    src="/leetfaith.png"
                    alt="LeetFaith Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                />
                </Link>
            </div>

            <div className="block lg:hidden">
                <button
                onClick={toggleMenu}
                className="focus:outline-none"
                >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                </button>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-6">
                <Link
                href="/about"
                className="hover:text-gray-500 px-4 py-2"
                >
                Story
                </Link>
                <Link
                href="/signin"
                className="hover:text-gray-500 px-4 py-2"
                >
                Sign In
                </Link>
            </div>
            </div>
        </div>

        <div
            className={`lg:hidden fixed inset-0 bg-white shadow-md transition-transform duration-300 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className="flex justify-end p-4">
            <button
                onClick={closeMenu}
                className="text-gray-500 hover:text-gray-700"
            >
                <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            </button>
            </div>
            <div className="flex flex-col items-center space-y-4 py-8">
            <Link
                href="/about"
                className="hover:text-gray-500 px-4 py-2"
                onClick={closeMenu}
                >
                Story
            </Link>
            <Link
                href="/signin"
                className="hover:text-gray-500 px-4 py-2"
                onClick={closeMenu}
                >
                Sign In
            </Link>
            </div>
        </div>
        </nav>
    </>
  );
};

export default Navbar;
