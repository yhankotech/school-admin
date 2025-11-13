"use client"
import AssotiationCards from "./_components/assotiationPepleo";
import { SearchBar } from "./_components/search"

export default function Assotioantio(){
    return(
        <section className="pt-4">
            <div className="pl-4">
                <h1 className="text-3xl font-bold text-foreground mb-2">Assossiação dos estudantes</h1>
                <p className="text-muted-foreground">Visualize e gerencie a assossiação de estudantes da instituição</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <SearchBar />
                <AssotiationCards />
            </div>

        </section>
    )
}