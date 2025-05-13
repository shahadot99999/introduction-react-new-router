import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body}= post;

    const navigate = useNavigate();

    const handleGoBack = ()=>{
        navigate(-1);
    }

    const {postId} = useParams();
    console.log(postId);
    return (
        <div>
            <h2>Post details about: {id}</h2>
            <p>Tile:{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;