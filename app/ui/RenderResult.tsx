import type { Result } from "@/app/lib/definitions";
import fetchResult from "@/app/lib/fetchResult";
import ContentList from "@/app/ui/ContentList";
import RenderErrorMessage from "@/app/ui/RenderErrorMessage";
import Pagination from "./Pagination";

async function RenderResult({s,page}: {
    s: string,
    page: string | number,
}){
    const result: Result = await fetchResult(s,page);

    return (
        <>
            {result.response
                ? (
                    <>
                        <ContentList contentList={result.search} />
                        <Pagination totalPages={Math.ceil(result.totalResults / 10)} />
                    </>
                )
                : <RenderErrorMessage />
            }
        </>
    );
}

export default RenderResult;