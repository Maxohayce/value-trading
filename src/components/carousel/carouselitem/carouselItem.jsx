import React from "react";


import "./carouselItem.css";

export const CarouselItem = ({ image, title, description, currentIndex }) => {
    return(
    
            <div className="carousel_item">
                <img className="carousel_image" src={image} alt=""  />
                <div className="carousel_details">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
    )
}