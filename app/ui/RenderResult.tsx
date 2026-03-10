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
                    <div className="flex flex-col gap-6 items-center mb-9">
                        <p className="text-center text-4xl font-bold mb-6">{`Results for: ${s}`}</p>
                        <ContentList contentList={result.contentList} />
                        <Pagination 
                            currentPage={Number(page)} 
                            totalPages={Math.ceil(result.totalResults / 10)} />
                    </div>
                )
                : (
                    <RenderErrorMessage search={s}/>
                )
            }
        </>
    );
}

export default RenderResult;