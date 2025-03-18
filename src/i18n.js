import i18n from 'i18next';
import {I18nManager} from 'react-native';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'react-native-localize';
import RNRestart from 'react-native-restart'; // Import restart function

// Import translations
import en from './locales/en.json';
import ar from './locales/ar.json';

const resources = {
  en: {translation: en},
  ar: {translation: ar},
};

// Function to get stored or system language
const getStoredLanguage = async () => {
  try {
    const storedLang = await AsyncStorage.getItem('Language');
    if (storedLang) return storedLang;

    // Get system language
    const locales = Localization.getLocales();
    return locales[0]?.languageCode || 'en';
  } catch (error) {
    console.error('Error retrieving language:', error);
    return 'en';
  }
};

// Initialize i18n
const initializeI18n = async () => {
  const storedLanguage = await getStoredLanguage();

  await i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    lng: storedLanguage,
    fallbackLng: 'ar',
    supportedLngs: ['ar', 'en'],
    debug: false,
    keySeparator: false,
    interpolation: {escapeValue: false},
  });

  // Apply RTL settings
  I18nManager.forceRTL(storedLanguage === 'ar');
};

// Function to change language dynamically and restart the app
export const changeLanguage = async lang => {
  try {
    await AsyncStorage.setItem('Language', lang);
    await i18n.changeLanguage(lang);

    // Apply RTL settings
    I18nManager.forceRTL(lang === 'ar');

    // Restart the app to apply changes
    setTimeout(() => {
      RNRestart.restart();
    }, 500);
  } catch (error) {
    console.error('Error changing language:', error);
  }
};

// Call initializeI18n on app load
initializeI18n();

export default i18n;
