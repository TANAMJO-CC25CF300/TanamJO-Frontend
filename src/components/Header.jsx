"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import LittleButton from "./LittleButton";
import logo from "../assets/logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#EDDD5E]">
      <nav
        aria-label="Global"
        className="flex w-full items-center justify-between py-4 pr-4 lg:pr-12 pl-0 relative"
      >
        {/* Logo - Left */}
        <div className="flex items-center flex-shrink-0">
          <a href="#" className="p-0 m-0">
            <span className="sr-only">Tanamjo</span>
            <img alt="Tanamjo Logo" src={logo} className="h-32 w-32" />
          </a>
        </div>

        {/* Navigation - Center */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-x-8">
          <a href="#" className="text-sm font-semibold text-gray-900">
            HOME
          </a>
          <a href="#" className="text-sm font-semibold text-gray-900">
            PLANT CARE GUIDE
          </a>
          <a href="#" className="text-sm font-semibold text-gray-900">
            IDENTIFY PLANT
          </a>
          <a href="#" className="text-sm font-semibold text-gray-900">
            PLANT ENCYCLOPEDIA
          </a>
        </div>

        {/* Right-aligned Search Bar and Button */}
        <div className="hidden lg:flex items-center space-x-8 ml-auto">
          <input
            type="text"
            placeholder="Search"
            className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
          />
          <LittleButton />
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Dialog Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Tanamjo</span>
              <img
                alt="Tanamjo Logo"
                src={logo} // Replace this with your actual logo path
                className="h-32 w-32"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-4 py-6">
                {" "}
                {/* Increased space between items */}
                {/* Mobile Navigation Links */}
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold text-gray-900 hover:bg-gray-50"
                >
                  PLANT CARE GUIDE
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold text-gray-900 hover:bg-gray-50"
                >
                  IDENTIFY PLANT
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-bold text-gray-900 hover:bg-gray-50"
                >
                  PLANT ENCYCLOPEDIA
                </a>
              </div>
              <div className="py-6">
                <LittleButton /> {/* Adjusted button spacing in mobile menu */}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
