export class Article {
    id: number;
    author: string;
    title: string;
    description: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
    isLocal: boolean;
    isDeleted: boolean=false;
    sourceUrl: string;
}
