"use client"

import {TeacherProfile } from "./_components/teacherProfile";
import { ScheduleCard } from "../teachear-deatils/_components/sheduleCard";

import React from "react";

const TeacherDetails = () => {

return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
          {/* Profile Section */}
          <div className="flex-1">
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