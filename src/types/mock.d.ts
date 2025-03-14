export interface IArticleSection {
    type: "image" | "text" | "heading" | "list";
    content?: string;
    src?: string;
    alt?: string;
    level?: number;
    items?: string[];
}

export interface IArticle {
    id: string;
    title: string;
    owner: string;
    tag: string;
    createdAt: string;
    updateAt: string;
    sections: ArticleSection[];
}