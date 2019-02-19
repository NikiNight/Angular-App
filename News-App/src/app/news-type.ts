export interface NewsType {
    status: string,
    totalResults: number,
    articles: [
        {
            author: string,
            title: string,
            description: string,
            urlToImage: string,
            publishedAt: Date,
            content: string,
        }
    ],
}
