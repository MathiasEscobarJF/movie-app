import Link from "next/link";
import { HomeIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

function ToHomeLink(){
    return (
        <Link
            href="/"
            className="w-fit p-2 flex border-2 border-transparent rounded-lg lg:hover:border-amber-50 active:opacity-80"
        >
            <ChevronLeftIcon className="w-6" />
            <HomeIcon className="w-6"/>
        </Link>
    );
}

export default ToHomeLink;