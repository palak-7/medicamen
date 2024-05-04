import React from "react";
import Flag from "react-world-flags";
import Image from "next/image";
const page = () => {
  return (
    <div className="overflow-x-clip lg:mt-[170px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
      <h1 className="font-bold text-4xl text-center pt-5 mb-10">
        Global Footprints
      </h1>
      <div className="lg:flex justify-evenly gap-x-2">
        <Image
          src="/countries.jpg"
          width={500}
          height={400}
          className="mx-5"
          alt=""
        />
        <div className="grid lg:grid-cols-2 lg:ml-0 ml-3">
          <div className="flex">
            <Flag
              code="br"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">Brazil:</div>
              <div>ANVISA</div>
            </div>
          </div>
          <div className="flex">
            <Flag
              code="bt"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">Bhutan:</div>
              <div>DRA</div>
            </div>
          </div>
          <div className="flex">
            <Flag
              code="cm"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">Cameroon:</div>
              <div>MPH</div>
            </div>
          </div>
          <div className="flex">
            <Flag
              code="cd"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">Congo:</div>
              <div>MPH</div>
            </div>
          </div>
          <div className="flex">
            <Flag
              code="et"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">Ethiopia:</div>
              <div>FMHACA</div>
            </div>
          </div>
          <div className="flex">
            <Flag
              code="gh"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">Ghana:</div>
              <div>FDB</div>
            </div>
          </div>
          <div className="flex">
            <Flag
              code="ci"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">Ivory Coast:</div>
              <div>MOH</div>
            </div>
          </div>
          <div className="flex">
            <Flag
              code="ke"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">Kenya:</div>
              <div>MHPPB</div>
            </div>
          </div>
          <div className="flex">
            <Flag
              code="ls"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">Lesotho:</div>
              <div>NDSO</div>
            </div>
          </div>
          <div className="flex">
            <Flag
              code="mw"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">Malawi:</div>
              <div>MPPB</div>
            </div>
          </div>
          <div className="flex">
            <Flag
              code="na"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">Namibia:</div>
              <div>NMRC</div>
            </div>
          </div>
          <div className="flex">
            <Flag
              code="ng"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">Nigeria:</div>
              <div>NAFDAC</div>
            </div>
          </div>
          <div className="flex">
            <Image src="/who.png" width={40} height={8} alt="" />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">World Health Organisation:</div>
              <div>WHO</div>
            </div>
          </div>
          <div className="flex">
            <Image src="/paho.jpg" width={40} height={8} alt="" />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">
                Pan American Health Organisation:
              </div>
              <div>PAHO</div>
            </div>
          </div>
          <div className="flex">
            <Flag
              code="ph"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">Philippines:</div>
              <div>BFAD</div>
            </div>
          </div>
          <div className="flex">
            <Flag
              code="ss"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">South Sudan:</div>
              <div>MOH</div>
            </div>
          </div>
          <div className="flex">
            <Flag
              code="lk"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">Sri Lanka:</div>
              <div>NMRA</div>
            </div>
          </div>
          <div className="flex">
            <Flag
              code="tz"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">Tanzania:</div>
              <div>TFDA</div>
            </div>
          </div>
          <div className="flex">
            <Flag
              code="ug"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">Uganda:</div>
              <div>NDA</div>
            </div>
          </div>
          <div className="flex">
            <Flag
              code="vn"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">Vietnam:</div>
              <div>DA</div>
            </div>
          </div>
          <div className="flex">
            <Flag
              code="vn"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">Vietnam:</div>
              <div>DA</div>
            </div>
          </div>
          <div className="flex">
            <Flag
              code="zw"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">Zimbabwe:</div>
              <div>MCAZ</div>
            </div>
          </div>
          <div className="flex">
            <Flag
              code="cu"
              className=" w-10 h-10"
              fallback={<span>Unknown</span>}
            />
            <div className="mt-2 ml-2 flex">
              <div className="font-semibold">Cuba:</div>
              <div>CECMED</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
