import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import * as content from "@/utils/content";
import Logo from "./../../public/assets/brand/logo.svg";

function Footer() {
  const router = useRouter();

  return (
    <div>
      <div className="bg-neutral-800">
        <div className=" relative max-w-7xl xl:mx-auto flex flex-col mt-[100px]">
          {/* Footer Area */}
          <div className="flex flex-col md:flex-row gap-16  justify-between items-start z-30 px-6 md:px-12 lg:px-14 py-2 max-w-screen-2xl xl:mx-auto md:my-24 my-8 relative">
            {/* Logo */}
            <button
              type="button"
              onClick={() => router.push("/")}
              className="relative flex items-center gap-1 bg-white px-5 py-4 rounded-2xl"
            >
              <Logo width="150" height="85" viewBox="0 0 65 38" />
            </button>

            {/* Sitemap */}
            <div className="flex items-start flex-col gap-4">
              <p className={`text-xl md:text-sm lg:text-md text-th-text-light`}>
                Sitemap
              </p>

              <button
                onClick={() => router.push("/")}
                className="text-xl md:text-sm lg:text-md  text-white hover:text-th-accent-medium"
              >
                <p>Home</p>
              </button>

              <button
                onClick={() => router.push("/tours")}
                className="text-xl md:text-sm lg:text-md text-white hover:text-th-accent-medium"
              >
                <p>Tours</p>
              </button>

              <button
                onClick={() => router.push("/programs")}
                className="text-xl md:text-sm lg:text-md text-white hover:text-th-accent-medium"
              >
                <p>Programs</p>
              </button>

              <button
                onClick={() => router.push("/about")}
                className="text-xl md:text-sm lg:text-md text-white hover:text-th-accent-medium"
              >
                <p>About</p>
              </button>

              <button
                onClick={() => router.push("/gallery")}
                className="text-xl md:text-sm lg:text-md text-white hover:text-th-accent-medium"
              >
                <p>Gallery</p>
              </button>

              <button
                onClick={() => router.push("/blogs")}
                className="text-xl md:text-sm lg:text-md text-white hover:text-th-accent-medium"
              >
                <p className="text-left">Blogs & News</p>
              </button>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-4">
              <p className={`text-xl md:text-sm lg:text-md text-th-text-light`}>
                Contact Details
              </p>
              <Link
                href={content.contactDetails.googleMapLink}
                className="flex gap-3"
              >
                <Image
                  src="/assets/icons/location.svg"
                  alt="location icon"
                  width={18}
                  height={18}
                />

                <p className={`text-xl md:text-sm lg:text-md text-white`}>
                  {content.contactDetails.address}
                </p>
              </Link>

              <Link href="mailto:info@melo.global" className="flex gap-3">
                <Image
                  src="/assets/icons/mail.svg"
                  alt="mail icon"
                  width={18}
                  height={18}
                />

                <p className={`text-xl md:text-sm lg:text-md text-white`}>
                  {content.contactDetails.email}
                </p>
              </Link>

              <div className="flex flex-row gap-3 ">
                <Image
                  src="/assets/icons/phone.svg"
                  alt="phone icon"
                  width={18}
                  height={18}
                />

                <div className="flex flex-col gap-1">
                  {content.contactDetails.phone.map((data: any, index: any) => (
                    <Link href={`tel:${data}`} className="flex gap-3">
                      <p className={`text-xl md:text-sm lg:text-md text-white`}>
                        {data}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              <p className={`text-xl md:text-sm lg:text-md text-th-text-light`}>
                Connect with us
              </p>
              <div className="flex lg:gap-5 gap-7 h-6">
                <Link href={content.socialLinks.linkedIn}>
                  <Image
                    src="/assets/socials/linkedin.svg"
                    alt="linkedin icon"
                    width={25}
                    height={25}
                  />
                </Link>

                <Link href={content.socialLinks.facebook}>
                  <Image
                    src="/assets/socials/facebook.svg"
                    alt="facebook icon"
                    width={25}
                    height={25}
                  />
                </Link>

                <Link href={content.socialLinks.instagram}>
                  <Image
                    src="/assets/socials/instagram.svg"
                    alt="instagram icon"
                    width={25}
                    height={25}
                  />
                </Link>

                <Link href={content.socialLinks.twitter}>
                  <Image
                    src="/assets/socials/twitter.svg"
                    alt="twitter icon"
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className=" p-6 flex flex-col md:flex-row gap-1 md:gap-4 items-center justify-center bg-th-primary-medium">
        <p className={`text-base md:text-sm text-white `}>
          Copyright © LCC Travel and Tours {new Date().getFullYear()}
        </p>

        <div className="flex gap-1">
          <p className={` text-base md:text-sm text-white`}>Website by </p>
          <button onClick={() => router.push("/")}>
            <p className={`text-base md:text-sm text-white underline`}>
              OneClick Creative Agency
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
