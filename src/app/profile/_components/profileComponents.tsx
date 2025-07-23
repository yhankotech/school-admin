import React from 'react';
import Image from 'next/image';
import Yhanko from "../../../assets/yhankoIMG.png";

const contacts = [
  { name: 'Samantha William', status: 'Class V-A' },
  { name: 'Tony Soop', status: 'Class V-A' },
  { name: 'Karen Hope', status: 'Class V-A' },
  { name: 'Jordan Nico', status: 'Class VI-B' },
  { name: 'Nabila Adja', status: 'Class V-C' },
];

const messages = [
  { name: 'Samantha William', message: 'Lorem ipsum dolor sit amet...', time: '12:45 PM' },
  { name: 'Tony Soop', message: 'Lorem ipsum dolor sit amet...', time: '12:45 PM' },
  { name: 'Karen Hope', message: 'Lorem ipsum dolor sit amet...', time: '12:45 PM' },
  { name: 'Jordan Nico', message: 'Lorem ipsum dolor sit amet...', time: '12:45 PM' },
  { name: 'Nabila Adja', message: 'Lorem ipsum dolor sit amet...', time: '12:45 PM' },
];

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

            {/* Contacts */}
            <article className="bg-white rounded-xl shadow p-6 flex flex-col">
              <header className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Contacts</h3>
                <span className="text-sm text-gray-500">You have {contacts.length} contacts</span>
                <button
                  aria-label="Add new contact"
                  className="ml-auto bg-purple-600 hover:bg-purple-700 text-white rounded-full p-1.5 shadow-md flex items-center justify-center w-8 h-8"
                  title="Add Contact"
                >
                  <span className="material-icons text-base select-none">add</span>
                </button>
              </header>
              <div className="flex flex-col divide-y divide-gray-200 max-h-[280px] overflow-y-auto">
                {contacts.map(({ name, status }, index) => (
                  <div
                    key={index}
                    className="py-3 flex items-center justify-between hover:bg-gray-100 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={Yhanko}
                        alt='avatar'
                      />
                      <div>
                        <p className="font-semibold">{name}</p>
                        <p className="text-xs text-gray-500">{status}</p>
                      </div>
                    </div>
                    <button aria-label={`Message ${name}`} className="text-gray-400 hover:text-purple-600 transition-colors">
                      <span className="material-icons">message</span>
                    </button>
                  </div>
                ))}
              </div>
              <button className="mt-4 px-4 py-2 text-purple-600 bg-purple-100 rounded-full w-full font-semibold hover:bg-purple-200 transition">
                View More
              </button>
            </article>

            {/* Messages */}
            <article className="bg-white rounded-xl shadow p-6 flex flex-col">
              <header className="mb-4">
                <label htmlFor="searchMessages" className="sr-only">
                  Search Messages
                </label>
                <input
                  id="searchMessages"
                  type="search"
                  placeholder="Search here..."
                  className="w-full rounded-full bg-gray-100 border border-gray-300 py-2 px-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  aria-label="Search messages"
                />
              </header>
              <div className="flex flex-col divide-y divide-gray-200 max-h-[280px] overflow-y-auto">
                {messages.map(({ name, message, time }, index) => (
                  <div
                    key={index}
                    className="py-3 flex items-center justify-between hover:bg-gray-50 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={Yhanko}
                        alt='avatar'
                        className="w-10 h-10 rounded-full object-cover border border-gray-200"
                      />
                      <div className="flex flex-col">
                        <p className="font-semibold">{name}</p>
                        <p className="text-xs text-gray-500 truncate max-w-[12rem]">{message}</p>
                      </div>
                    </div>
                    <time className="text-xs text-gray-400 flex-shrink-0 ml-4">{time}</time>
                    <button aria-label={`Reply to ${name}`} className="text-gray-400 hover:text-purple-600 ml-3 transition-colors">
                      <span className="material-icons">message</span>
                    </button>
                  </div>
                ))}
              </div>
              <button className="mt-4 px-4 py-2 text-purple-600 bg-purple-100 rounded-full w-full font-semibold hover:bg-purple-200 transition">
                View More
              </button>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}