"use client"

import {TeacherProfile } from "./_components/teacherProfile";
import { ScheduleCard } from "../teachear-deatils/_components/sheduleCard";

import React from "react";

const TeacherDetails = () => {

return (
    <div className="min-h-screen p-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 ">
          {/* Profile Section */}
          <div className="flex-1 w-[55rem]">
            <TeacherProfile />
          </div>
          
          {/* Schedule Section */}
          <div className="flex-1 lg:max-w-sm">
            <ScheduleCard />
          </div>
        </div>
      </div>
    </div>
  )
};

export default TeacherDetails;