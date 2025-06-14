"use client"
import {ChatSidebar} from "./_components/chatSideBar";
import {ChatArea} from "./_components/chatArea";

export default function Chat () {
  return (
     <section className="h-screen flex bg-gray-100">
      <ChatSidebar />
      <ChatArea />
    </section>
  );
}