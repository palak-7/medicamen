import React from "react";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import Link from "next/link";

const Top = () => {
  return (
    <div className="bg-primary text-white p-3 lg:flex justify-around">
      {/* social links */}
      <div className="flex justify-center lg:mb-0 mb-2 items-center">
        <Link
          href="https://www.instagram.com/medicamenbiotech/"
          aria-label="social-link"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-6 text-body-color duration-300 hover:text-secondary"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61559005437038"
          aria-label="social-link"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-6 text-body-color duration-300 hover:text-secondary"
        >
          <FaFacebookF />
        </Link>
        <Link
          href="https://www.linkedin.com/company/13715941/admin/feed/posts/"
          aria-label="social-link"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-6 text-body-color duration-300 hover:text-secondary"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href="https://twitter.com/MedicamenL38700"
          aria-label="social-link"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-6 text-body-color duration-300 hover:text-secondary"
        >
          <FaXTwitter />
        </Link>
      </div>
      {/* mail and phone */}
      <div className="lg:flex justify-evenly">
        <Link
          href="tel:+91-11-47589500"
          target="__blank"
          className="flex justify-center lg:mb-0 mb-2 mr-10 hover:text-secondary"
        >
          <FaPhoneAlt className="mt-1 mr-1" />
          +91-11-47589500
        </Link>
        <Link
          href="mailto:info@medicamen.com"
          target="__blank"
          className="flex justify-center lg:mb-0 mb-2 hover:text-secondary"
        >
          <IoMail className="mt-1 mr-1" />
          info@medicamen.com
        </Link>
      </div>
    </div>
  );
};

export default Top;
