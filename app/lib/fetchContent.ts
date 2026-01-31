import { Result, ContentList } from "@/app/lib/definitions";

async function fetchContent(url: string){
    const fetchedData = await fetch(url);
    const data: Result = await fetchedData.json();
    if(data.Response === "False"){
        return [];
    }
    const mappedContent: ContentList = data.Search.map(d => ({
        title: d.Title,
        id: d.imdbID,
        year: d.Year,
        img: d.Poster,
        type: d.Type,
    }))
    return mappedContent;
}

export default fetchContent;