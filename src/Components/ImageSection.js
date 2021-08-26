import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> I Dewa Putu Surya Eko Bumi</span></h4>
                <p className="about-text">
                    You can call me Eko, i am a bachelor degree graduate from Institut Teknologi bandung who has a high passion in the field of website development, especially in the FrontEnd section.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: I Dewa Putu Surya Eko Bumi</p>
                        <p>: 26</p>
                        <p>: Indonesian</p>
                        <p>: Bahasa Indonesia, English</p>
                        <p>: Jl. Kebon Kopi no 12 Cimahi</p>
                        <p>: Indonesia</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
