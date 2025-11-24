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
        <div className="w-full max-w-2xl">
            {/* Minimalist Controls Container */}
            <div className="flex items-center gap-8">
                {/* Play/Pause Button - The Centerpiece */}
                <button
                    onClick={togglePlay}
                    className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-all active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                    {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                </button>

                {/* Track Info & Progress */}
                <div className="flex-1 space-y-3">
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">Now Playing</p>
                            <h3 className="text-xl font-serif text-white">Lesson 1: Why Save?</h3>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-mono text-white/60">04:20 / 12:45</p>
                        </div>
                    </div>

                    {/* Slim Progress Bar */}
                    <div className="h-[2px] bg-white/10 w-full relative group cursor-pointer">
                        <div
                            className="absolute top-0 left-0 h-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                            style={{ width: `${progress}%` }}
                        />
                        {/* Hover Interaction Area */}
                        <div className="absolute -top-2 -bottom-2 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                            <div
                                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"
                                style={{ left: `${progress}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Secondary Controls */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleSleepTimer}
                        className={cn("p-2 rounded-full transition-colors", isSleepTimerActive ? "text-amber-400" : "text-white/40 hover:text-white")}
                        title="Sleep Timer"
                    >
                        <Moon className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-white/40 hover:text-white transition-colors">
                        <Volume2 className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
