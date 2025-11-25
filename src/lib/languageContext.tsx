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

    // Why it matters
    "why.title": { en: "Why it matters", hi: "यह क्यों महत्वपूर्ण है" },
    "why.1": { en: "Secure your future", hi: "अपना भविष्य सुरक्षित करें" },
    "why.2": { en: "Grow your business", hi: "अपना व्यवसाय बढ़ाएं" },
    "why.3": { en: "Sleep better", hi: "बेहतर नींद लें" },

    // Dashboard Content
    "lesson.money.title": { en: "Money Basics", hi: "पैसे की बुनियादी बातें" },
    "lesson.money.subtitle": { en: "The Art of Saving", hi: "बचत की कला" },
    "lesson.money.desc": { en: "Discover the fundamental principles of financial growth. Learn how small, consistent actions can lead to a secure and prosperous future for your farm and family.", hi: "वित्तीय विकास के मूल सिद्धांतों को जानें। सीखें कि कैसे छोटे, लगातार कदम आपके खेत और परिवार के लिए एक सुरक्षित और समृद्ध भविष्य की ओर ले जा सकते हैं।" },

    "card.crops.title": { en: "Better Crops: Soil Health", hi: "बेहतर फसलें: मिट्टी की सेहत" },
    "card.crops.desc": { en: "Simple ways to keep your land healthy for years.", hi: "अपनी ज़मीन को सालों तक उपजाऊ रखने के आसान तरीके।" },

    "card.saving.title": { en: "Money Basics: Saving", hi: "पैसे की बुनियादी बातें: बचत" },
    "card.saving.desc": { en: "How to save small amounts safely for the future.", hi: "भविष्य के लिए छोटी रकम सुरक्षित रूप से कैसे बचाएं।" },

    "card.loans.title": { en: "Small Loans Explained", hi: "छोटे ऋणों की जानकारी" },
    "card.loans.desc": { en: "Understanding how loans work before you borrow.", hi: "उधार लेने से पहले समझें कि ऋण कैसे काम करते हैं।" },

    // Landing Page
    "hero.new": { en: "New: Better Harvests Module", hi: "नया: बेहतर फसल मॉड्यूल" },
    "hero.title": { en: "Learn while the world sleeps.", hi: "सीखें जब दुनिया सोती है।" },
    "hero.subtitle": { en: "Practical audio lessons for farmers and small business owners. Master new skills during your rest, so you can grow when the sun rises.", hi: "किसानों और छोटे व्यापारियों के लिए व्यावहारिक ऑडियो पाठ। आराम के दौरान नए कौशल सीखें, ताकि सूर्योदय के साथ आप आगे बढ़ सकें।" },
    "hero.cta": { en: "Start Learning Free", hi: "मुफ्त में सीखना शुरू करें" },
    "hero.how": { en: "How It Works", hi: "यह कैसे काम करता है" },

    "features.title": { en: "Education that fits your life.", hi: "शिक्षा जो आपके जीवन के अनुकूल हो।" },
    "features.subtitle": { en: "We know you're busy from dawn till dusk. That's why NightSchool is designed to work when you're resting. No screens, no reading—just listen.", hi: "हम जानते हैं कि आप सुबह से शाम तक व्यस्त रहते हैं। इसीलिए रात्रि पाठशाला को आपके आराम के समय के लिए डिज़ाइन किया गया है। कोई स्क्रीन नहीं, कोई पढ़ना नहीं—बस सुनें।" },
    "features.1": { en: "Scientifically designed for memory retention", hi: "याददाश्त बढ़ाने के लिए वैज्ञानिक रूप से डिज़ाइन किया गया" },
    "features.2": { en: "Works completely offline", hi: "पूरी तरह से ऑफलाइन काम करता है" },
    "features.3": { en: "Recognized by local banks", hi: "स्थानीय बैंकों द्वारा मान्यता प्राप्त" },

    "step.1.title": { en: "1. Listen at Night", hi: "1. रात में सुनें" },
    "step.1.desc": { en: "Play our soothing audio lessons before you sleep. Designed to be absorbed while you rest.", hi: "सोने से पहले हमारे सुकून देने वाले ऑडियो पाठ चलाएं। आराम करते समय सीखने के लिए डिज़ाइन किया गया।" },
    "step.2.title": { en: "2. Grow Daily", hi: "2. रोज़ आगे बढ़ें" },
    "step.2.desc": { en: "A quick 2-minute quiz in the morning reinforces what you learned. Watch your skills grow.", hi: "सुबह 2 मिनट का क्विज़ आपकी सीख को पक्का करता है। अपने कौशल को बढ़ते हुए देखें।" },
    "step.3.title": { en: "3. Real Rewards", hi: "3. असली इनाम" },
    "step.3.desc": { en: "Earn certificates that unlock better loan terms and opportunities with our partners.", hi: "प्रमाणपत्र कमाएं जो हमारे भागीदारों के साथ बेहतर ऋण शर्तों और अवसरों को अनलॉक करते हैं।" },

    "stories.title": { en: "Stories from our community", hi: "हमारे समुदाय की कहानियाँ" },
    "cta.title": { en: "Start your journey tonight.", hi: "आज रात अपनी यात्रा शुरू करें।" },
    "cta.subtitle": { en: "Join thousands of farmers and workers improving their lives.", hi: "हजारों किसानों और श्रमिकों के साथ जुड़ें जो अपना जीवन सुधार रहे हैं।" },
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
