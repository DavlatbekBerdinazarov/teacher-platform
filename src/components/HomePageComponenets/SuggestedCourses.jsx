import { Button } from "@material-tailwind/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function SuggestedCourses() {
  return (
    <div className="py-6 md:py-10 xl:py-16">
      <h1 className=" text-cherry text-xl font-semibold mt-12">
        kurslar
      </h1>

      <h1 className="text-3xl font-bold text-plum my-4">Sizga mos keluvchi yo'nalishni tanlang</h1>
      <p className=" text-mutedtxt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem animi non nemo, minima officiis quidem! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus.</p>

      <h1 className="my-3 text-cherry font-semibold text-3xl">Eng ommabop kurslar</h1>

      {/* Courses */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 border-1">

            <div className=" col-span-1 p-5 rounded-md flex flex-col justify-center bg-white  shadow-xl">
                <img className="h-[200px]" src="/course-1.png" alt="cours img" />
                <div>
                    <h1 className="my-4 font-bold text-plum">FrontEnd</h1>
                    <p className="h-1 w-12 bg-cherry"></p>
                    <p className="my-3 text-mutedtxt">
                        The gradual accumulation of information about atomic and small-scale behaviour. The gradual accumulation of information about atomic and small-scale behaviour
                    </p>
                    <div className="flex gap-5 justify-between items-baseline">
                        <button className="bg-cherry mt-3 text-white w-1/2 md:w-[200px] py-4 rounded active:text-deep-orange-50">Kursni boshlash</button>
                        <span className="text-plum font-bold relative top-4">230 ming</span>
                    </div>
                </div>
            </div>
            
            <div className=" col-span-1 p-5 rounded-md flex flex-col justify-center bg-white  shadow-xl">
                <img className="h-[200px]" src="/course-1.png" alt="cours img" />
                <div>
                    <h1 className="my-4 font-bold text-plum">BackEnd</h1>
                    <p className="h-1 w-12 bg-cherry"></p>
                    <p className="my-3 text-mutedtxt">
                        The gradual accumulation of information about atomic and small-scale behaviour. The gradual accumulation of information about atomic and small-scale behaviour
                    </p>
                    <div className="flex gap-5 justify-between items-baseline">
                        <button className="bg-cherry mt-3 text-white w-1/2 md:w-[200px] py-4 rounded active:text-deep-orange-50">Kursni boshlash</button>
                        <span className="text-plum font-bold relative top-4">230 ming</span>
                    </div>
                </div>
            </div>
            <div className=" col-span-1 p-5 rounded-md flex flex-col justify-center bg-white  shadow-xl">
                <img className="h-[200px]" src="/course-1.png" alt="cours img" />
                <div>
                    <h1 className="my-4 font-bold text-plum">Android Studio</h1>
                    <p className="h-1 w-12 bg-cherry"></p>
                    <p className="my-3 text-mutedtxt">
                        The gradual accumulation of information about atomic and small-scale behaviour. The gradual accumulation of information about atomic and small-scale behaviour
                    </p>
                    <div className="flex gap-5 justify-between items-baseline">
                        <button className="bg-cherry mt-3 text-white w-1/2 md:w-[200px] py-4 rounded active:text-deep-orange-50">Kursni boshlash</button>
                        <span className="text-plum font-bold relative top-4">230 ming</span>
                    </div>
                </div>
            </div>
            <div className=" col-span-1 p-5 rounded-md flex flex-col justify-center bg-white  shadow-xl">
                <img className="h-[200px]" src="/course-1.png" alt="cours img" />
                <div>
                    <h1 className="my-4 font-bold text-plum">FrontEnd</h1>
                    <p className="h-1 w-12 bg-cherry"></p>
                    <p className="my-3 text-mutedtxt">
                        The gradual accumulation of information about atomic and small-scale behaviour. The gradual accumulation of information about atomic and small-scale behaviour
                    </p>
                    <div className="flex gap-5 justify-between items-baseline">
                        <button className="bg-cherry mt-3 text-white w-1/2 md:w-[200px] py-4 rounded active:text-deep-orange-50">Kursni boshlash</button>
                        <span className="text-plum font-bold relative top-4">230 ming</span>
                    </div>
                </div>
            </div>
            
            <div className=" col-span-1 p-5 rounded-md flex flex-col justify-center bg-white  shadow-xl">
                <img className="h-[200px]" src="/course-1.png" alt="cours img" />
                <div>
                    <h1 className="my-4 font-bold text-plum">BackEnd</h1>
                    <p className="h-1 w-12 bg-cherry"></p>
                    <p className="my-3 text-mutedtxt">
                        The gradual accumulation of information about atomic and small-scale behaviour. The gradual accumulation of information about atomic and small-scale behaviour
                    </p>
                    <div className="flex gap-5 justify-between items-baseline">
                        <button className="bg-cherry mt-3 text-white w-1/2 md:w-[200px] py-4 rounded active:text-deep-orange-50">Kursni boshlash</button>
                        <span className="text-plum font-bold relative top-4">230 ming</span>
                    </div>
                </div>
            </div>
            <div className="col-span-1 p-5 rounded-md flex flex-col justify-center bg-white shadow-xl">
                <img className="h-[200px]" src="/course-1.png" alt="cours img" />
                <div>
                    <h1 className="my-4 font-bold text-plum">Android Studio</h1>
                    <p className="h-1 w-12 bg-cherry"></p>
                    <p className="my-3 text-mutedtxt">
                        The gradual accumulation of information about atomic and small-scale behaviour. The gradual accumulation of information about atomic and small-scale behaviour
                    </p>
                    <div className="flex gap-5 justify-between items-baseline">
                        <button className="bg-cherry mt-3 text-white w-1/2 md:w-[200px] py-4 rounded active:text-deep-orange-50">Kursni boshlash</button>
                        <span className="text-plum font-bold relative top-4">230 ming</span>
                    </div>
                </div>
            </div>

        </div>
        <Link to='#' className="w-full flex items-center justify-center mt-12">
            <Button className="flex items-center justify-around gap-4 text-[12px] capitalize rounded">barchasi <FaArrowRightLong/></Button>
        </Link>
      </div>
    </div>
  );
}
