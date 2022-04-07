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
    const [updatePost, {}] = postAPI.useUpdatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    //testowoje izmenenije limita, keszyrowania dannych
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLimit(5)
    //     }, 3000)
    // }, []);

    const handleCreate = async() => {
       const title = prompt();
        //jawno ukazywajem czto objekt tipa IPost
        await createPost({title, body: title} as IPost)
    };

    const handleRemove = (post: IPost) => {
       deletePost(post)
    };

    const handleUpdate = (post: IPost) => {
      updatePost(post)
    }

    return (
        <div className='post__list'>
            <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h1>Loading ...</h1>}
            {error && <h1>Oh, error !!!</h1>}
            {/*Poluczenie obnowlonnych dannych*/}
            <button onClick={() => refetch()}>REFETCH</button>
            {
                posts && posts.map(post =>
                   <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
                )
            }
        </div>
    );
};

export default PostContainer;