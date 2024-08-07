import { useEffect, useState } from "react";
import Indicator from "./Indicator";
import Slide from "./Slide";

function Carousel({ imageUrls }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [manualChange, setManualChange] = useState(false);

  function goPrev() {
    setManualChange(true);
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  }

  function goNext() {
    setManualChange(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!manualChange) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }

      setManualChange(false);
    }, 5000);

    return () => clearInterval(interval);
  }, [manualChange, imageUrls.length]);

  return (
    <div className="carousel">
      {imageUrls.map((image, index) => (
        <Slide key={index} url={image} isActive={activeIndex === index} />
      ))}
      <Indicator activeIndex={activeIndex} length={imageUrls.length} />
      <button className="btn-prev" onClick={goPrev}>
        Anterior
      </button>
      <button className="btn-next" onClick={goNext}>
        Próximo
      </button>
    </div>
  );
}

export default Carousel;
