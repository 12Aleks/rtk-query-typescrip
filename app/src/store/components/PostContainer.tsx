import React, {useEffect, useState} from 'react';
import { IPost } from '../models/IPost';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
    const [limit, setLimit] = useState(20)
    //hook ginerirujemyj automaticzeski na osnowanii opisywajemych endpoints
    //1 argument - paramentr ispolzujemyj w zaprose,
    const {data: posts, error, isLoading, refetch} = postAPI.useGetPostsQuery(limit,{
        //obnowlenie dannych czerez opredelennoje wrema
        pollingInterval: 10000
    });
    //funkcija nazywajetsa po nazwaniu endpojeta sozdannogo nize
    const [createPost, {error: createError, isLoading: isCreateLoading}] = postAPI.useCreatePostMutation();


    //testowoje izmenenije limita, keszyrowania dannych
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLimit(5)
    //     }, 3000)
    // }, []);

    const handleCreate = async() => {
       const title = prompt()
        await createPost({title, body: title} as IPost)
    };

    return (
        <div className='post__list'>
            <button onClick={handleCreate}>Add new post</button>
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