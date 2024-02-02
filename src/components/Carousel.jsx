import { useState, useEffect } from "react";
import Left from '../assets/bxs-left-arrow.svg';
import Right from '../assets/bxs-right-arrow.svg';

export default function Carousel({ children: slides, autoSlide = false, autoSlideInterval = 5000 }) {

    const [actual, setActual] = useState(0)

    const prev = () => setActual(actual => actual === 0 ? slides.length - 1 : actual - 1)

    const next = () => setActual(actual => actual === slides.length - 1 ? 0 : actual + 1)
    
    useEffect(() => {
        if(!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

    return (
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${actual * 100}%)` }}>{slides}</div>
            <div className="absolute inset-0 flex items-center justify-between p-2">
                <button onClick={prev} className="p-2 rounded-full shadow-sm bg-gray-200/50 text-gray-900 hover:bg-gray-200/75">
                    <img src={Left} />
                </button>
                <button onClick={next} className="p-2 rounded-full shadow-2xl bg-gray-200/50 text-gray-900 hover:bg-gray-200/75">
                    <img src={Right} />
                </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div key={i} className={`transition-all w-3 h-3 bg-white rounded-full ${actual === i ? "p-2" : "bg-opacity-50"}`}>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}