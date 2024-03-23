import React from "react";
import SuggestedCourses from "../components/HomePageComponenets/SuggestedCourses";
import PersonalOpportunies from "../components/HomePageComponenets/PersonalOpportunies";
import CommunityMembers from "../components/HomePageComponenets/CommunityMembers";
import Consultation from "../components/HomePageComponenets/Consultation";
import RankingTeachers from "../components/HomePageComponenets/RankingTeachers";
import Home from "../components/HomePageComponenets/Home";

export default function HomePage() {
  return (
    <div className="h-full">
      <div>
        <div className=" bg-main">
          <Home/>
        </div>
        <div className="max-w-[1440px] mx-auto px-2 sm:px-5 lg:px-10">
          <SuggestedCourses />
        </div>
        <div className="max-w-[1440px] mx-auto px-2 sm:px-5 lg:px-10">
          <PersonalOpportunies/>
        </div>
        <div className="max-w-[1440px] mx-auto px-2 sm:px-5 lg:px-10">
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
