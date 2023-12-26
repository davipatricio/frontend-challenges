'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import ProductCard from './product-card';

import { ProductList } from '@/app/data/products';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function DropsCarousel() {
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

  return (
    <div className="mt-4">
      <div ref={sliderRef} className="keen-slider justify-between">
        {ProductList.map((product) => (
          <div className="keen-slider__slide">
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-4">
        <button
          className="text-4xl bg-zinc-200 rounded-full active:bg-zinc-400 active:text-zinc-800"
          type="button"
          onClick={() => instanceRef.current?.prev()}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>

        <button
          className="text-4xl bg-zinc-200 rounded-full active:bg-zinc-400 active:text-zinc-800"
          type="button"
          onClick={() => instanceRef.current?.next()}
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
}
