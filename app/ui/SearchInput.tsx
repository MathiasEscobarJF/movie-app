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
        if(pathname === "/")
            replace(`${pathname}all?${params.toString()}`);
        else
            replace(`${pathname}?${params.toString()}`);
    },300);

    return (
        <div className="w-full flex items-center bg-violet-950 border-2 border-violet-950 rounded-4xl">
            <label 
                htmlFor="searchInput"
                className="flex gap-1 px-5 py-2 h-11"
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
                className="w-full h-11 flex-1 text-ellipsis bg-violet-500 px-2 rounded-r-4xl placeholder:text-amber-50 placeholder:opacity-90"
            />
        </div>
    );
}

export default SearchInput;