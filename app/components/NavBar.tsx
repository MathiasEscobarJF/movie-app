'use client';

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
    {
        title: "All",
        href: "/",
    },
    {
        title: "Movies",
        href: "/movies",     
    },
    {
        title: "Series",
        href: "/series"
    },
]

function NavBar(){
    const pathname = usePathname();

    return (
        <nav>
            <ul>
                {links.map(link => (
                    <li
                        key={link.title}
                    >
                        <Link
                            href={link.href}
                            className={clsx({
                                "underline": pathname === link.href,
                            })}
                        >
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;