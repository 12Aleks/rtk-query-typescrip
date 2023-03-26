import React, {FC, useState} from 'react';
import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";
import {fetchPosts, useCreatePostMutation} from "../store/apiSlice/post.rtk";
import {IPost} from "../store/types";

interface IModal{
    show: boolean,
    setShow: (arg: boolean) => void
}

const ModalWindow: FC<IModal> = ({show, setShow}) => {
    const [createPost, { error, isLoading } ] = fetchPosts.useCreatePostMutation();

    const handleClose = () => {
        setTitle('')
        setBody('')
        setShow(false);
    }
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')

    const handleCreate = async () => {
        console.log(title, body)
        await createPost({ title, body } as IPost)
        handleClose()
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Create new post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter title post" value={title}
                                      onChange={e => setTitle(e.target.value)}/>
                    </Form.Group>
                    <FloatingLabel controlId="floatingTextarea2" label="Enter your text">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            value={body}
                            onChange={e => setBody(e.target.value)}
                        />
                    </FloatingLabel>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} className="text-uppercase">
                    Close
                </Button>
                <Button onClick={handleCreate} variant="primary" className="text-uppercase">Create</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalWindow;