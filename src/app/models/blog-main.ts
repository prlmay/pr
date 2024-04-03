export interface BlogMain {
    id: number;
    image: string;
    post: {
        id: number;
        link: string;
        title: string;
        text: string
    }
}