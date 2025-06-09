import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "@/lib/icons";
import { MessageConfigurater } from "./MessageConfigurater";
import { RemetenteName } from "./RemetenteName";

import { useState } from "react";

export function SmsNotificationHeader(
  { 
    onFilterChange
  }: { 
    onFilterChange: (filters: string) => void;}) {

    const [searchTerm, setSearchTerm] = useState("");
     
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };

    const handleSearch = () => {

      onFilterChange(searchTerm);
    };

  return (
    <div className="flex justify-between items-center p-4" style={{zIndex: 1}}>
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <MessageConfigurater />
        <RemetenteName/>
      </div>

      {/* Right Section */}
      <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
        <Input
          name="search"
          placeholder="Pesquisar..."
          className="w-72 h-11 hover:border-[#F08F3E] text-[#717F96]"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button type="submit" onClick={handleSearch} variant="default" className="h-11 cursor-pointer border-[#F08F3E] shadow-none border bg-[#FFF9F3] text-[#F08F3E] hover:bg-[#FFF1E3] hover:text-[#F08F3E]">
          <Search className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
}