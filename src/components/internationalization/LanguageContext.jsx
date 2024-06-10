// LanguageContext.js
import { createContext, useState, useContext } from "react";
import { languageData as allLanguageData } from "./languageData"; // Import all language data

// Create a new context for language data
export const LanguageContext = createContext();

// Create a custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Language provider component
export const LanguageProvider = ({ children }) => {
  // State to manage current language
  const [currentLanguage, setCurrentLanguage] = useState("en"); // Default language is English

  // Function to switch language
  const switchLanguage = (language) => {
    setCurrentLanguage(language);
  };

  // Get language data for the selected language
  const languageData = allLanguageData[currentLanguage];

  return (
    <LanguageContext.Provider
      value={{ languageData, currentLanguage, switchLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
