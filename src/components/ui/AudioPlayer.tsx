"use client";

import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress] = useState(30); // Mock progress
    const [isSleepTimerActive, setIsSleepTimerActive] = useState(false);

    const togglePlay = () => setIsPlaying(!isPlaying);
    const toggleSleepTimer = () => setIsSleepTimerActive(!isSleepTimerActive);

    return (
        <div className="w-full max-w-md mx-auto p-8">
            {/* Simple Icon Area */}
            <div className="aspect-video rounded-2xl bg-white/5 border border-white/10 mb-8 flex items-center justify-center relative overflow-hidden shadow-inner">
                <Moon className={cn("w-20 h-20 text-amber-100/80 transition-all duration-1000 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]", isPlaying ? "scale-110" : "scale-100")} />

                {/* Sleep Timer Indicator */}
                {isSleepTimerActive && (
                    <div className="absolute top-4 right-4 bg-amber-500/20 border border-amber-500/30 text-amber-200 text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-md">
                        <ClockIcon className="w-4 h-4" /> 30m
                    </div>
                )}
            </div>

            {/* Track Info */}
            <div className="text-center mb-8 space-y-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">Money Basics: Saving</h3>
                <p className="text-lg text-white/60 font-medium">Lesson 1: Why Save?</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-10">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="flex justify-between text-sm font-bold text-white/40 mt-3">
                    <span>04:20</span>
                    <span>12:45</span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={toggleSleepTimer}
                    className={cn("p-3 rounded-full transition-colors", isSleepTimerActive ? "text-amber-400 bg-amber-500/10" : "text-white/40 hover:bg-white/10 hover:text-white")}
                    title="Sleep Timer"
                >
                    <Moon className="w-6 h-6" />
                </button>

                <div className="flex items-center gap-6">
                    <button className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                        <SkipBack className="w-8 h-8" />
                    </button>
                    <button
                        onClick={togglePlay}
                        className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all active:scale-95 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                    >
                        {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                    </button>
                    <button className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                        <SkipForward className="w-8 h-8" />
                    </button>
                </div>

                <button className="p-3 text-white/40 hover:bg-white/10 hover:text-white rounded-full transition-colors">
                    <Volume2 className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}

function ClockIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}
