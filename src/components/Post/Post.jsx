import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {

    const {id, title}= post;
     const postStyle = {
        border: '2px solid yellow',
        padding: '10 px',
        borderRadius: '20px'

    }

    const navigate = useNavigate();

    const handleShowDetails = ()=>{
            navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
            <h4>Post of id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Click me</button></Link>
            <button onClick={handleShowDetails}>Click to see Details</button>
        </div>
    );
};

export default Post;