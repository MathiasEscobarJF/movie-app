'use client';

import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";

function Pagination({currentPage,totalPages}:{
    currentPage: number,
    totalPages: number,
}){

    const searchParams = useSearchParams();
    const pathname = usePathname();

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page',pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    }

    return (
        <div className="flex gap-2">
            <PaginationArrow
                direction="left"
                href={createPageURL(currentPage - 1)}
                isDisable={currentPage <= 1}
            />
            <div className="w-15 h-10 bg-amber-50 text-black flex justify-center items-center">
                {currentPage}
            </div>
            <PaginationArrow
                direction="right"
                href={createPageURL(currentPage + 1)}
                isDisable={currentPage >= totalPages}
            />
        </div>
    );
}

export default Pagination;

function PaginationArrow({direction,href,isDisable}: {
    direction: "left" | "right",
    href: string,
    isDisable: boolean,
}){
    const title = direction === "left" ? "Back" : "Next";
    return isDisable ? (
        <div className="w-15 h-10 bg-gray-500 text-black flex justify-center items-center rounded-lg">{title}</div>
    ) : (
        <Link 
            href={href}
            className="w-15 h-10 bg-yellow-500 text-black flex justify-center items-center rounded-lg"
        >
            {title}
        </Link>
    );
}