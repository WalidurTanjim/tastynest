import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAllPosts from "../../../hooks/useAllPosts";
import SinglePost from "../../../components/SinglePost/SinglePost";

const Posts = () => {
    const { posts, isPending, isError, error } = useAllPosts();
    // console.log("useAllPosts response from home page:", posts, isPending, isError, error);

    // isPending
    if(isPending){
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-700">Loading...</h1>
            </div>
        )
    }

    // isError
    if(isError){
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-red-600">{error?.message}</h1>
            </div>
        )
    }

    return (
        <div className="users w-full">
            <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-10">
                <SectionTitle title="All Posts" />

                {
                    posts ?
                    <div className="grid gap-5 grid-cols-1 sm:grid-cosl-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
                        {
                            posts?.map(post => <SinglePost key={post.id} post={post} />)
                        }
                    </div>
                    : undefined
                }
            </div>
        </div>
    );
};

export default Posts;