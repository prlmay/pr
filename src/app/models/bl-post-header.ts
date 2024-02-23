export interface BlogPostHeader {
    id: number;
    authorImage: string;
    authorName: string;
    data: string;
    title: string;
    category: {
        name: string;
        image: string
    } 
}