import RenderResult from "@/app/ui/type/RenderResult";

async function Page(props: {
    params: Promise<{type: string}>
    searchParams?: Promise<{
        s?: string;
        page?: string;
    }>
}){
    const {type} = await props.params;
    const searchParams = await props.searchParams;
    const s = await searchParams?.s || "";
    const page = await searchParams?.page || "1";

    return (
        <RenderResult 
            s={s} 
            type={type === "all" ? "" : type}
            page={page}
        />
    );
}

export default Page;