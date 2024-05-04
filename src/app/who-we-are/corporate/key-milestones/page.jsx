import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <div className="lg:ml-3 lg:mt-0 mt-28 mx-4">
          <Image
            src="/key-milestone.png"
            width={500}
            height={300}
            className="lg:h-[300px] lg:w-[500px] h-[200px] lg:mt-10"
            alt=""
          />
        </div>
        <div className="col-span-2 p-5">
          <h1 className="font-bold text-4xl text-center">Key Milestones</h1>
          <p className="mt-3 leading-loose">
            MEDICAMEN Biotech has constantly strived to be on the path of growth
            on the strength of its brilliant human resource, world class
            facilities and a global vision of its Management.
            <br />
            <br /> From being a purely Formulation manufacturer of general
            products, the Company has diversified into setting up a
            state-of-the-art R&D Centre followed by a most modern API
            manufacturing facility and, lastly, setting up a highly auditable
            facility for manufacturing Oncology injectables and OSDs which will
            stand the test of leading global regulatory agencies.
            <br />
            <strong>
              Please find below our journey from humble beginnings to being a
              vertically integrated Group:
            </strong>
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-4xl text-center mt-10">
          Chronological Order
        </h1>
        <div className="flex justify-center mt-10">
          <div className="lg:flex">
            <Image
              src="/chronology/sign1.png"
              width={200}
              height={300}
              alt=""
            />
            <div className="grid grid-cols-2 gap-4 mx-2">
              <div>
                <div>&#8226;1993</div>
                <p>Medicamen established.</p>
              </div>
              <div>
                <div>&#8226;1995</div>
                <p>IPO issued – BSE listed.</p>
              </div>
              <div>
                <div>&#8226;1996</div>
                <p>Operations started - Bhiwadi FDF Plant</p>
              </div>
              <div>
                <div>&#8226;1998</div>
                <p>WHO-GMP Received – Bhiwadi FDF Plant</p>
              </div>
              <div>
                <div>&#8226;2000</div>
                <p>ISO certification – Bhiwadi FDF Plant</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary/30 lg:mx-20 p-10 flex justify-center mt-10">
          <div className="lg:flex">
            <Image
              src="/chronology/sign2.png"
              width={200}
              height={300}
              className="mr-10"
              alt=""
            />
            <div className="grid grid-cols-1 gap-4">
              <div>
                <div>&#8226;2001: Global Accreditation</div>
                <p className="">
                  NDA(Uganda), ANVISA(Brazil),FM HACA( Ethiopia)-Bhiwadi FDF
                  Plant
                </p>
              </div>
              <div>
                <div>&#8226;2007</div>
                <p>Operations started – Haridwar Unit-I (FDF)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:mx-20 mx-4 mt-10">
          <div className="lg:flex">
            <Image
              src="/chronology/sign1.png"
              width={200}
              height={300}
              alt=""
            />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div>&#8226;2016</div>
                <p>
                  Shivalik Rasayan Ltd take controlling stake of Medicamen
                  Biotech Ltd
                </p>
              </div>
              <div>
                <div>&#8226;2018</div>
                <p>
                  New R&D center setup along with Upgradation & Mordernization
                  of Bhiwadi FDF plant
                </p>
              </div>
              <div>
                <div>&#8226;2019: Global Accreditation</div>
                <p>ABD(Philippines), CECMED(Cuba)-Bhiwadi FDF Plant</p>
              </div>
              <div>
                <div>&#8226;2020</div>
                <p>Global API Facility started– Dahej API Plant</p>
              </div>
              <div>
                <div>&#8226;2000</div>
                <p>ISO certification – Bhiwadi FDF Plant</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary/30 mx-4 lg:mx-20 p-10 flex justify-center mt-10">
          <div className="lg:flex">
            <Image
              src="/chronology/sign4.png"
              width={200}
              height={300}
              className="mr-10"
              alt=""
            />
            <div className="grid grid-cols-1 gap-4">
              <div>
                <div>&#8226;2021</div>
                <p>
                  Operations started: Haridwar formulation Unit –II(FDF)
                  (oncology)
                </p>
              </div>
              <div>
                <div>&#8226;2021</div>
                <p>Filing API USDMFs & CEPs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
