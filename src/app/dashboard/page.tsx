"use client";

import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { LessonCard } from "@/components/ui/LessonCard";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/languageContext";

export default function Dashboard() {
    const { t } = useLanguage();

    const recommendedLessons = [
        {
            id: "1",
            title: t("card.crops.title"),
            description: t("card.crops.desc"),
            duration: "15 min",
            rating: 4.8,
            category: "Farming",
            image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2940&auto=format&fit=crop"
        },
        {
            id: "2",
            title: t("card.saving.title"),
            description: t("card.saving.desc"),
            duration: "12 min",
            rating: 4.9,
            category: "Money",
            image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2940&auto=format&fit=crop"
        },
        {
            id: "3",
            title: t("card.loans.title"),
            description: t("card.loans.desc"),
            duration: "18 min",
            rating: 4.7,
            category: "Business",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2940&auto=format&fit=crop"
        },
    ];

    return (
        <div className="min-h-screen w-full relative flex flex-col overflow-hidden">
            {/* Cinematic Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2940&auto=format&fit=crop')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            <div className="container mx-auto px-6 py-12 relative z-10 flex flex-col h-full">
                {/* Minimalist Header & Stats */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-white/10 pb-8">
                    <div className="space-y-2">
                        <p className="text-amber-400 font-serif italic text-xl tracking-wide">{t("dash.greeting")}, Alex</p>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
                            {t("dash.continue")} <br />
                            <span className="text-white/90">{t("dash.journey")}</span>
                        </h1>
                    </div>

                    {/* Minimalist Stats - Text Only */}
                    <div className="flex gap-12 mt-8 md:mt-0">
                        <div className="text-right">
                            <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-1">{t("dash.totalGrowth")}</p>
                            <p className="text-3xl font-serif text-white">1,250 <span className="text-sm font-sans text-amber-400">XP</span></p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-1">{t("dash.streak")}</p>
                            <p className="text-3xl font-serif text-white">5 <span className="text-sm font-sans text-amber-400">{t("dash.days")}</span></p>
                        </div>
                    </div>
                </div>

                {/* Player Section - Full Width & Prominent */}
                <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <AudioPlayer />
                </div>

                {/* Main Content Area - Editorial Layout */}
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Featured Lesson Info */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="space-y-4 text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-3">
                                <span className="w-8 h-[1px] bg-amber-400"></span>
                                <span className="text-amber-400 uppercase tracking-widest text-sm font-bold">{t("dash.tonightFocus")}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                                {t("lesson.money.title")}: <br />
                                <span className="italic text-white/80">{t("lesson.money.subtitle")}</span>
                            </h2>
                            <p className="text-lg text-white/70 max-w-xl font-light leading-relaxed mx-auto lg:mx-0">
                                {t("lesson.money.desc")}
                            </p>

                            {/* Why it matters - Filling the space */}
                            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
                                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center text-center gap-2 hover:bg-white/10 transition-colors">
                                    <div className="p-2 bg-green-500/20 rounded-full text-green-400">
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-medium text-white/90">{t("why.1")}</span>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center text-center gap-2 hover:bg-white/10 transition-colors">
                                    <div className="p-2 bg-blue-500/20 rounded-full text-blue-400">
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-medium text-white/90">{t("why.2")}</span>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center text-center gap-2 hover:bg-white/10 transition-colors">
                                    <div className="p-2 bg-purple-500/20 rounded-full text-purple-400">
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-medium text-white/90">{t("why.3")}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Up Next - Cinematic List */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <h3 className="text-2xl font-serif text-white">{t("dash.upNext")}</h3>
                            <button className="text-xs uppercase tracking-widest text-white/60 hover:text-amber-400 transition-colors">{t("dash.viewLibrary")}</button>
                        </div>
                        <div className="space-y-6">
                            {recommendedLessons.map((lesson) => (
                                <LessonCard key={lesson.id} {...lesson} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
