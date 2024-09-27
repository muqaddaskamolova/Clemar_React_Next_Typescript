//'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import Languages from '../Languages/Languages'
const NavLinks: React.FC = () => {
  const { t } = useTranslation(); // Destructure the t function from useTranslation
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center space-x-6">
      {/* Catalog Navigation */}
      <nav className="border-sky-200 mt-5 rounded-lg bg-sky-400 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-md mx-auto flex flex-wrap items-center justify-between p-2">
          {/* Catalog Link */}
          <Link href="/catalog" className="text-white text-lg font-semibold">
            {t('Catalog')} {/* Use t function for translation */}
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 w-8 h-8 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Navigation Menu */}
          <div
            className={`w-full md:flex md:items-center md:justify-end ${isOpen ? 'block' : 'hidden'} md:block`}
            id="navbar-hamburger"
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 font-medium mt-2 dark:border-gray-700">
              <li>
                <Link href="/" className="text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
                  {t('Home')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
                  {t('Services')}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
                  {t('Pricing')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
                  {t('Contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Logo and Title */}
      <div className="flex items-center space-x-3">
        <img
          src="https://media.gettyimages.com/id/1350850001/vector/star-icon-on-blue-background-flat-design-with-long-shadow.jpg?s=612x612&w=gi&k=20&c=fW7UF50iiu-d6zsNuu597-1LlbijQD5b8dzMdoPUOpY="
          className="h-8 rounded-lg"
          alt="Flowbite Logo"
        />
        <Link href="/" className="text-gray-900 dark:text-gray-600 text-xl font-bold hover:text-gray-700 dark:hover:text-white">
          CLEMAR
        </Link>
      </div>

      {/* Search Bar */}
      <div className="relative ml-5">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={t('SearchPlaceholder')} // Use t function for translation
        />
        <button
          onClick={handleSearch}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      {/* Favorites Link */}
      <Link href="/favorites" className="flex items-center text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
        <FontAwesomeIcon icon={faHeart} className="text-sky-400 mr-2" />
        <span>{t('Favorites')}</span>
      </Link>
    </div>
  );
};

export default NavLinks;
