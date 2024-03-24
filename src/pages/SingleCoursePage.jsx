import React from "react";
import { BsTelegram } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import RankingTeachers from "../components/HomePageComponenets/RankingTeachers";
import Consultation from "../components/HomePageComponenets/Consultation";

const selectedData = [
  {
    id: 1,
    courseName: "Frontend",
    courseImage: "/course-1.png",
    desc: "The gradual accumulation of information about atomic and small-scale behaviour. The gradual accumulation of information about atomic and small-scale behaviour",
    price: 230,
  },
];

export default function SingleCoursePage() {
  return (
    <>
      {selectedData.map((video) => {
        return (
          <div key={video.id}>
            <div className=" bg-main pt-12 pb-5">
              <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
                <span className="h-2 w-24 rounded-sm bg-cherry block"></span>
                <h1 className=" capitalize text-4xl font-bold text-plum my-8">
                  {video.courseName}
                </h1>
              </div>
            </div>

            {/* main information */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 ">
              <div className="w-full grid grid-cols-3 gap-8 py-4">
                <div className=" col-span-3 lg:col-span-2 ">
                  <div className="flex justify-between">
                    <h2 className="font-semibold">Kategoriyasi</h2>
                    <h3>
                      {" "}
                      <span className="text-xl font-bold text-plum">
                        23
                      </span>{" "}
                      marta sotib olingan
                    </h3>
                  </div>

                  <div className="my-6">
                    <h2 className="text-plum font-bold">Kurs haqida</h2>
                    <p className="hidden md:block">
                    Мы представляем и подбираем курсы в наиболее развитых областях не только в нашей стране, но и по всему миру.Мы представляем и подбираем курсы в наиболее развитых областях не только в нашей стране, но и по всему миру.Мы представляем и подбираем курсы в наиболее развитых областях не только в нашей стране, но и по всему миру.Мы представляем и подбираем курсы в наиболее развитых областях не только в нашей стране, но и по всему миру.Мы представляем и подбираем курсы в наиболее развитых областях не только в нашей стране, но и по всему миру.Мы представляем и подбираем курсы в наиболее развитых областях не только в нашей стране, но и по всему миру.Мы представляем и подбираем курсы в наиболее развитых областях не только в нашей стране, но и по всему миру.Мы представляем и подбираем курсы в наиболее развитых областях не только в нашей стране, но и по всему миру.Мы представляем и подбираем курсы в наиболее развитых областях не только в нашей стране, но и по всему миру.Мы представляем и подбираем курсы в наиболее развитых областях не только в нашей стране, но и по всему миру.Мы представляем и подбираем курсы в наиболее развитых областях не только в нашей стране, но и по всему миру.Мы представляем и подбираем курсы в наиболее развитых областях не только в нашей стране, но и по всему миру.
                    </p>
                    <p className="block lg:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis architecto consequuntur praesentium dolorem tenetur porro? Maxime blanditiis similique optio pariatur omnis explicabo autem sequi error odit.</p>
                  </div>

                  <div className="min-h-[160px] w-full p-2 sm:p-4 border-2 rounded-xl flex items-start gap-6">
                    <div className=" min-w-[128px] h-[128px] rounded-full">
                      <img className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="wfe" />
                    </div>

                    <div className="w-full">
                      <div className=" flex justify-between items-center">
                        <h2 className="text-plum font-semibold">Jessica Alba</h2>

                        <article className="flex items-center gap-3 text-cherry text-2xl mt-5">
                          <FaInstagram />
                          <BsTelegram />
                          <FaFacebook />
                        </article>
                      </div>

                      <p className=" text-mutedtxt font-medium text-sm">Programmer</p>

                      <p className=" text-mutedtxt font-medium text-sm block lg:hidden">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore molestias?</p>
                      <p className=" text-mutedtxt font-medium text-sm mt-2 pb-8 hidden lg:block">Мы представляем и подбираем курсы в наиболее развитых областях не только в нашей стране, но и по всему мируМы представляем и подбираем курсы в наиболее развитых областях не только в нашей стране, но и по всему миру</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 md:col-span-2 lg:col-span-1">
                  <div
                    key={video.id}
                    className=" col-span-1 py-3 sm:p-5 rounded-md flex flex-col justify-center bg-white shadow-xl"
                  >
                    <img
                      className="h-[200px]"
                      src={video.courseImage}
                      alt="cours img"
                    />
                    <div className="px-3 sm:px-0">
                      <div className="flex gap-5 justify-between items-baseline">
                        <button className="bg-cherry mt-3 text-white w-1/2 md:w-[200px] py-4 rounded active:text-deep-orange-50">
                          Kursni boshlash
                        </button>
                        <span className="text-plum font-bold relative top-4">
                          {video.price} ming
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <RankingTeachers/>
              </div>

            </div>
            <div>
              <Consultation/>
            </div>
          </div>
        );
      })}
    </>
  );
}
