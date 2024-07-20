"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
  const headerEl = useRef();

  window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 100) {
      headerEl.current.classList.add("site-header--shrinked");
    } else {
      headerEl.current.classList.remove("site-header--shrinked");
    }
  });

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-[1040] py-8" ref={headerEl}>
      <div className="container">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-6">
            <Link href="/" className="site-header__logo">
              <Image src="/images/footer-logo.png" width="240" height="64" alt="logo" />
            </Link>
          </div>
          <div className="col-span-6">
            <div className="flex items-center justify-end gap-x-[3.75rem]">
              <button>
                <Image src="/images/menu-icon.png" width="72" height="72" alt="menu icon" />
              </button>

              <Link href="/contact-us" className="site-header__btn--cta">
                <span className="default-text">Contact Us</span>
                <span className="hovered-text">Don't be shy</span>
                <div className="shape-box">
                <FaArrowRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
