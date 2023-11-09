import React, {useState, useEffect} from "react";
import revista from './../assets/revista.jpg';
import rebobinando from './../assets/rebobinando.jpg';
import dxtvtarde from './../assets/dxtvtarde.jpg';
import ctvnoticias from './../assets/ctvnoticias.jpg';
import protagonistas from './../assets/protagonistas.jpg';
import noticias2 from './../assets/noticias2.jpg';
import dorama from './../assets/dorama.jpg';

import Left from '../assets/bxs-left-arrow.svg'
import Right from '../assets/bxs-right-arrow.svg'

const images = [
    revista,
    rebobinando,
    dxtvtarde,
    ctvnoticias,
    protagonistas,
    noticias2,
    dorama,
    // ... agregar más nombres de imágenes según necesites
  ];

function ImageSlider(){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
          nextImage();
        }, 5000); // Cambiar de imagen cada 3 segundos
    
        return () => {
          clearInterval(interval);
        };
    }, [currentImageIndex]);
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    
  
    return (
      <div className="relative rounded-lg overflow-hidden">
        <button onClick={prevImage} className="absolute top-2/4 bg-gray-200/75 rounded-r-lg px-1 cursor-pointer"><img src={ Left } alt="" width={36} /></button>
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
        <button onClick={nextImage} className="absolute right-0 top-2/4 bg-gray-200/75 rounded-l-lg px-1 cursor-pointer"><img src={ Right } alt=""width={36}  /></button>
      </div>
    );
}

export default ImageSlider;