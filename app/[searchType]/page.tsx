import Image from "next/image";
import fetchContent from "@/app/lib/fetchContent";
import { ContentList } from "../lib/definitions";

const STATIC_URL = "http://www.omdbapi.com/?apikey=d28c0766";

async function Page(props: {
    searchParamas?: Promise<{
        s?: string, 
    }>
}){
    const searchParams = await props.searchParamas;
    const s = searchParams?.s || "";
    const type = "";

    const url = `${STATIC_URL}&${s}&${type}`;
    const results: ContentList = await fetchContent(url);
    return (
        <main>
            <ul>
                {results.map(res => (
                    <li key={res.id}>
                        <p>{res.title}</p>
                        <p>{res.year}</p>
                        <Image
                            src={res.img}
                            alt={res.title}
                        />
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Page;