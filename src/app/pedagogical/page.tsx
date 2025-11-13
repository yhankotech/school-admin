"use client"
import {Teachears} from "./_components/teachears";
import { Search } from "./_components/search";


export default function TeachearDatails(){
  return (
    <section className="pt-4">
      <div className="pl-4">
        <h1 className="text-3xl font-bold text-foreground mb-2">Área pedagógica</h1>
        <p className="text-muted-foreground">Visualize e gerencie professores e outros profissionais</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Search/>
        <Teachears/>
      </div>
      
    </section>
  );
}

