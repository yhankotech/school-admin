"use client"

import {StudentTable} from "./_components/studentTable";
import {SearchBar} from "./_components/searchBar";

const Student = () => {
  return (
    <section className="pt-4">
      <div className="pl-4">
        <h1 className="text-3xl font-bold text-foreground mb-2">Estudantes</h1>
        <p className="text-muted-foreground">Visualize e gerencie estudantes da instituição</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SearchBar/>
        <StudentTable />
      </div>
    </section>
  );
};

export default Student