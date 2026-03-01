'use client';

import { 
    useSearchParams, 
    usePathname, 
    useRouter 
} from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

function SearchInput(){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const handleChange = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams);
        if(value)
            params.set('s',value);
        else
            params.delete('s');
        replace(`${pathname}?${params.toString()}`);
    },300);

    return (
        <div>
            <label htmlFor="">Search by title:</label>
            <input 
                type="text" 
                placeholder="The Avengers, Star Wars, ..."
                onChange={(e) => handleChange(e.target.value)}
                defaultValue={searchParams.get('s')?.toString()}
            />
        </div>
    );
}

export default SearchInput;