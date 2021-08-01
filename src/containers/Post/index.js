import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BlogPost from '../../components/BlogPost';
import SideBar from '../../components/SideBar';
import './style.css';

const Post = (props) => {
    console.log(props);
    return (
       <section className="container">
           <BlogPost {...props}/>
           <SideBar {...props}/>
       </section>
    )
}

export default Post
