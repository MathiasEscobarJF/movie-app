export interface RawContent {
    Title: string,
    Year: string,
    imdbID: string,
    Poster: string,
    Type: "movie" | "series",
}

export interface Content {
    title: string,
    id: string,
    year: string,
    img: string,
    type: "movie" | "series",
}

export type ContentList = Content[];

export interface ValidResult {
    Response: "True",
    Search: RawContent[];
    totalResults: string,
}

export interface InvalidResult {
    Response: "False",
    Error: string,
}

export type Result = ValidResult | InvalidResult;