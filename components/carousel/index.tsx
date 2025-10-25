'use client';

import { useEffect, useState } from 'react';

interface Slide {
  backgroundImage: string;
  content: React.ReactNode;
}

interface CarouselProps {
  slides: Slide[];
  showIndicators?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  controls?: boolean;
}

export default function Carousel({ 
  slides, 
  showIndicators = true,
  autoPlay = false,
  autoPlayInterval = 5000, 
  controls = true,
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (!autoPlay || pause) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, pause, slides.length, autoPlayInterval]);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const stopAutoPlay = () => setPause(true);
  const startAutoPlay = () => {
    const timer = setTimeout(() => setPause(false), 2000);
    return () => clearTimeout(timer);
  };

  const handleIndicatorClick = (index: number) => setActiveIndex(index);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-between overflow-hidden bg-[#FAF6EF]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute min-w-full h-full transition-opacity duration-700 ease-in-out ${
            index === activeIndex ? 'z-10 opacity-100' : 'z-0 opacity-0'
          }`}
          style={{
            backgroundImage: `url('${slide.backgroundImage}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Gradiente dourado translúcido */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#C5A572]/70 to-transparent" />

          {/* Conteúdo */}
          <div className="relative z-10 w-full h-full flex items-center justify-center text-[#1D1D1D] font-[Cinzel]">
            {slide.content}
          </div>
        </div>
      ))}

      {/* Botão anterior */}
      {controls && (
        <button
          onClick={handlePrev}
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-20 cursor-pointer flex items-center justify-center bg-[#C5A572]/80 text-white p-2.5 rounded-full shadow-lg hover:bg-[#B08B50] transition-colors duration-300"
          aria-label="Slide anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-6 h-6 fill-white rotate-180">
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </button>
      )}

      {/* Indicadores */}
      {showIndicators && (
        <div className="absolute bottom-6 left-0 z-20 w-full flex items-center justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              onMouseEnter={stopAutoPlay}
              onMouseLeave={startAutoPlay}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer border-[1.5px] border-[#C5A572] ${
                index === activeIndex ? 'bg-[#C5A572]' : 'bg-transparent'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Botão próximo */}
      {controls && (
        <button
          onClick={handleNext}
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-20 cursor-pointer flex items-center justify-center bg-[#C5A572]/80 text-white p-2.5 rounded-full shadow-lg hover:bg-[#B08B50] transition-colors duration-300"
          aria-label="Próximo slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-6 h-6 fill-white">
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </button>
      )}
    </div>
  );
}
