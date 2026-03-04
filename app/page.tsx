import RenderResult from "@/app/ui/RenderResult";
import { Suspense } from "react";
import fetchResult from "@/app/lib/fetchResult";
import { Result } from "@/app/lib/definitions";
import RenderResultSkeleton from "@/app/ui/RenderResultSkeleton";

async function Home(props: {
  searchParams?: Promise<{
    s?: string,
    page?: string,
  }>
}){
  const searchParams = await props.searchParams;
  const s = searchParams?.s || "";
  const page = searchParams?.page || "1";

  return (
    <main>
        {s === ""
          ? (
            <h1>Welcome! Enter a title to search</h1>
          )
          : (
            <>
              <Suspense fallback={<RenderResultSkeleton />}>
                <RenderResult s={s} page={page} />
              </Suspense>
            </>
          )
        }
    </main>
  );
}

export default Home;