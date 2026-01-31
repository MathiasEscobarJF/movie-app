'use client';

import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

function Header(){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    function handleChange(value: string){
        const params = new URLSearchParams(searchParams);
        if(value)
            params.set('s',value);
        else
            params.delete('s');
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <header>
            <Link href="/">Logo</Link>
            <div>
                <label
                    htmlFor="searchInput"
                >
                    Search by title:
                </label>
                <input
                    id="searchInput"
                    type="text"
                    placeholder="The Avengers, Star Wars, ..."
                    onChange={(e) => handleChange(e.target.value)}
                    defaultValue={searchParams.get('s')?.toString()}
                />
            </div>
        </header>
    );
}

export default Header;