import SearchInput from "@/app/ui/SearchInput";
import RenderResult from "@/app/ui/RenderResult";
import { Suspense } from "react";
import RenderResultSkeleton from "@/app/ui/RenderResultSkeleton";

async function Home(props: {
  searchParams?: Promise<{
    s?: string,
  }>
}){
  const searchParams = await props.searchParams;
  const s = searchParams?.s || "";

  return (
    <main>
        <SearchInput />
        {s === ""
          ? (
            <h1>Welcome! Enter a title to search.</h1>
          )
          : (
            <Suspense fallback={<RenderResultSkeleton />}>
              <RenderResult s={s} />
            </Suspense>
          )
        }
    </main>
  );
}

export default Home;