import React, {useEffect, useState} from 'react';
import { IPost } from '../models/IPost';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
    const [limit, setLimit] = useState(10)
    //hook ginerirujemyj automaticzeski na osnowanii opisywajemych endpoints
    //1 argument - paramentr ispolzujemyj w zaprose,
    const {data: posts, error, isLoading, refetch} = postAPI.useGetPostsQuery(limit,{
        //obnowlenie dannych czerez opredelennoje wrema
        pollingInterval: 10000
    });

    //testowoje izmenenije limita, keszyrowania dannych
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLimit(5)
    //     }, 3000)
    // }, []);

    return (
        <div className='post__list'>
            {isLoading && <h1>Loading ...</h1>}
            {error && <h1>Oh, error !!!</h1>}
            {/*Poluczenie obnowlonnych dannych*/}
            <button onClick={() => refetch()}>REFETCH</button>
            {
                posts && posts.map(post =>
                   <PostItem key={post.id} post={post}/>
                )
            }
        </div>
    );
};

export default PostContainer;