import { RawResult, Result } from "@/app/lib/definitions";

async function fetchResult(s: string){
    const API_KEY = "d28c0766";
    const STATIC_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
    const url = `${STATIC_URL}&s=${s}`;

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
            search: rawResult.Search.map(s => ({
                title: s.Title,
                year: s.Year,
                id: s.imdbID,
                type: s.Type,
                poster: s.Poster, 
            })),
            totalResults: parseInt(rawResult.totalResults,10),
            response: true,
        }
    }
    return mappedResult;
}

export default fetchResult;