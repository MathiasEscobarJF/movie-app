'use client';

import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";

function Pagination({totalPages}:{
    totalPages: number,
}){

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page',pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    }

    return (
        <div>
            <PaginationArrow
                direction="left"
                href={createPageURL(currentPage - 1)}
                isDisable={currentPage <= 1}
            />
            <div>
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
        <div>
            {title}
        </div>
    ) : (
        <Link
            href={href}
        >
            {title}
        </Link>
    );
}