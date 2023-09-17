import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import * as content from "../../utils/content";

import FacebookIcon from "./../../public/assets/socials/facebook.svg";
import InstagramIcon from "./../../public/assets/socials/instagram.svg";
import TwitterIcon from "./../../public/assets/socials/twitter.svg";
import LinkedInIcon from "./../../public/assets/socials/linkedin.svg";

function Footer() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 py-4 relative max-w-7xl mx-5 xl:mx-auto">
      {/* Footer Section */}
      <div className="p-12 flex flex-col md:flex-row items-center gap-16 md:4 justify-between bg-neutral-900 rounded-3xl">
        {/* Logo */}
        <button
          type="button"
          onClick={() => router.push("/")}
          className="relative flex items-center gap-1"
        >
          <div className="flex flex-col items-center gap-2 md:text-base semibold text-xl text-th-primary-dark ">
            <Image
              src={`/assets/brand/logo_1.png`}
              alt="menu icon"
              width={80}
              height={80}
            />

            <p className="flex md:hidden text-base semibold lg:text-sm text-white">
              Yes to Youth
            </p>
          </div>
        </button>

        {/* Menu */}
        <div className="flex lg:flex-row flex-col  lg:gap-8 md:gap-3 gap-5">
          {/* Shows */}
          <button
            onClick={() => router.push("/")}
            className="text-lg md:text-sm text-white hover:underline"
          >
            <p className="normal">Communities</p>
          </button>

          {/* Our Work */}
          <button
            onClick={() => router.push("/")}
            className="text-lg md:text-sm text-white hover:underline"
          >
            <p>Events + News</p>
          </button>

          {/* Contact Us */}
          <button
            onClick={() => router.push("/")}
            className="text-lg md:text-sm text-white hover:underline"
          >
            <p>Contact Us</p>
          </button>
        </div>

        {/* Socials */}
        <div className="flex lg:gap-5 gap-7 h-6">
          <Link href={content.socialLinks.linkedin} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <LinkedInIcon width="20" height="20" viewBox="0 0 30 30" />
            </a>
          </Link>

          <Link href={content.socialLinks.twitter} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <TwitterIcon width="25" height="25" viewBox="0 0 30 40" />
            </a>
          </Link>

          <Link href={content.socialLinks.instagram} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <InstagramIcon width="20" height="20" viewBox="0 0 30 30" />
            </a>
          </Link>

          <Link href={content.socialLinks.facebook} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <FacebookIcon width="20" height="20" viewBox="0 0 30 30" />
            </a>
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className=" p-6 flex flex-col md:flex-row gap-1 md:gap-4 items-center justify-center bg-neutral-200 rounded-3xl">
        <p
          className={`text-base md:text-sm text-black `}
        >
          Copyright © Boxplay Ventures {new Date().getFullYear()}
        </p>

        <div className="flex gap-1">
          <p className={` text-base md:text-sm text-black`}>Website by </p>
          <button onClick={() => router.push("/")}>
            <p className={`text-base md:text-sm text-[#B53A3F] hover:underline`}>
              OneClick Creative Agency
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
