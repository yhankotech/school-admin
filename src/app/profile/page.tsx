"use client";
import { UserProfileInformations } from "./_components/UserProfileInformations";
import { UserDashboard } from "./_components/profileComponents";

export default function Settings(){
    return (
        <section>
          <UserDashboard/>
          <UserProfileInformations/>
        </section>
    )
}