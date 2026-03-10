import type { Content } from "@/app/lib/definitions";
import Image from "next/image";
import clsx from "clsx";

function ContentItem({content}: {
    content: Content,
}){
    console.log(content.poster);
    return (
        <article className="h-full flex flex-col items-center bg-violet-950 p-2 rounded-lg">
            <div className="w-full flex justify-end">
                <span
                    className={clsx(
                        "px-2 py-0.5 rounded-lg",
                        {
                            "bg-green-500": content.type === "movie",
                            "bg-sky-500": content.type === "series",
                        }
                    )}
                >
                    <p>{content.type}</p>
                </span>
            </div>
            <p className="text-lg mt-2">{content.title}</p>
            <p className="opacity-90 mt-auto mb-3">({content.year})</p>
            <div className="relative w-75 h-112">
                {content.poster !== "N/A"
                    ? (
                        <Image
                            src={content.poster}
                            alt={content.title}
                            fill
                            className="rounded-lg"
                        />
                    ) : (
                        <p className="text-center">Image not available</p>
                    )
                }
            </div>
        </article>
    );
}

export default ContentItem;