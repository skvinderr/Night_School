"use client";

import Link from "next/link";
import { Sprout, BookOpen, BarChart, Globe } from "lucide-react";
import { useLanguage } from "@/lib/languageContext";

export function Navbar() {
    const { t, language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'hi' : 'en');
    };

    return (
        <nav className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                    <Sprout className="w-6 h-6" />
                    <span className="font-bold text-xl tracking-tight">{t("nav.title")}</span>
                </Link>

                <div className="flex items-center gap-6">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 text-sm font-bold bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors"
                    >
                        <Globe className="w-4 h-4" />
                        {language === 'en' ? 'हिंदी' : 'English'}
                    </button>

                    <Link href="/dashboard" className="text-sm font-bold text-primary-foreground/90 hover:text-white transition-colors flex items-center gap-2">
                        <BarChart className="w-4 h-4" />
                        {t("nav.progress")}
                    </Link>
                    <Link href="/courses" className="text-sm font-bold text-primary-foreground/90 hover:text-white transition-colors flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        {t("nav.allLessons")}
                    </Link>
                    <button className="bg-white text-primary px-5 py-2 rounded-full text-sm font-bold hover:bg-secondary hover:text-secondary-foreground transition-colors shadow-sm">
                        {t("nav.signIn")}
                    </button>
                </div>
            </div>
        </nav>
    );
}

