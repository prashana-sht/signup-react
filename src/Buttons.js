import Form from './Form.js'
import React, { useState } from 'react';
import fb from "./fb_icon.png"
import google from "./google.jpg"
import twitter from "./twitter.png"
  
const Buttons = ()=>{
    const [selectedMedia, setSelectedMedia] = useState(null);

    const handleMediaClick = (socialMedia) => {
        setSelectedMedia(socialMedia);
    };

    const Button = ({name, classes, img}) => {
        return(
            <div class="block-item right">
            <button onClick={() => handleMediaClick(name)} class={classes}><img src= {img} height="25" width="25"/><span>&emsp;{name}</span></button>
            </div>
        );
    }

    return(
        <>
        {selectedMedia === null  && (
        <div>
        <Button
        name = "Facebook"
        classes = "btn facebook"
        img = {fb}
        />
        <Button
        name = "Twitter"
        classes = "btn twitter"
        img = {twitter}
        />
        <Button
        name = "Google"
        classes = "btn google"
        img = {google}
        />
        </div>
        )}    

        {(selectedMedia === 'Facebook' || selectedMedia==='Twitter' || selectedMedia==='Google' ) && <Form 
        name = {selectedMedia}/>}
            
        </>
    );
}

export default Buttons;