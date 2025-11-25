"use client";

import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Moon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/languageContext";

export function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress] = useState(30); // Mock progress
    const [isSleepTimerActive, setIsSleepTimerActive] = useState(false);

    const togglePlay = () => setIsPlaying(!isPlaying);
    const toggleSleepTimer = () => setIsSleepTimerActive(!isSleepTimerActive);

    const { t } = useLanguage();

    return (
        <div className="w-full max-w-5xl mx-auto">
            {/* Wide Horizontal Glass Card */}
            <div className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center gap-8">
                {/* Ambient Glow */}
                <div className="absolute top-0 left-1/4 -translate-x-1/2 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />

                {/* Album Art / Visualizer Area - Smaller & Square */}
                <div className="shrink-0 relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/5 relative overflow-hidden flex items-center justify-center group shadow-lg">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        {/* Central Icon */}
                        <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg">
                            <Moon className={cn("w-6 h-6 text-amber-100 transition-all duration-1000", isPlaying ? "scale-110 drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]" : "scale-100")} />
                        </div>
                    </div>
                    {/* Sleep Timer Badge - Positioned on image */}
                    {isSleepTimerActive && (
                        <div className="absolute -top-2 -right-2 bg-black/60 backdrop-blur-md border border-white/10 text-amber-400 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md z-20">
                            <Clock className="w-3 h-3" /> 30m
                        </div>
                    )}
                </div>

                {/* Content Area - Flex Grow */}
                <div className="flex-1 w-full min-w-0 flex flex-col justify-center">
                    {/* Track Info */}
                    <div className="text-center md:text-left mb-6 space-y-1">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight truncate">Money Basics</h3>
                        <p className="text-base text-white/60 font-medium tracking-wide">{t("player.lesson")} 1: The Art of Saving</p>
                    </div>

                    {/* Controls & Progress Row */}
                    <div className="flex flex-col gap-4">
                        {/* Progress Bar */}
                        <div className="w-full">
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden cursor-pointer group/progress">
                                <div
                                    className="h-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)] relative"
                                    style={{ width: `${progress}%` }}
                                >
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity shadow-sm" />
                                </div>
                            </div>
                            <div className="flex justify-between text-xs font-bold text-white/40 mt-2 font-mono">
                                <span>04:20</span>
                                <span>12:45</span>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-between md:justify-start md:gap-8">
                            <button
                                onClick={toggleSleepTimer}
                                className={cn("p-2.5 rounded-full transition-colors", isSleepTimerActive ? "text-amber-400 bg-amber-400/10" : "text-white/40 hover:text-white hover:bg-white/5")}
                                title="Sleep Timer"
                            >
                                <Moon className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-6">
                                <button className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                                    <SkipBack className="w-7 h-7" />
                                </button>
                                <button
                                    onClick={togglePlay}
                                    className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-all active:scale-95"
                                >
                                    {isPlaying ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current ml-1" />}
                                </button>
                                <button className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                                    <SkipForward className="w-7 h-7" />
                                </button>
                            </div>

                            <button className="p-2.5 text-white/40 hover:text-white hover:bg-white/5 rounded-full transition-colors">
                                <Volume2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
