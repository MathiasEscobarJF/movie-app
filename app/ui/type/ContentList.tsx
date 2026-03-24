import type { Content } from "@/app/lib/definitions"
import ContentItem from "@/app/ui/type/ContentItem";

function ContentList({contentList,isTyped}: {
    contentList: Content[],
    isTyped: boolean,
}){
    return (
        <ul
            className="w-full grid grid-cols-[repeat(auto-fit,minmax(316px,1fr))] auto-rows-fr gap-3"
        >
            {contentList.map(content => (
                <li 
                    key={content.id}
                >
                    <ContentItem 
                        content={content} 
                        isTyped={isTyped}    
                    />
                </li>
            ))}
        </ul>
    );
}

export default ContentList;