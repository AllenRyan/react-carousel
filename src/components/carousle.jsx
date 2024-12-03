import React, { useState, useEffect, useRef } from 'react';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Carousel = ({ images, captions }) => {
    const [currentIndex, setCurrentIndex] = useState(1); 
    const [isTransitioning, setIsTransitioning] = useState(false);
    const timeoutRef = useRef(null);


    const extendedImages = [images[images.length - 1], ...images, images[0]];

    useEffect(() => {
        if (isTransitioning) {
            timeoutRef.current = setTimeout(() => {
                setIsTransitioning(false);
                if (currentIndex === 0) {
                    setCurrentIndex(images.length);
                } else if (currentIndex === images.length + 1) {
                    setCurrentIndex(1);
                }
            }, 500); 
        }

        return () => clearTimeout(timeoutRef.current);
    }, [currentIndex, isTransitioning, images.length]);

    const handleNext = () => {
        if (!isTransitioning) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setIsTransitioning(true);
        }
    };

    const handlePrev = () => {
        if (!isTransitioning) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
            setIsTransitioning(true);
        }
    };

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index + 1);
        setIsTransitioning(true);
    };

    return (
        <div className='carousel'>
            <GrFormPrevious className='btn' onClick={handlePrev} />
            <div className='img'>
                <div className={`images-wrapper ${isTransitioning ? 'transition' : ''}`} style={{ transform: `translateX(${-100 * currentIndex}%)` }}>
                    {extendedImages.map((img, i) => (
                        <img className='image' key={i} src={img} alt={`Slide ${i}`} />
                    ))}
                </div>
                <div className='captions'>
                    {captions[(currentIndex - 1 + images.length) % images.length]}
                </div>
            </div>
            <GrFormNext className='btn2' onClick={handleNext} />
            <div className='indicators'>
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index + 1 === currentIndex ? 'active' : ''}`}
                        onClick={() => handleIndicatorClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;
