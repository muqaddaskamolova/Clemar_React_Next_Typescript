
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Languages = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('i18nextLng');
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    }
  }, [i18n]);

  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    if (typeof window !== 'undefined') {
      localStorage.setItem('i18nextLng', lng);
    }
  };

  return (
    <select onChange={(e) => handleChangeLanguage(e.target.value)} value={i18n.language}>
      <option value="uz">Uzbek</option>
      <option value="en">English</option>
      <option value="ru">Russian</option>
    </select>
  );
};

export default Languages;
