import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import carousel3 from "../../images/carousel3.jpg";
import carousel1 from "../../images/carousel1.jpg";
import carousel2 from "../../images/carousel2.jpg";
import { CarouselItem } from "./carouselitem/carouselItem";
import "./carousel.css";

const items = [
    {
        id: 1,
        image: carousel1,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris.",
    },
    {
        id: 2,
        image: carousel2,
        title: "billing enigma on a rise",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris.",
    },
    {
        id: 3,
        image: carousel3,
        title: "motherfukers sitting around wathing youtube",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris.",
    }
]



const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = items.length;

    const nextSlide = () => {
        setActiveIndex(activeIndex === images - 1 ? 0 : activeIndex + 1)
    };

    const prevSlide = () => {
        setActiveIndex(activeIndex === 0 ? images - 1 : activeIndex - 1)
    }

    return (
        <div className="carousel">
                {items.map(({id, image, title, description}, index) => (
                    <div className={index === activeIndex ? "carousel-item active" : "image"} key={index}>
                    {index === activeIndex && (
                        <CarouselItem
                        image={image}
                        title={title}
                        description={description}
                        currentIndex={activeIndex}
                    />
                    )}
                    </div>
                ))}
            <div className="indicators">
                <button className="left-arrow" onClick={prevSlide}><FontAwesomeIcon icon={faArrowLeft}/></button>
                <button className="right-arrow" onClick={nextSlide}><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    )
}

export default Carousel;