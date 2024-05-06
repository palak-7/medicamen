"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
const FAQs = () => {
  return (
    <div className="overflow-x-clip lg:mt-[150px] md:mt-[110px] sm:mt-[120px] mt-[200px]">
      <Image
        src="/faqs.png"
        width={1000}
        height={200}
        className="w-full lg:h-[300px]"
      />
      <div className="lg:mx-10 mx-2 my-4 border-t">
        <Accordion transition transitionTimeout={200}>
          <AccordionItem
            header="Fostering a culture of innovation through collaboration for developing enhanced solutions"
            initialEntered
          >
            We believe that our R&D has led, and will continue to lead to new,
            innovative processes that can increase the efficiencies of
            production including developing cost effective manufacturing
            processes, as well as address opportunities that we have identified
            in the global market for our businesses.
          </AccordionItem>

          <AccordionItem header="What is Global Footprints?">
            Medicamen Biotech Limited has presence in More then 35 countries,
            including America, South America, Africa, Latin America, Brazil,
            Asia and Australia and We have a strong commitment towards
            increasing access to safe and affordable generic pharmaceuticals
            worldwide.
          </AccordionItem>

          <AccordionItem header="Area of API Dahej Plant ?">
            <div>
              <strong>Location:</strong> Gujarat
            </div>
            <div>
              <strong>Plant Area:</strong>538195 Sqft.
            </div>
          </AccordionItem>
          <AccordionItem header="Research and Development">
            <div>
              <strong>Location:</strong> Bhiwadi, Rajasthan
            </div>
            <div>
              Approved by Department of Scientific & Industrial Research (DSIR),
              Govt. of India
            </div>
          </AccordionItem>
          <AccordionItem header="Formulation (FDF )Plant Unit I">
            <div>
              <strong>Location:</strong> Haridwar (Unit-I)
            </div>
            <div>
              <strong>Plant Area:</strong>32000 Sqft.
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <img
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && "rotate-180"
          }`}
          src="/chevron-down.svg"
          alt="Chevron"
        />
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left hover:bg-slate-100 ${
          isEnter && "bg-slate-200"
        }`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "p-4" }}
  />
);
export default FAQs;
