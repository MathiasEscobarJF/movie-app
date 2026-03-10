import { Suspense } from "react";
import RenderResultSkeleton from "@/app/ui/RenderResultSkeleton";
import RenderResult from "@/app/ui/RenderResult";
import { FilmIcon } from "@heroicons/react/24/outline";

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
    <main className="bg-violet-900 flex-1 xl:px-65 pt-9">
      {s === ""
        ? (
          <div className="text-center">
            <h1 className="text-4xl font-bold">Welcome! Enter a title to search</h1>
            <FilmIcon className="w-80 text-violet-800 m-auto mt-8" />
          </div>
        )
        : (
          <>
            <Suspense fallback={<RenderResultSkeleton />}>
              <RenderResult 
                s={s} 
                page={page} 
              />
            </Suspense>
          </>
        )
      }
    </main>
  );
}

export default Home;