import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import Languages from '../Languages/Languages';

const Navbar: React.FC = () => {
    const { t } = useTranslation();

    return (
        <nav className="bg-sky-400 p-4">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold flex items-center space-x-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>{t('Location')}:</span>
                    <a href="https://facebook.com" className="underline" target="_blank" rel="noopener noreferrer">
                        {t('Tashkent')}
                    </a>
                </div>
                <div className="flex items-center space-x-6">
                    <ul className="flex space-x-6 items-center">
                        <li className="flex items-center space-x-2">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-gray-400" size="lg" />
                                <span className="text-white">{t('Facebook')}</span>
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faTwitter} className="text-white hover:text-gray-400" size="lg" />
                                <span className="text-white">{t('Twitter')}</span>
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-gray-400" size="lg" />
                                <span className="text-white">{t('Instagram')}</span>
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                                <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-gray-400" size="lg" />
                                <span className="text-white">{t('Linkedin')}</span>
                            </a>
                        </li>
                    </ul>
                    <Languages />
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-white">+99855 500 15 11</span>
                    <div className="bg-white rounded-lg p-3">
                        <span className="text-sky-400 text-lg">{t('Get a Bonus')}</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
