import type { Post } from "../../types/postsType";

const SinglePost = ({ post }: { post: Post }) => {
    const { userId, id, title, body } = post;

    return (
        <div className="border border-gray-200 hover:ring-2 ring-gray-200 rounded-md p-2 hover:shadow-lg">
            <h1 className="text-slate-700 font-medium">User ID: <span className="text-gray-500">{userId}</span></h1>
            <h1 className="text-slate-700 font-medium">ID: <span className="text-gray-500">{id}</span></h1>
            <p className="text-slate-700 font-medium">title: <span className="text-gray-500">{title}</span></p>
            <p className="text-slate-700 font-medium">Body: <span className="text-gray-500">{body}</span></p>
        </div>
    );
};

export default SinglePost;