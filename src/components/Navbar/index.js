import React ,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';
import image from '../../assets/icons/search.png';

const Navbar=(props)=> {

     const [search, setSearch] = useState(false);

     

     const submitsearch=(event) =>{
        event.preventDefault();
        alert("Searching...");
    }

    const openSearch=()=>{
        setSearch(true);
    }

    const searchClass= search ? 'searchinput active' : 'searchinput';

    
    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="about-us">About Us</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>
                <li><NavLink to="contact-us">Contact Us</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitsearch}>
                <input type="text" className={searchClass} placeholder="Search" />
                <img onClick={openSearch} className="searchicon" src={image} alt="Search" />  
                </form>
                
            </div>
        </div>
    )
}


export default Navbar;

