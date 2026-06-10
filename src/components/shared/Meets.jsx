import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import ourTeam1 from "@/assets/our_team_1.jpg";
import ourTeam2 from "@/assets/our_team_2.jpg";
import ourTeam3 from "@/assets/our_team_3.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Odegard",
    role: "Chief Finance Manager",
    image: ourTeam1,
  },
  {
    id: 2,
    name: "John Anderson",
    role: "Sales Manager",
    image: ourTeam2,
  },
  {
    id: 3,
    name: "Rosa Gray",
    role: "Executive Vice President",
    image: ourTeam3,
  },
];

const Meets = () => {
  return (
    <section className="w-full bg-[#f8f9fa] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Meet <span className="font-bold">The Team</span>
          </h2>

          <div className="w-20 h-1 bg-[#FF2832] mx-auto mt-5 mb-6"></div>

          <p className="text-gray-500 leading-8 text-[15px] md:text-[16px]">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form by
            injected humour or randomised words which don't look even
            slightly believable.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-md overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-[340px] overflow-hidden">

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">

                  <div className="flex gap-3 translate-y-10 group-hover:translate-y-0 transition-all duration-500">

                    <a
                      href="#"
                      className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#FF2832] hover:text-white transition-all duration-300"
                    >
                      <FaFacebookF />
                    </a>

                    <a
                      href="#"
                      className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#FF2832] hover:text-white transition-all duration-300"
                    >
                      <FaTwitter />
                    </a>

                    <a
                      href="#"
                      className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#FF2832] hover:text-white transition-all duration-300"
                    >
                      <FaLinkedinIn />
                    </a>

                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="py-7 px-5 text-center">

                <h3 className="text-[24px] font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>

                <p className="text-[#FF2832] font-medium text-sm uppercase tracking-wider">
                  {member.role}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Meets;