import { VideoCameraSlashIcon } from "@heroicons/react/24/outline";

function RenderErrorMessage({search,contentType}: {
    search: string,
    contentType: string,
}){
    return (
        <div className="flex flex-col items-center">
            <p className="text-4xl font-bold text-center mb-2">{`No ${contentType.toLowerCase()} found for: ${search}`}</p>
            <p className="text-xl text-center text-pretty">Please complete the title or try another search</p>
            <VideoCameraSlashIcon className="w-[min(50%,20rem)] text-violet-800 m-auto mt-8" />
        </div>
    );
}

export default RenderErrorMessage;