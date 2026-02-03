'use client';

import Link from "next/link";
import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";

const links = [
    {
        title: "All",
        href: "/all",
    },
    {
        title: "Movies",
        href: "/movie",     
    },
    {
        title: "Series",
        href: "/series"
    },
]

function NavBar(){
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const s = searchParams?.get("s") || "";

    return (
        <ul className="flex justify-center mx -auto">
            {links.map(link => (
                <li
                    key={link.title}
                >
                    <Link
                        href={`${link.href}?s=${s}`}
                        className={clsx({
                            "underline": pathname === link.href,
                        })}
                    >
                        {link.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default NavBar;