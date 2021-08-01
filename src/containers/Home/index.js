import React from 'react';
import SideBar from '../../components/SideBar';
import Card from '../../components/UI/Card';

import './style.css';

const gallaryHeight= 450;
const gallaryStyle = {
    height: gallaryHeight+'px',
    overflow: 'hidden'
}

const sideImageHeight = gallaryHeight/3;

const Home = props => {
    return (
        <div>
         <Card style={{margin:'20px 0'}}>
             <div className="gallaryPost" style={gallaryStyle}>
<section style={{width:'70%'}}>
<div>
    <img src={"https://media.wired.com/photos/59268deecfe0d93c47430a0f/16:9/w_1200,c_limit/19-DEC-2016-THE-LAMBORGHINI-AVENTADOR-S-TA.jpg"} alt=""/>
</div>
</section>
<section className={"sideImageWraper"} style={{width:'30%'}}>
<div style={{height:`${sideImageHeight}px`}}>
    <img src={"https://media.wired.com/photos/59268deecfe0d93c47430a0f/16:9/w_1200,c_limit/19-DEC-2016-THE-LAMBORGHINI-AVENTADOR-S-TA.jpg"} alt=""/>
</div>
<div style={{height:`${sideImageHeight}px`}}>
    <img src={"https://media.wired.com/photos/59268deecfe0d93c47430a0f/16:9/w_1200,c_limit/19-DEC-2016-THE-LAMBORGHINI-AVENTADOR-S-TA.jpg"} alt=""/>
</div>
<div style={{height:`${sideImageHeight}px`}}>
    <img src={"https://media.wired.com/photos/59268deecfe0d93c47430a0f/16:9/w_1200,c_limit/19-DEC-2016-THE-LAMBORGHINI-AVENTADOR-S-TA.jpg"} alt=""/>
</div>
</section>
             </div>
         </Card>
        <section className="HomeContainer">
            <div style={{width:'70%'}}>
            <Card style={{marginBottom:'20px'}}>
             Post 1
         </Card>
         <Card style={{marginBottom:'20px'}}>
             Post 2
         </Card>
            </div>
        <SideBar />
        </section>
        </div>
    )
};
export default Home;
