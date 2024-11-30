import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from ".././constant/en_app.json";

const resources = {
  en: enTranslations.en,
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: "en",
  ns: ["commons", "homePage"],
  defaultNS: "commons",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
