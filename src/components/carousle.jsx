import React, { useState } from 'react';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Carousel = ({images, captions }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleNext() {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    }

    function handlePrev() {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length -1 : prevIndex - 1
        );
    }

    console.log(currentIndex)

    function handleIndicatorClick(index) {
        setCurrentIndex(index);
    }

    return (
        <div className='carousel'>
            <GrFormPrevious className='btn' onClick={handlePrev} />
            <div className='img'>
              {images.map((img, i) => (
                <img className='images' style={{translate: `${-100 * currentIndex}%`}}
                  key={i}
                  src={img}
              />
              ))}
               
                <div className='captions'>
                    {captions[currentIndex]}
                </div>
            </div>
            <GrFormNext className='btn2' onClick={handleNext} />
            
            <div className='indicators'>
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleIndicatorClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;
