'use client';

import { 
    useSearchParams, 
    usePathname, 
    useRouter 
} from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

function SearchInput(){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const handleChange = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page',"1");
        if(value)
            params.set('s',value);
        else
            params.delete('s');
        replace(`${pathname}?${params.toString()}`);
    },300);

    return (
        <div className="flex h-11 items-center bg-violet-950 rounded-4xl border-2 border-violet-950">
            <label 
                htmlFor="searchInput"
                className="flex gap-1 px-3 py-1"
            >
                <MagnifyingGlassIcon className="w-6"/>
                <span className="hidden sm:block">Search by title</span>
            </label>
            <input
                id="searchInput"
                type="text" 
                placeholder="The Avengers, Star Wars, ..."
                onChange={(e) => handleChange(e.target.value)}
                defaultValue={searchParams.get('s')?.toString()}
                className="bg-violet-500 h-full rounded-r-4xl px-2 w-55 placeholder:text-amber-50 placeholder:opacity-90"
            />
        </div>
    );
}

export default SearchInput;