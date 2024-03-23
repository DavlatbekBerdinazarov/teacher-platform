import React from "react";
import { FaStar } from "react-icons/fa6";
import { Progress } from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid, Pagination } from 'swiper/modules';

const pupilsComments = [
    {
        id: 1,
        name: "Morgan Miles",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4,
        course: "Frontend",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: 2,
        name: "Morgan Miles",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 3,
        course: "Frontend",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: 3,
        name: "Robert Miles",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 5,
        course: "Frontend",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: 4,
        name: "Robert Miles",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 2,
        course: "Frontend",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: 5,
        name: "Robert Miles",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 5,
        course: "Frontend",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: 6,
        name: "Robert Miles",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 3,
        course: "Frontend",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },

]

export default function RankingTeachers() {
  return (
    <div className="mt-9 ">
      <h1 className=" text-cherry text-xl font-semibold mt-12">fikrlar</h1>

      <h1 className="text-4xl font-bold text-plum my-8">
        O'quvchilarimiz fikrlari
      </h1>

      <div className="w-full h-[186px] bg-[#EAEDEE] rounded-lg p-8">
        <div className="flex gap-7">
          <div className="leading-10 flex flex-col justify-center items-center w-[240px]">
            <div className="flex items-center gap-4">
              <h1 className=" text-[96px] font-extrabold">4.5</h1>
              <FaStar className=" text-yellow-600 text-6xl font-extrabold" />
            </div>
            <div className="mt-4 h-8 bg-plum rounded-3xl text-white px-5 flex items-center justify-center">
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

      {/* <div className="flex gap-4 mt-12 bg-orange-600">
        <div className="w-1/2 flex pt-2 gap-4 sm:gap-8 bg-indigo-400">
          <div className="h-[90px] sm:h-[128px] w-[128px] rounded-full">
            <img
              className="w-full h-full rounded-full object-cover"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          <div>
            <h1 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2">Regina Miles</h1>
            <h2>Kurs: Frontend</h2>
            <Rating value={4} />
            <p className=" text-mutedtxt">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
        
      </div> */}
      <div className="h-24">Pagination</div>
    </div>
  );
}
