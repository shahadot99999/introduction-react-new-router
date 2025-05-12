import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body}= post;
    return (
        <div>
            <h2>Post details about: {id}</h2>
            <p>Tile:{title}</p>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;