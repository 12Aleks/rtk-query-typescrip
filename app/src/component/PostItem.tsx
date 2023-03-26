import React, {FC} from 'react';
import {IPost} from "../store/types";
import {Card, Button, Col} from "react-bootstrap";

interface IPostItem {
    post: IPost
}

const PostItem: FC<IPostItem> = ({post}) => {
    return (
        <Col sm={12} xs={6} md={3}>
            <Card style={{maxWidth: '25rem', margin: '10px auto', display: 'block'}} >
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                        {post.body}
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PostItem;