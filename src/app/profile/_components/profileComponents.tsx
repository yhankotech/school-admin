import React from 'react';
import Image from 'next/image';
import Yhanko from "../../../assets/yhankoIMG.png";

export function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <main className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr] lg:grid-cols-[3fr_1.5fr_1fr]">
          {/* Left Content  */}
          <section className="space-y-8">
            {/* Profile Card */}
            <article className="bg-purple-700 rounded-xl shadow-lg p-6 relative text-white overflow-hidden">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 relative">
                  <Image
                    src={Yhanko}
                    alt='avatar'
                    className="w-20 h-20 rounded-full border-4 border-white object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">Nabila Azalea</h2>
                  <p className="opacity-75">Admin</p>
                  <p className="opacity-75 flex items-center gap-2 mt-1 text-sm">
                    <span className="material-icons text-white">location_on</span>
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6 text-purple-200 text-sm">
                <div className="flex items-center gap-2">
                  <span className="material-icons text-white">phone</span>
                  <span>+12 345 6789 0</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons text-white">email</span>
                  <span>jordan@mail.com</span>
                </div>
              </div>
              {/* Abstract circles shapes */}
              <div aria-hidden="true" className="absolute -right-12 -top-10 w-28 h-28 rounded-full bg-orange-400 opacity-70 mix-blend-multiply"></div>
              <div aria-hidden="true" className="absolute -right-20 -bottom-14 w-36 h-36 rounded-full bg-yellow-400 opacity-70 mix-blend-multiply"></div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}