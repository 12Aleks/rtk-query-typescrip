import React from 'react';
import {useParams} from "react-router-dom";
import {fetchPosts} from "../store/apiSlice/post.rtk";
import SpinnerComponent from "./SpinnerComponent";

const SinglePost = () => {
    const params = useParams()
    const {data: post, error, isLoading} = fetchPosts.useGetPostQuery(Number(params.id))

    return (
        <div>
            <h2 className="title">Single post</h2>
            {isLoading && <SpinnerComponent />}
            {error && <h2 className="text-center">Error !!!</h2>}
            <h3>Post number: {post?.id}</h3>
            <h3>Post title: {post?.title}</h3>
            <h4>Post body:</h4>
            <p>{post?.body}</p>
        </div>
    );
};

export default SinglePost;