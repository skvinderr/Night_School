"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
    // Navbar
    "nav.title": { en: "NightSchool AI", hi: "रात्रि पाठशाला AI" },
    "nav.progress": { en: "My Progress", hi: "मेरी प्रगति" },
    "nav.allLessons": { en: "All Lessons", hi: "सभी पाठ" },
    "nav.signIn": { en: "Sign In", hi: "साइन इन" },

    // Dashboard
    "dash.greeting": { en: "Good Evening", hi: "शुभ संध्या" },
    "dash.continue": { en: "Continue your", hi: "अपनी यात्रा" },
    "dash.journey": { en: "Journey.", hi: "जारी रखें।" },
    "dash.totalGrowth": { en: "Total Growth", hi: "कुल वृद्धि" },
    "dash.streak": { en: "Streak", hi: "लगातार" },
    "dash.days": { en: "Days", hi: "दिन" },
    "dash.tonightFocus": { en: "Tonight's Focus", hi: "आज का ध्यान" },
    "dash.upNext": { en: "Up Next", hi: "अगला पाठ" },
    "dash.viewLibrary": { en: "View Library", hi: "लाइब्रेरी देखें" },

    // Audio Player
    "player.lesson": { en: "Lesson", hi: "पाठ" },

    // Categories
    "cat.farming": { en: "Farming", hi: "खेती" },
    "cat.money": { en: "Money", hi: "पैसा" },
    "cat.business": { en: "Business", hi: "व्यापार" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string) => {
        return translations[key]?.[language] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
