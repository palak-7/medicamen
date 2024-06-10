"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoMail } from "react-icons/io5";
import { form } from "@/services/user";
import { toast } from "react-toastify";

import Link from "next/link";
const Contact = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await form(formData);
    if (response.success) {
      toast.success(response.message, {
        position: "bottom-left",
      });
      router.push("/");
    } else {
      toast.error(response.message, {
        position: "bottom-left",
      });
    }
  };
  return (
    <div className="overflow-x-clip lg:mt-[100px] md:mt-[110px] sm:mt-[120px] mt-[160px]">
      <section className="" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
                Get in Touch
              </h2>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              {/* address, phone etc */}
              <div className="h-full pr-6">
                <ul className="mb-6 md:mb-0">
                  <li className="mt-20 flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>

                    <Link
                      href="https://maps.app.goo.gl/vMc3NHctk6LpYFw78"
                      target="__blank"
                      className="ml-4 mb-4 hover:text-secondary"
                    >
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                        Our Address
                      </h3>
                      <p className="text-gray-600">
                        1506, Chiranjiv Tower, 43 Nehru Place,
                      </p>
                      <p className="text-gray-600">
                        New Delhi - 110019 (India)
                      </p>
                    </Link>
                  </li>

                  <Link
                    href="tel:+91-11-47589500"
                    className="hover:text-secondary"
                    target="__blank"
                  >
                    <li className="flex">
                      <div className="hover:text-secondary flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                          <path d="M15 7a2 2 0 0 1 2 2"></path>
                          <path d="M15 3a6 6 0 0 1 6 6"></path>
                        </svg>
                      </div>

                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                          Phone Number
                        </h3>
                        <p className="text-gray-600">+91-11-47589500</p>
                      </div>
                    </li>
                  </Link>
                  <Link
                    href="mailto:info@medicamen.com"
                    className="hover:text-secondary"
                    target="__blank"
                  >
                    <li className="flex">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                        <IoMail />
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                          Email Address
                        </h3>
                        <p className="text-gray-600">info@medicamen.com</p>
                      </div>
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl md:px-12" id="form">
                <h2 className="mb-4 text-2xl font-bold">
                  Ready to Get Started?
                </h2>
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      {/* name */}
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="name"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Your name"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      {/* email */}
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Your email address"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      {/* phone */}
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="phone"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="number"
                          id="phone"
                          placeholder="Your Phone Number"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/* subject */}
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="subject"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="text"
                        id="subject"
                        placeholder="Subject"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    {/* message */}
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="message"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="message"
                        name="message"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
