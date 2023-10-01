import Form from './Form.js'
import FormView from './FormView.js'
import React, { useState } from 'react';
import fb from "./fb_icon.png"
import google from "./google.jpg"
import twitter from "./twitter.png"

const FacebookForm = () => {
    return <div>
        <h2>Sign in using Facebook</h2>
        <Form />
        </div>;
};
  
const TwitterForm = () => {
    return <div>
        <h2>Sign in using Twitter</h2>
        <Form />
    </div>;
};
  
const GoogleForm = () => {
    return <div>
        <h2>Sign in using Google</h2>
        <Form />
    </div>;
};

const Buttons = ()=>{
    const [selectedSocialMedia, setSelectedSocialMedia] = useState(null);

    const handleSocialMediaClick = (socialMedia) => {
        setSelectedSocialMedia(socialMedia);
    };
    const Button = ({name, classes, img}) => {
        return(
            <div class="block-item right">
            <button onClick={() => handleSocialMediaClick(name)} class={classes}><img src= {img} height="25" width="25"/><span>&emsp;{name}</span></button>
            </div>
        );
    }

    return(
        <>
        {selectedSocialMedia === null  && (
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
            
            {selectedSocialMedia === 'Facebook' && <FacebookForm />}
            {selectedSocialMedia === 'Twitter' && <TwitterForm />}
            {selectedSocialMedia === 'Google' && <GoogleForm />}
            
       
        
        </>
    );
}

export default Buttons;