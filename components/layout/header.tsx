"use client"

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/4.png";

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="py-2 bg-black sm:py-3">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <a href="#" title="" className="flex">
              <Image
                className="w-auto h-20" // Reduce height for better header balance
                src={logo}
                alt="Logo"
                priority
              />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-white"
              aria-expanded={expanded}
              onClick={() => setExpanded((prev) => !prev)}
            >
              {!expanded ? (
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          <nav className="hidden ml-20 mr-auto lg:flex lg:items-center lg:justify-start lg:space-x-12">
            <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Products</a>
            <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Features</a>
            <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Pricing</a>
            <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Support</a>
          </nav>

          <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-8">
            <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Login</a>
            <div className="relative inline-flex items-center justify-center group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-linear-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
              <a
                href="#"
                className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                role="button"
              >
                Start free trial
              </a>
            </div>
          </div>
        </div>

        {expanded && (
          <nav>
            <div className="flex flex-col pt-8 pb-4 space-y-6">
              <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Products</a>
              <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Features</a>
              <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Pricing</a>
              <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Support</a>
              <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Login</a>
              <div className="relative inline-flex items-center justify-center group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-linear-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                  role="button"
                >
                  Start free trial
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
