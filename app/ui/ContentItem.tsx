import type { Content } from "@/app/lib/definitions";
import Image from "next/image";

function ContentItem({content}: {
    content: Content,
}){
    return (
        <article>
            <p>{content.title}</p>
            <p>{content.type}</p>
            <p>{content.year}</p>
            <Image
                src={content.poster}
                alt={content.title}
            />
        </article>
    );
}

export default ContentItem;