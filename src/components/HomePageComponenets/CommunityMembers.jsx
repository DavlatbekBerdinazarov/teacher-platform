import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swipper.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const teachers = [
  {
    id: 1,
    name: "John Smith",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D",
    experience: 5,
  },
  {
    id: 2,
    name: "Bob Smith",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    experience: 3,
  },
  {
    id: 3,
    name: "Anna Cosley",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    experience: 4,
  },
  {
    id: 4,
    name: "Bill Gates",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    experience: 2,
  },
  {
    id: 5,
    name: "Robert Bean",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D",
    experience: 3.5,
  },
  {
    id: 6,
    name: "Jane Smith",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    experience: 5,
  },
  {
    id: 7,
    name: "Carolina James",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    experience: 4.5,
  },
];

function calculateColumnCount(screenWidth) {
    let columnCount;
    if (screenWidth > 1024) {
      columnCount = 6;
    } else if (screenWidth > 768 && screenWidth < 1024) {
      columnCount = 4;
    } else if (screenWidth <= 640) {
      columnCount = 2;
    } else {
      columnCount = 2;
    }
    return columnCount;
  }
export default function CommunityMembers() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
      const columnCount = calculateColumnCount(screenWidth);
  return (
    <div className="py-12">
      <div>
        <span className="h-2 w-24 rounded-sm bg-cherry block"></span>
        <h1 className=" capitalize text-4xl font-bold text-plum my-8">
          Kamandamiz a'zolari
        </h1>
        <p className=" text-mutedtxt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          blanditiis eius.
        </p>
      </div>

      <Swiper
        slidesPerView={columnCount}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="my-12 flex flex-wrap gap-3 h-[340px]"
      >
        {teachers.map((teacher) => {
          return (
            <SwiperSlide
              key={teacher.id}
              className="h-[247px] w-[190px] rounded-xl border-[2px] border-[#EAEDEE] bg-white p-5 flex flex-col justify-center items-center gap-4"
            >
              <div className=" w-[120px] h-[120px] rounded-full">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={teacher.image}
                  alt={teacher.name}
                />
              </div>
              <div className="text-center">
                <h2 className="text-plum font-semibold">{teacher.name}</h2>
                <h2 className="text-plum font-medium">{teacher.experience} yil tajriba</h2>
                <p>Frontend</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
