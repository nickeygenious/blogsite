import React, {useState, useEffect} from 'react';
import Card from '../UI/Card';
import blogPost from "../../data/blog.json";

import './style.css';
// const images = require.context('../../public/images', true);
// import * as images from  "../../blogPostImages";

const images = require.context("../../blogPostImages", true);
const BlogPost = (props) => {
    console.log(props);

    const [post, setPost] = useState({
        id: "",
        blogCategory: "",
        blogTitle :"",
        slug: "",
        postedOn: "",
        author: "",
        blogImage: "",
        blogText: ""
    });

    const [postid, setPostid] = useState('');
        
        
       useEffect(() => {
       const postid = props.match.params.postid;
       const post = blogPost.data.find(post=> post.id == postid);
       setPost(post);
       setPostid(postid); 
    }, [post, props.match.params.postid]);

       if(post.blogImage == "") return null;
       const url = "../../blogPostImages/"+ post.blogImage;
    console.log("================== post ==============================", process.env.PUBLIC_URL );
    return (
        
        <div className="blogPostContainer">
            <Card>
                
                <div className="blogHeader">
                <span className="blogCategory">{post.blogCategory}</span>
                <h1 className="postTitle">{post.blogTitle}</h1>
                <span className="postedBy">{post.postedOn} by {post.author}</span>
                </div>
                <div className="postImageContainer">
                <img
                //    src={require('../../blogPostImages/'+post.blogImage)}
                   src={images(`./${post.blogImage}`).default}
                    //src={url/(`./fitness-blog-post.jpg`)}
                     alt="Post Image"
                />
                {/* <img src={`../../blogPostImages/${post.blogImage}`} alt="Post Image" /> */}
                {/* <img src={images.image1} alt="Post Image" /> */}
                </div>
                <div className="postContent">
                 <h3>{post.blogTitle}</h3>
                <p>{post.blogText}</p>
                </div>

            </Card>

        </div>
        
    )
}

export default BlogPost;
