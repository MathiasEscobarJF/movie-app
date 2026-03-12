import { RawResult, Result } from "@/app/lib/definitions";

async function fetchResult({s,type,page}: {
    s: string,
    type: string,
    page: string | number
}){
    const API_KEY = "d28c0766";
    const STATIC_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
    const url = `${STATIC_URL}&s=${s}&type=${type}&page=${page}`;

    const fetchedResult = await fetch(url);
    const rawResult: RawResult = await fetchedResult.json();
    let mappedResult: Result;
    if(rawResult.Response === "False"){
        mappedResult = {
            response: false, 
            error: rawResult.Error,
        }
    }else{
        mappedResult = {
            contentList: rawResult.Search
                .filter(s => (s.Type === "movie" || s.Type === "series"))
                .map(s => ({
                title: s.Title,
                year: s.Year,
                id: s.imdbID,
                type: s.Type as "movie" | "series",
                poster: s.Poster, 
            })),
            totalResults: parseInt(rawResult.totalResults,10),
            response: true,
        }
    }
    return mappedResult;
}

export default fetchResult;