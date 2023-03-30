import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Layout from "./Layout";
import PostList from "./component/PostList";
import Home from "./component/Home";
import {Route} from "react-router-dom";
import SinglePost from "./component/SinglePost";


function App() {
    return (
        <Layout>
            <Route  path='/' element={<Home/>} />
            <Route  path='/posts' element={<PostList/>} />
            <Route  path='/posts/:id' element={<SinglePost/>} />
        </Layout>
    );
}

export default App;
