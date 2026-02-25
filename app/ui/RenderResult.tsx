import type { Result } from "@/app/lib/definitions";
import ContentList from "@/app/ui/ContentList";
import RenderErrorMessage from "@/app/ui/RenderErrorMessage";

function RenderResult({result}: {
    result: Result
}){
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