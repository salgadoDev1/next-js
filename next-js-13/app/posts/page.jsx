import { ListOfPosts } from "./[id]/ListOfPosts"; 
export default async function PostsPage(){
    const posts = await fetchPosts()

    return(
        <section>
            {ListOfPosts}
        </section>
    );
}
