"use client"
import {Teachears} from "./_components/teachears";
import { Search } from "./_components/search";


export default function TeachearDatails(){
  return (
    <section className="flex flex-col items-center justify-center mt-[]">
      <Search/>
      <Teachears/>
    </section>
  );
}

