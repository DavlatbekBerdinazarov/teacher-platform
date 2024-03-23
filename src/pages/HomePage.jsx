import React from "react";
import SuggestedCourses from "../components/HomePageComponenets/SuggestedCourses";
import PersonalOpportunies from "../components/HomePageComponenets/PersonalOpportunies";
import CommunityMembers from "../components/HomePageComponenets/CommunityMembers";
import Consultation from "../components/HomePageComponenets/Consultation";
import RankingTeachers from "../components/HomePageComponenets/RankingTeachers";

export default function HomePage() {
  return (
    <div className="h-full">
      <div className="max-w-[1440px] mx-auto px-2 sm:px-5 lg:px-10 select-none">
        <div className="h-[90vh] w-full right-0 flex items-center justify-center border-b-2 bg-[#FAFAFA]">
          <div className="w-full h-full z-30 ">
            <div className="xl:w-2/3 w-full flex flex-col gap-6 pt-5 z-10 ">
              <h1 className=" text-cherry text-xl font-semibold mt-12">
                online ta'lim
              </h1>

              <p className="text-3xl md:text-5xl leading-[40px] md:leading-[70px] font-semibold uppercase">
                Dasturlashni <br /> oson va qulay <br /> sharoitda o'rganing
              </p>
              <div className=" h-[470px] my-8">
                <div className="my-6">
                  <p>
                    Hoziroq xarid qiling va{" "}
                    <span className="text-plum font-semibold">10%</span>{" "}
                    chegirmaga ega bo'ling
                  </p>
                </div>
                <div className="flex items-center justify-between z-10">
                  <button
                    onClick={onsubmit}
                    className="bg-cherry mt-3 text-white w-full md:w-[230px] py-4 rounded-md active:text-deep-orange-50"
                  >
                    Darsni boshlash
                  </button>
                </div>
              </div>
            </div>
          </div>
          <img
            className="hidden xl:block absolute bottom-0 right-0 z-0"
            src="header_bg.png"
            alt=""
          />
        </div>
        <div>
          <SuggestedCourses />
        </div>
        <div>
          <PersonalOpportunies/>
        </div>
        <div>
          <CommunityMembers/>
        </div>
      </div>

      {/* OUT OF CONTAINER */}
      <div className="h-full mb-4 ">
        <Consultation/>
      </div>
      <div className="max-w-[1440px] mx-auto px-2 sm:px-5 lg:px-10">
        <RankingTeachers/>
      </div>
    </div>
  );
}
