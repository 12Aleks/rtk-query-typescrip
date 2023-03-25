import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Layout from "./Layout";
import PostList from "./component/PostList";
import Home from "./component/Home";
import {Route} from "react-router-dom";


function App() {
    return (
        <Layout>
            <Route  path='/' element={<Home/>} />
            <Route  path='/posts' element={<PostList/>} />
        </Layout>
    );
}

export default App;
