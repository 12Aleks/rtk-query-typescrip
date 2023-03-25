import React, {FC, ReactNode} from 'react';
import NavbarPage from "./component/Navbar";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Container, Row} from "react-bootstrap";

interface ILayout {
    children: ReactNode
}

const Layout: FC<ILayout> = ({children}) => {
    return (
        <BrowserRouter>
            <NavbarPage/>
            <Container fluid>
                <Row>
                    <Routes>
                        {children}
                    </Routes>
                </Row>
            </Container>
        </BrowserRouter>
    );
};

export default Layout;