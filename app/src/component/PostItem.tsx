import React, {FC, memo, useState} from 'react';
import {IPost} from "../store/types";
import {Card, Button, Col} from "react-bootstrap";
import {fetchPosts} from "../store/apiSlice/post.rtk";
import ModalWindow from "./ModalWindow";


interface IPostItem {
    post: IPost
}

const PostItem: FC<IPostItem> = ({post}) => {
    const [deletePost, {error: deleteError, isLoading: deleteLoading}] = fetchPosts.useDeletePostMutation()
    const [show, setShow] = useState<boolean>(false);



    const handleDelete = async(post: IPost) => {
       await deletePost(post)
    }


   if(deleteError) return <h2 className="text-center">Error !!!</h2>
    // if(deleteLoading) return <SpinnerComponent/>

    return (
        <Col sm={12} xs={6} md={3}>
            <ModalWindow show={show} setShow={setShow} post={post}/>
            <Card style={{maxWidth: '25rem', margin: '10px auto', display: 'block'}} >
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                        {post.body}
                    </Card.Text>
                    <div className="d-flex align-items-center justify-content-end">
                        <Button variant="outline-secondary" className="text-uppercase" onClick={() => setShow(true)}>Update</Button>
                        <Button variant="outline-secondary" className="ms-3 text-uppercase" onClick={() => handleDelete(post)}>Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default memo(PostItem);