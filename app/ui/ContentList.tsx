import type { Content } from "@/app/lib/definitions"
import ContentItem from "@/app/ui/ContentItem";

function ContentList({contentList}: {
    contentList: Content[],
}){
    return (
        <ul>
            {contentList.map(content => (
                <li 
                    key={content.id}
                >
                    <ContentItem content={content} />
                </li>
            ))}
        </ul>
    );
}

export default ContentList;