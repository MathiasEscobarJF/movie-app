import Image from "next/image";
import fetchContent from "@/app/lib/fetchContent";
import { ContentList } from "../lib/definitions";

const STATIC_URL = "http://www.omdbapi.com/?apikey=d28c0766";

async function Page(props: {
    searchParams?: Promise<{
        s?: string, 
    }>,
    params: Promise<{searchType: string}>
}){
    const searchParams = await props.searchParams;
    const s = searchParams?.s || "";

    const params = await props.params;
    const type = params.searchType !== 'all' ? params.searchType : "";
    console.log(type);

    const url = `${STATIC_URL}&s=${s}&type=${type}`;
    const results: ContentList = await fetchContent(url);
    console.log(results.length)
    
    return (
        <div>
            <ul>
                {results.map(res => (
                    <li key={res.id}>
                        <p>{res.title}</p>
                        <p>{res.year}</p>
                        <img
                            src={res.img}
                            alt={res.title}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Page;