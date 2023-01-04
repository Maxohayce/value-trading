import React, {useState} from "react";

import pexel from "../../images/pexel.jpeg";
import amazing from "../../images/amazing.jpg";
import { CarouselItem } from "./carouselitem/carouselItem";
import "./carousel.css";

const items = [
    {
        id: 1,
        image: pexel,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris.",
    },
    {
        id: 2,
        image: amazing,
        title: "billing enigma on a rise",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris.",
    },
    {
        id: 3,
        image: amazing,
        title: "motherfukers sitting around wathing youtube",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris.",
    }
]



const Carousel = () => {
    const [activeIndex, setActive] = useState(0);

    const nextSlide = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1;
        }

        setActive(newIndex);
    };

    return (
        <div className="carousel">
            <div className="carousel_inner" style={{ transform: `translateX(-100%))` }}>
                {items.map(({id, image, title, description}) => (
                    <CarouselItem
                        key={id}
                        image={image}
                        title={title}
                        description={description}
                    />
                ))}
            </div>
            <div className="indicators">
                <button className="indicator" onClick={() => nextSlide(activeIndex - 1)}></button>
                <button className="indicator" onClick={() => nextSlide(activeIndex + 1)}></button>
            </div>
        </div>
    )
}

export default Carousel;