import React, {lazy} from 'react';
import PostItem from "./PostItem";
import {fetchPosts} from "../store/apiSlice/post.rtk";

const SpinnerComponent = lazy(() => import('./SpinnerComponent'))

const PostList = () => {
    const {data: posts, error, isLoading} = fetchPosts.useGetPostsQuery(5)

    return (
        <>
            <h2 className="title">Post list</h2>
            {isLoading && <SpinnerComponent />}
            {error && <h2 className="text-center">Error !!!</h2>}
            {posts && posts.map(post =>
                <PostItem key={post.id}  post={post}/>
            )}
        </>

    );
};

export default PostList;