'use client';

import clsx from "clsx";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

const links = [
    {
        name: "All",
        href: "/all",
    },
    {
        name: "Movies",
        href: "/movie",
    },
    {
        name: "Series",
        href: "/series",
    },
];

function NavBar(){
    const searchParams = useSearchParams();
    const pathname = usePathname();

    return (
        <ul className="flex gap-4">
            {links.map(link => (
                <li key={link.name}>
                    <Link 
                        href={`${link.href}?${searchParams.toString()}`}
                        className={clsx(
                            "w-20 h-11 p-2 flex justify-center items-center rounded-lg hover:outline-2 hover:outline-offset-3 active:opacity-80", 
                            {
                                "bg-violet-950 hover:outline-violet-950": pathname !== link.href,
                                "bg-amber-50 text-violet-950 hover:outline-amber-50": pathname === link.href,
                            },
                        )}
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default NavBar;