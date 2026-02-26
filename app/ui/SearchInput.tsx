'use client';

import { 
    useSearchParams, 
    usePathname, 
    useRouter 
} from "next/navigation";

function SearchInput(){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    function handleChange(value: string){
        const params = new URLSearchParams(searchParams);
        if(value)
            params.set('s',value);
        else
            params.delete('s');
        replace(`${pathname}?${params.toString()}`);
    }

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