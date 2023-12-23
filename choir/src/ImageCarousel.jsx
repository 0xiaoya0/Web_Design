import { useState, useEffect } from 'react';
import './ImageCarousel.css'; 

function ImageCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        {
            id: 1,
            url: "choir1.jpeg",
            alt: "Chorus1",
        },
        {
            id: 2,
            url: "choir2.jpeg",
            alt: "Chorus2",
        },
        {
            id: 3,
            url: "choir3.jpeg",
            alt: "Chorus3",
        },
        {
            id: 4,
            url: "choir4.jpeg",
            alt: "Chorus4",
        },
    ];

    useEffect(() => {
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const interval = setInterval(() => {
                setActiveIndex(prevIndex => (prevIndex + 1) % images.length);
            }, 3000); 
    
            return () => clearInterval(interval); 
        }
    }, [images.length]);
    

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="image-carousel" >
            <div className="carousel__track" 
                 style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img 
                        key={image.id} 
                        src={image.url} 
                        alt={image.alt}
                        className="carousel__image" 
                    />
                ))}
            </div>
            <button className="carousel__button carousel__button--prev" onClick={handlePrev}>‹</button>
            <button className="carousel__button carousel__button--next" onClick={handleNext}>›</button>
        </div>
    );
}

export default ImageCarousel;
