"use client"
import {ChatSidebar} from "./_components/chatSideBar";
import {ChatArea} from "./_components/chatArea";

export default function Chat () {
  return (
     <section className="h-screen flex w-[70rem]">
      <ChatSidebar />
      <ChatArea />
    </section>
  );
}