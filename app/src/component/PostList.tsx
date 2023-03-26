import React, {lazy, useState} from 'react';
import PostItem from "./PostItem";
import {fetchPosts} from "../store/apiSlice/post.rtk";
import {Button} from "react-bootstrap";
import ModalWindow from "./ModalWindow";

const SpinnerComponent = lazy(() => import('./SpinnerComponent'))

const PostList = () => {

    const {data: posts, error, isLoading} = fetchPosts.useGetPostsQuery(12)
    const [show, setShow] = useState<boolean>(false);

    const handleShow = () => setShow(true);


    return (
        <>
            <h2 className="title">Post list</h2>
            <ModalWindow show={show} setShow={setShow}/>
            <div className="d-flex align-items-center justify-content-center pb-5" >
                <Button variant="dark" onClick={handleShow} className="text-uppercase">Create post</Button>
            </div>
            {isLoading && <SpinnerComponent />}
            {error && <h2 className="text-center">Error !!!</h2>}
            {posts && posts.map(post =>
                <PostItem key={post.id}  post={post}/>
            )}
        </>

    );
};

export default PostList;