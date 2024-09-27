import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import CarouselIMG1 from '../assets/images/carousel1.png';
import CarouselIMG2 from '../assets/images/carousel2.jpg';
import CarouselIMG3 from '../assets/images/carousel3.png';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="default-carousel" className="relative w-full mt-4" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Item 1 */}
        <div className="relative duration-700 ease-in-out" data-carousel-item>
          <Image
            src={CarouselIMG1}
            alt={t('carousel.slide1')}
            className="block w-full"
          />
        </div>
        {/* Item 2 */}
        <div className="relative duration-700 ease-in-out" data-carousel-item>
          <Image
            src={CarouselIMG2}
            alt={t('carousel.slide2')}
            className="block w-full"
          />
        </div>
        {/* Item 3 */}
        <div className="relative duration-700 ease-in-out" data-carousel-item>
          <Image
            src={CarouselIMG3}
            alt={t('carousel.slide3')}
            className="block w-full"
          />
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white"
          aria-current="true"
          aria-label={t('carousel.slide1')}
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white"
          aria-current="false"
          aria-label={t('carousel.slide2')}
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white"
          aria-current="false"
          aria-label={t('carousel.slide3')}
          data-carousel-slide-to="2"
        ></button>
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">{t('carousel.prev')}</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">{t('carousel.next')}</span>
        </span>
      </button>
    </div>
  );
};

export default Hero;
