import type { Result } from "@/app/lib/definitions";
import fetchResult from "@/app/lib/fetchResult";
import ContentList from "@/app/ui/type/ContentList";
import RenderErrorMessage from "@/app/ui/type/RenderErrorMessage";
import Pagination from "@/app/ui/type/Pagination";

async function RenderResult({s,type,page}: {
    s: string,
    type: string,
    page: string | number,
}){
    const result: Result = await fetchResult({s,type,page});

    return (
        <>
            {result.response
                ? (
                    <div className="flex flex-col gap-6 items-center mb-9">
                        <p className="text-center text-4xl font-bold mb-6 text-pretty">{`Results for: ${s}`}</p>
                        <ContentList 
                            contentList={result.contentList}
                            isTyped={type === "movie" || type === "series"} 
                        />
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