'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import ProductCard from './product-card';

import { ProductList } from '@/data/products';
import { KeenSliderInstance } from 'keen-slider';
import { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function DropsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [everySlideVisible, setEverySlideVisible] = useState(false);
  const [lastSlideVisible, setLastSlideVisible] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1.2,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 2.2,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 3.2,
        },
      },
      '(min-width: 1280px)': {
        slides: {
          perView: 4.2,
        },
      },
    },
  });

  useEffect(() => {
    const currentInstance = instanceRef.current;
    if (!currentInstance) return;

    const handler = (instance: KeenSliderInstance) => {
      const trackDetails = instance.track.details;

      setCurrentSlide(trackDetails.abs ?? 0);

      if (trackDetails.slides[trackDetails.slides.length - 1].portion === 1) setLastSlideVisible(true);
      else setLastSlideVisible(false);
    };

    currentInstance.on('slideChanged', handler);
    currentInstance.on('dragEnded', handler);
  }, [instanceRef]);

  useEffect(() => {
    const currentInstance = instanceRef.current;
    if (!currentInstance) return;

    const handler = (instance: KeenSliderInstance) => {
      const trackSlides = instance.track.details.slides;

      if (trackSlides.every((slide) => slide.portion === 1)) setEverySlideVisible(true);
      else setEverySlideVisible(false);

      if (trackSlides[trackSlides.length - 1].portion === 1) setLastSlideVisible(true);
      else setLastSlideVisible(false);
    };

    handler(currentInstance);
    currentInstance.on('updated', handler);
  }, [instanceRef]);

  return (
    <div className="mt-4">
      <div ref={sliderRef} className="keen-slider justify-between">
        {ProductList.map((product) => (
          <div className="keen-slider__slide" key={product.image.src}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-4">
        <button
          className="text-4xl bg-zinc-200 dark:bg-zinc-600 rounded-full enabled:active:bg-zinc-400 enabled:active:text-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed"
          type="button"
          onClick={() => instanceRef.current?.prev()}
          disabled={currentSlide === 0}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>

        <button
          className="text-4xl bg-zinc-200 dark:bg-zinc-600 rounded-full enabled:active:bg-zinc-400 enabled:active:text-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed"
          type="button"
          onClick={() => instanceRef.current?.next()}
          disabled={lastSlideVisible || everySlideVisible || currentSlide === ProductList.length - 1}
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
}
