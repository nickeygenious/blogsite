import React from 'react';
import { form, Input, Button, Checkbox } from 'react-dom';
import BlogPost from '../../components/BlogPost';
import SideBar from '../../components/SideBar';
import Card from '../../components/UI/Card';
import UploadFile from '../../components/UploadFile';
import './style.css';



const ContactUS = (props) => {

  
    return(
      
        
         
       <section className="ContactContainer">
       <div style={{width:'70%'}}>
        <Card style={{marginBottom:'20px'}}>
             <div className="block contactBlock">
                 <div className="container-fluid">
                     <div className="TitleHolder">
                         <h2>Start your blogging here</h2>
                         <p>Please help to write your post here which you want to blog see on this blogging site</p>
                     </div>
        
                     <form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
    
    >
      <form
        name="Your Full Name"
        rules={[{ required: true, message: 'Please input your Name!' }]}
      >
        <input  placeholder="fullname" />
      </form>

      <form
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <input
          
          type="email"
          placeholder="Email"
        />
      </form>

      <form
        name="contact"
        rules={[{ required: true, message: 'Please input your Contact Number!' }]}
      >
        <input
          
          type="contact"
          placeholder="Contact Number"
        />
      </form>

      <form
        name="Title"
        rules={[{ required: true, message: 'Please input Blog Title!' }]}
      >
        <input
          
          type="title"
          placeholder="Title"
        />
      </form>

      <form
        name="category"
        rules={[{ required: true, message: 'Please input Blog Category!' }]}
      >
        <input
          
          type="category"
          placeholder="Category"
        />
      </form>

      <form
        name="content"
        rules={[{ required: true, message: 'Please input Blog Content!' }]}
      >
        <input
          
          type="content"
          placeholder="Write your content here"
        />
      </form>

      
     

      
       
      
      <UploadFile />

      <form>
        <button type="primary" htmlType="submit" className="login-form-button">
          submit
        </button>
        </form>
    </form>
             </div>
             </div>
            
             
            </Card>
           
            </div>
           <SideBar {...props}/>
 
       </section>
        
       
     

    )
    
}

export default ContactUS
