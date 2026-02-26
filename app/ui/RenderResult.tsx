import type { Result } from "@/app/lib/definitions";
import fetchResult from "@/app/lib/fetchResult";
import ContentList from "@/app/ui/ContentList";
import RenderErrorMessage from "@/app/ui/RenderErrorMessage";

async function RenderResult({s}: {
    s: string,
}){
    const result: Result = await fetchResult(s);

    return (
        <>
            {result.response
                ? <ContentList contentList={result.search} />
                : <RenderErrorMessage />
            }
        </>
    );
}

export default RenderResult;