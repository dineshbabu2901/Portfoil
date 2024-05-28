import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { Typed } from "react-typed"; 

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const typed = new Typed(".typed-text", {
      strings: ["Front End Developer", "Back End Developer", "Software Engineer"],
      typeSpeed: 80,
      backDelay: 1100,
      backSpeed: 30,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header className="flex justify-between items-center px-6 py-3 bg-primary">
      <a className="font-bold text-3xl text-white px-3 py-4" href="#">
        Dinesh Babu
      </a>
      <nav className="hidden text-lg md:block px-3 py-4">
        <ul className="flex text-white">
          <li className="hover:bg-white hover:text-black px-3 py-2 rounded-lg">
            <a href="/">Home</a>
          </li>
          <li className="hover:bg-white hover:text-black px-3 py-2 rounded-lg">
            <a href="/#about">About</a>
          </li>
          <li className="hover:bg-white hover:text-black px-3 py-2 rounded-lg">
            <a href="/#projects">Projects</a>
          </li>
          <li className="hover:bg-white hover:text-black px-3 py-2 rounded-lg">
            <a href="/#resume">Resume</a>
          </li>
          <li className="hover:bg-white hover:text-black px-3 py-2 rounded-lg">
            <a href="/#profile">Profile</a>
          </li>
          <li className="hover:bg-white hover:text-black px-3 py-2 rounded-lg">
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className="block md:hidden bg-primary sticky top-0 right-0 z-50">
          <ul
            onClick={() => setToggleMenu(!toggleMenu)}
            className="flex flex-col text-white"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="/#profile">Profile</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden"
      >
        <Bars3Icon className="text-white h-5 z-50" />
      </button>
      <strong className="text-white ml-4 hidden md:inline-block text-lg typed-text">
        {/* This empty span will be used by Typed to render the typed text */}
      </strong>
    </header>
  );
}
