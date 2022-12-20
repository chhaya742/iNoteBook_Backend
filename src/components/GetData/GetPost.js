import { useData } from "../DataContext/DataContext";

const GetPost = () => {
    const { post } = useData();
    console.log(post);
    return (
        <div>
            {post.map((items)=><div key={items.title}>
                {items.title}
            </div>)}
        </div>
    )
}

export default GetPost;