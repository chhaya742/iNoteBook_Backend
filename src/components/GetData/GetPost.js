import { useData } from "../DataContext/DataContext";

const GetPost = () => {
    const { post,createPost } = useData();
    return (
        <div>
            {post.map((items)=><div key={items.title}>
                {items.title}
            </div>)}
        </div>
    )
}

export default GetPost;