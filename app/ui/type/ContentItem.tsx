import type { Content } from "@/app/lib/definitions";
import Image from "next/image";
import clsx from "clsx";

function ContentItem({content,isTyped}: {
    content: Content,
    isTyped: boolean,
}){
    console.log(content.poster);
    return (
        <article className="h-full flex flex-col items-center bg-violet-950 p-2 rounded-lg">
            <div className="w-full flex">
                <p className="text-sm font-bold opacity-85">{content.year}</p>
                <span
                    className={clsx(
                        "ml-auto px-2 py-0.5 rounded-lg",
                        {
                            "bg-green-500": content.type === "movie",
                            "bg-sky-500": content.type === "series",
                            "hidden": isTyped,
                        }
                    )}
                >
                    <p className="text-sm font-bold">{content.type}</p>
                </span>
            </div>
            <p className="text-lg my-2 font-bold text-center text-pretty">{content.title}</p>
            <div className="relative w-75 h-112 mt-auto">
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