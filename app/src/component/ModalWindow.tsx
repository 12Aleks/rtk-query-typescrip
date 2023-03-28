import React, {FC, useEffect, useState, memo} from 'react';
import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";
import {fetchPosts} from "../store/apiSlice/post.rtk";
import {IPost} from "../store/types";

interface IModal{
    show: boolean,
    setShow: (arg: boolean) => void,
    post?: IPost
}

const ModalWindow: FC<IModal> = ({show, setShow, post}) => {
    const [createPost, { error: createError, isLoading: createIsLoading } ] = fetchPosts.useCreatePostMutation();
    const [updatePost,  { error: updateError, isLoading: updateIsLoading }] = fetchPosts.useUpdatePostMutation()

    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')

    const modalClose = () => {
        setTitle('')
        setBody('')
        setShow(false);
    }

    const handleCreate = async () => {
        await createPost({ title, body } as IPost);
        modalClose()
    }

    const handleUpdate = async (post: IPost) => {
        await updatePost({id: post.id, title, body} as IPost);
        modalClose()
    }

    useEffect(() => {
        if(post){
            setTitle(post.title)
            setBody(post.body)
        }
    } ,[post])

    return (
        <Modal
            show={show}
            onHide={modalClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Create new post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FloatingLabel className="mb-3" controlId="formBasicEmail" label="Enter your text">
                        <Form.Control value={title} as="textarea"
                                      style={{ height: '70px' }}
                                      onChange={e => setTitle(e.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Enter your text">
                        <Form.Control
                            as="textarea"
                            style={{ height: '150px' }}
                            value={body}
                            onChange={e => setBody(e.target.value)}
                        />
                    </FloatingLabel>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={modalClose} className="text-uppercase">
                    Close
                </Button>

                <Button onClick={() =>  post ? handleUpdate(post) : handleCreate()  } variant="primary" className="text-uppercase">{post ? 'Update' : 'Create'}</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default memo(ModalWindow);