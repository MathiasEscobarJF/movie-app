//Raw types
export type RawResult = RawResultWithSearch | RawResultWithError;

interface RawResultWithError {
    Response: "False",
    Error: string,
}

interface RawResultWithSearch {
    Search: RawContent[],
    totalResults: string,
    Response: "True",
}

interface RawContent {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string, 
}

//Mapped types
export type Result = ResultWithContent | ResultWithError;

interface ResultWithError {
    response: false;
    error: string,
}

interface ResultWithContent {
    contentList: Content[],
    totalResults: number,
    response: true,
}

export interface Content {
    title: string,
    year: string,
    id: string,
    type: "movie" | "series",
    poster: string, 
}