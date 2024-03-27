import { Input } from "@material-tailwind/react";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { Select, Option } from "@material-tailwind/react";
import AllCourses from "../components/CoursesPageComponents/AllCourses";
import CommunityMembers from "../components/HomePageComponenets/CommunityMembers";
import Consultation from "../components/HomePageComponenets/Consultation";
import RankingTeachers from "../components/HomePageComponenets/RankingTeachers";

export default function CoursesPage() {
  return (
    <div>
      <div className=" bg-main pt-12 pb-5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <span className="h-2 w-24 rounded-sm bg-cherry block"></span>
          <h1 className=" capitalize text-4xl font-bold text-plum my-8">
            Kurslar
          </h1>
        </div>
      </div>

      {/* courses */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <div className="p-4 flex flex-wrap gap-4 items-end shadow-lg rounded-xl mb-4">
          <div class="w-full sm:w-4/5 xl:w-2/5">
            <div class="relative w-full min-w-[200px] h-10">
              <div class="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                <IoSearch />
              </div>
              <Input
                type="text"
                className="peer w-full h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 !border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                placeholder="qidirish..."
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
          </div>

          <div className="w-full md:w-[200px]">
            <label className=" font-semibold" htmlFor="">Kurs kategoriyasi</label>
            <Select
              className="peer w-full h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-blue-gray-200 text-sm px-3 py-2.5 rounded-[7px] !pr-9 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{
                className: "",
              }}
            >
              <Option defaultValue={true}>HTML</Option>
              <Option>React</Option>
              <Option>Vue</Option>
              <Option>Angular</Option>
              <Option>Svelte</Option>
            </Select>
          </div>

          <div className="">
            <label className=" font-semibold" htmlFor="">Narx bo'yicha:</label>
            <div className="flex md:flex-nowrap flex-wrap gap-4">
              <Input
                type="number"
                className="peer w-full h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-blue-gray-200 text-sm px-3 py-2.5 rounded-[7px] !pr-9 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                placeholder="...dan"
                labelProps={{
                  className: "hidden",
                }}
              />
              <Input
                type="number"
                className="peer w-full md:w-[200px] h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 !border focus:border-2 border-t-blue-gray-200 text-sm px-3 py-2.5 rounded-[7px] !pr-9 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                placeholder="...gacha"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <AllCourses/>
        </div>

        <div>
          <CommunityMembers/>
        </div>

      </div>
      <div>
        <Consultation/>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <RankingTeachers/>
      </div>


    </div>
  );
}
