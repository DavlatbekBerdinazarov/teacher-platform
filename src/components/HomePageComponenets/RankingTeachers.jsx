import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Progress } from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";

import { Swiper, SwiperSlide } from "swiper/react";

import "./rankswiper.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper/modules";

const pupilsComments = [
  {
    id: 1,
    name: "John Smith",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D",
    rating: 4,
    course: "Frontend",
    comments: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    id: 2,
    name: "Bob Smith",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    rating: 3,
    course: "Node js",
    comments: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    id: 3,
    name: "Anna Cosley",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    rating: 5,
    course: "Frontend",
    comments: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    id: 4,
    name: "Bill Gates",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    rating: 2,
    course: "UI UX",
    comments: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    id: 5,
    name: "Robert Bean",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D",
    rating: 5,
    course: "Android",
    comments: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    id: 6,
    name: "Robert Miles",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 3,
    course: "Backend",
    comments: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    id: 7,
    name: "Carolina James",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    rating: 3,
    course: "Frontend",
    comments: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
];

function calculateColumnCount(screenWidth) {
  let columnCount;
  if (screenWidth > 1024) {
    columnCount = 2;
  } else {
    columnCount = 1;
  }
  return columnCount;
}

export default function RankingTeachers() {
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
    <div className="mt-9 ">
      <h1 className=" text-cherry text-xl font-semibold mt-12">fikrlar</h1>

      <h1 className="text-4xl font-bold text-plum my-8">
        O'quvchilarimiz fikrlari
      </h1>

      <div className="w-full sm:h-[186px] bg-[#EAEDEE] rounded-lg p-8">
        <div className="flex flex-col sm:flex-row gap-4 md:gap-7">
          <div className="leading-10 flex flex-col justify-center items-center w-[240px]">
            <div className="flex items-center gap-4">
              <h1 className="text-[45px] md:text-[96px] font-extrabold">4.5</h1>
              <FaStar className=" text-yellow-600 text-3xl md:text-6xl font-extrabold" />
            </div>
            <div className="mt-4 md:h-8 bg-plum rounded-3xl text-white text-sm px-5 flex items-center justify-center">
              634 reviews
            </div>
          </div>

          <ul className="w-full">
            <li className="flex items-center gap-2">
              <h3 className="text-xl">5</h3>{" "}
              <FaStar className="text-yellow-600 text-2xl" />{" "}
              <div className="flex w-full flex-col gap-4">
                <Progress
                  value={94}
                  color="yellow"
                  className="bg-white"
                  variant="filled"
                  size="md"
                />
              </div>
            </li>
            <li className="flex items-center gap-2">
              <h3 className="text-xl">4</h3>{" "}
              <FaStar className="text-yellow-600 text-2xl" />{" "}
              <div className="flex w-full flex-col gap-4">
                <Progress
                  value={74}
                  color="yellow"
                  className="bg-white"
                  variant="filled"
                  size="md"
                />
              </div>
            </li>
            <li className="flex items-center gap-2">
              <h3 className="text-xl">3</h3>{" "}
              <FaStar className="text-yellow-600 text-2xl" />{" "}
              <div className="flex w-full flex-col gap-4">
                <Progress
                  value={34}
                  color="yellow"
                  className="bg-white"
                  variant="filled"
                  size="md"
                />
              </div>
            </li>
            <li className="flex items-center gap-2">
              <h3 className="text-xl">2</h3>{" "}
              <FaStar className="text-yellow-600 text-2xl" />{" "}
              <div className="flex w-full flex-col gap-4">
                <Progress
                  value={24}
                  color="yellow"
                  className="bg-white"
                  variant="filled"
                  size="md"
                />
              </div>
            </li>
            <li className="flex items-center gap-2">
              <h3 className="text-xl">1</h3>{" "}
              <FaStar className="text-yellow-600 text-2xl" />{" "}
              <div className="flex w-full flex-col gap-4">
                <Progress
                  value={4}
                  color="yellow"
                  className="bg-white"
                  variant="filled"
                  size="md"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className=" mt-12 h-[430px] pb-12 mb-12">
        <Swiper
          slidesPerView={columnCount}
          grid={{
            rows: 3,
          }}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="rank-swiper pb-6"
        >
          {pupilsComments.map((element) => {
            return (
              <SwiperSlide key={element.id} className="rank-swipper-slide  ">
                <div className=" flex gap-4 sm:gap-8">
                  <div className="h-[80px] sm:h-[128px] w-[100px] sm:w-[128px] rounded-full">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src={element.image}
                      alt=""
                    />
                  </div>

                  <div>
                    <div className="flex flex-row gap-4 sm:gap-0 sm:flex-col">
                      <h1 className="font-bold text-md sm:text-xl mb-1 sm:mb-2">
                        {element.name}
                      </h1>
                      <h2 className="font-semibold">Kurs: <span className="text-mutedtext font-light">{element.course}</span></h2>
                    </div>
                    <Rating value={4} />
                    <p className=" text-sm text-mutedtxt">{element.comments}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
