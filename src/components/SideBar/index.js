import React,{useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import blogPost from "../../data/blog.json";
import Card from '../UI/Card';
import './style.css';

const SideBar = (props) => {

    const [posts, setPosts] = useState([]);
        
        
    useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
 }, [posts]);

    return (
       <div className="sidebarContainer">
<Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
    <div className="cardHeader">
        <span>About Us</span>
    </div>
    <div className="profileImageContainer">
        <img src="data:image/jpeg;base64,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" alt=" " />
    </div>
    <div className="cardBody">
<p className="personalBio">
    My name is Nickey Narware. I am a software developer in React. Please see my blogs here. .....:)
</p>
    </div>
</Card>

<Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
    <div className="cardHeader">
        <span>Social Network</span>
    </div>
   
</Card>

<Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
<div className="cardHeader">
        <span>Recent Posts</span>
    </div>
    <div className="recentPosts">
        {
            posts.map(post=>{
                return(
                    <NavLink key={post.id} to={`/post/${post.id}`}>
                        <div className="recentPost">
                    <h3>{post.blogTitle}</h3>
                    <span>{post.postedOn}</span>
                    </div>
                    </NavLink>
                
                );
            })
        }
    </div>
</Card>
       </div>
    )
}

export default SideBar;
