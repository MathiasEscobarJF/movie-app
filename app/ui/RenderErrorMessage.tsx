import { VideoCameraSlashIcon } from "@heroicons/react/24/outline";

function RenderErrorMessage({search}:{
    search: string,
}){
    return (
        <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">{`No results found for: ${search}`}</p>
            <p className="text-xl">Please complete the title or try another search</p>
            <VideoCameraSlashIcon className="w-80 text-violet-800 m-auto mt-8" />
        </div>
    );
}

export default RenderErrorMessage;