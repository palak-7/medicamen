import React from "react";
import Image from "next/image";
const page = () => {
  const directors = [
    {
      id: 1,
      name: "RAHUL BISHNOI",
      post: "Chairman",
      img: "/directors/team-member-1.jpg",
    },
    {
      id: 2,
      name: "DR. VIMAL SHRAWAT",
      post: "Director",
      img: "/directors/team-member-3.png",
    },
    {
      id: 3,
      name: "ASHWANI KUMAR SHARMA",
      post: "Director",
      img: "/directors/team-member-4.jpg",
    },
    {
      id: 4,
      name: "HARISH PANDE",
      post: "Indenpendent Director",
      img: "/directors/team-member-11.jpg",
    },
    {
      id: 5,
      name: "SURESH KUMAR SINGH",
      post: "Director",
      img: "/directors/team-member-12.jpg",
    },
    {
      id: 6,
      name: "SANJAY BANSAL",
      post: "Director",
      img: "/directors/team-member-13.jpg",
    },
    {
      id: 7,
      name: "SANGEETA BISHNOI",
      post: "Director",
      img: "/directors/team-member-14.jpg",
    },

    {
      id: 8,
      name: "SUMITA DWEDI",
      post: "Director",
      img: "/directors/team-member-15.png",
    },

    {
      id: 9,
      name: "ARUN KUMAR",
      post: "Director",
      img: "/directors/team-member-30.jpg",
    },
  ];
  return (
    <div className="relative overflow-x-clip lg:mt-[200px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
      <h1 className="text-3xl font-bold text-center mx-20">
        OUR LEADERSHIP TEAM HAS A CLEAR VISION & PASSION FOR BEING GLOBAL LEADER
        IN ONCOLOGY & OTHER BRANDED GENERICS.
      </h1>
      <div className="grid grid-cols-4 m-20 gap-4">
        {directors.map((d) => (
          <div
            key={d.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
          >
            <Image
              className="rounded-t-lg w-full"
              src={d.img}
              alt=""
              width={1000}
              height={100}
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {d.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700">{d.post}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
