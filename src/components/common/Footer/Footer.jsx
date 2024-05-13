import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* <!--Grid--> */}
          <div className="py-14 grid grid-cols-12 gap-x-5 gap-y-8">
            <div className="col-span-full xl:col-span-3 relative bg-gradient-to-t from-primary to-secondary/40 rounded-2xl gap-12 p-6 xl:w-72 h-96 flex flex-col justify-center items-center">
              <Link href="/" className="flex justify-center lg:justify-start">
                <Image src="/logo.png" width={300} height={300} alt="logo" />
              </Link>
              <p className="text-center text-gray-200">
                MEDICAMEN Biotech Limited (MBL) is committed to providing
                quality medicines at an affordable cost.
              </p>

              <div className="flex  space-x-4 sm:justify-center  ">
                <Link
                  href="https://www.instagram.com/medicamenbiotech/"
                  target="_blank"
                  className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61559005437038"
                  target="__blank"
                  className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/13715941/admin/feed/posts/"
                  target="__blank"
                  className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://twitter.com/MedicamenL38700"
                  target="__blank"
                  className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md"
                >
                  <FaXTwitter />
                </Link>
              </div>
            </div>

            <div className="block text-center xl:text-left xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3 xl:pl-5">
              <h4 className="text-lg text-gray-900 font-bold mb-9">
                Get In Touch
              </h4>
              <ul className="text-gray-900 transition-all duration-500 grid gap-6">
                <li className="hover:text-secondary">
                  <Link href="mailto:info@medicamen.com" target="__blank">
                    info@medicamen.com
                  </Link>
                </li>
                <li className="hover:text-secondary">
                  <Link href="tel:+91-11-47589500" target="__blank">
                    +91-11-47589500
                  </Link>
                </li>
                <li className="hover:text-secondary">
                  <Link
                    href="https://maps.app.goo.gl/vMc3NHctk6LpYFw78"
                    target="__blank"
                  >
                    1506, Chiranjiv Tower, 43 Nehru Place, New Delhi - 110019
                    (India)
                  </Link>
                </li>
              </ul>
            </div>
            <div className="block xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3">
              <h4 className="text-lg text-gray-900 font-bold mb-9 text-center xl:text-left">
                Information
              </h4>
              <div className="flex gap-6 xl:gap-12 max-xl:justify-center">
                <ul className="text-gray-600 transition-all duration-500 grid gap-6">
                  <li className="hover:text-secondary">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="hover:text-secondary">
                    <Link href="/who-we-are/corporate/key-milestones">
                      Key Milestones
                    </Link>
                  </li>
                  <li className="hover:text-secondary">
                    <Link href="/news">News</Link>
                  </li>
                  <li className="hover:text-secondary">
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li className="hover:text-secondary">
                    <Link href="/faqs">FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="block xl:py-16 col-span-full md:col-span-4 xl:col-span-3">
              <h4 className="text-lg text-gray-900 font-bold mb-9 text-center xl:text-left">
                Products
              </h4>
              <div className="flex gap-6 xl:gap-12 max-xl:justify-center">
                <ul className="text-gray-600 transition-all duration-500 grid gap-6">
                  <li className="hover:text-secondary">
                    <Link href="/product-and-therepy/product/cancer-care">
                      Cancer Care
                    </Link>
                  </li>
                  <li className="hover:text-secondary">
                    <Link href="/product-and-therepy/product/cardiolog">
                      Cardiology
                    </Link>
                  </li>
                  <li className="hover:text-secondary">
                    <Link href="/product-and-therepy/product/cns">CNS</Link>
                  </li>
                  <li className="hover:text-secondary">
                    <Link href="/product-and-therepy/product/diabetology">
                      Diabetology
                    </Link>
                  </li>
                  <li className="hover:text-secondary">
                    <Link href="/product-and-therepy/product/pain-management">
                      Pain Management
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!--Grid--> */}
        </div>
        <div className="py-4 bg-indigo-50">
          <div className="flex items-center justify-center">
            <span className="text-sm text-gray-800 ">
              Copyright © 2024, MEDICAMEN BIOTECH LIMITED. All Rights Reserved.{" "}
              <span>
                Designed by{" "}
                <a href="https://tekbooster.com" className="text-primary">
                  TekBooster
                </a>
              </span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
