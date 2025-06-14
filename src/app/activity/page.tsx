"use client"

import { TimelineActivity } from "./_components/listActivity";

export default function Profile(){
    return(
        <section className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-2xl mx-auto">
                <TimelineActivity />
            </div>
        </section>
    )
}