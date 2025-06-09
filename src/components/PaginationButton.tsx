"use client";
import { ChevronLeft, ChevronRight } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { PaginationProps } from "@/types/interfaces";

export function PaginationButton({ page, pages, onPageChange }: PaginationProps) {
    function previusPage() {
        if (page > 1) {
            onPageChange(page - 1)
        }
    }

    function nextPage() {
        if (page < pages) {
            onPageChange(page + 1)
        }
    }

    return (
        <div>

            <div className="flex items-center">
                <Button
                    variant="outline"
                    size="icon"
                    className="h-5 w-5 cursor-pointer shadow-none border-none hover:cursor-pointer hover:bg-transparent text-[#C0C2C6] hover:text-[#1D5298]"
                    onClick={previusPage}
                    disabled={page <= 1}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="h-5 w-5 cursor-pointer shadow-none border-none hover:cursor-pointer text-[#C0C2C6] hover:bg-transparent hover:text-[#1D5298]"
                    onClick={nextPage}
                    disabled={page >= pages}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}