//Raw types
export type RawResult = RawResultWithSearch | RawResultWithError;

interface RawResultWithError {
    Response: "False",
    Error: string,
}

interface RawResultWithSearch {
    Search: RawContent[],
    totalResults: "63",
    Response: "True",
}

interface RawContent {
    Title: string,
    Year: string,
    imdbID: string,
    Type: "movie" | "series",
    Poster: string, 
}

//Mapped types
export type Result = ResultWithSearch | ResultWithError;

interface ResultWithError {
    response: false;
    error: string,
}

interface ResultWithSearch {
    search: Content[],
    totalResults: "63",
    response: true,
}

export interface Content {
    title: string,
    year: string,
    id: string,
    type: "movie" | "series",
    poster: string, 
}