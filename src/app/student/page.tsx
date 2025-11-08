"use client"

import {StudentTable} from "./_components/studentTable";
import {SearchBar} from "./_components/searchBar";

const Student = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-[]">
      <SearchBar/>
      <StudentTable />
    </section>
  );
};

export default Student