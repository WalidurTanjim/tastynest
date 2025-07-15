import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import type { Post } from "../../../types/postsType";
import fetchPosts from "../../../hooks/useAllPosts";

const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    console.log("All posts from home page:", posts);
    console.log("Loading from home page posts:", loading);

    // useEffect (load all posts)
    useEffect(() => {
        const loadPosts = async() => {
            try{
                setLoading(true);
                const res = await fetchPosts();
                if(res?.status === 200){
                    setPosts(res?.data);
                }else{
                    setError(res?.message);
                }
            }catch(err){
                setError(err instanceof Error ? err?.message : 'An Error Occured');
            }finally{
                setLoading(false);
            }
        }
        loadPosts();
    }, []);

    // loading
    if(loading){
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-700">Loading...</h1>
            </div>
        )
    }

    // error
    if(error){
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-red-600">{error}</h1>
            </div>
        )
    }

    return (
        <div className="users w-full">
            <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-10">
                <SectionTitle title="All Posts" />
            </div>
        </div>
    );
};

export default Posts;