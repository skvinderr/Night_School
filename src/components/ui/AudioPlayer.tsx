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
        <div className="w-full max-w-md mx-auto bg-white border border-border rounded-3xl p-8 shadow-xl">
            {/* Simple Icon Area */}
            <div className="aspect-video rounded-2xl bg-primary/5 mb-8 flex items-center justify-center relative overflow-hidden">
                <Moon className={cn("w-20 h-20 text-primary transition-all duration-1000", isPlaying ? "scale-110" : "scale-100")} />

                {/* Sleep Timer Indicator */}
                {isSleepTimerActive && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" /> 30m
                    </div>
                )}
            </div>

            {/* Track Info */}
            <div className="text-center mb-8 space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Money Basics: Saving</h3>
                <p className="text-lg text-muted-foreground font-medium">Lesson 1: Why Save?</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-10">
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="flex justify-between text-sm font-bold text-muted-foreground mt-3">
                    <span>04:20</span>
                    <span>12:45</span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={toggleSleepTimer}
                    className={cn("p-3 rounded-full transition-colors", isSleepTimerActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:bg-muted")}
                    title="Sleep Timer"
                >
                    <Moon className="w-6 h-6" />
                </button>

                <div className="flex items-center gap-6">
                    <button className="text-foreground hover:text-primary transition-colors p-2">
                        <SkipBack className="w-8 h-8" />
                    </button>
                    <button
                        onClick={togglePlay}
                        className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-105 transition-all active:scale-95"
                    >
                        {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                    </button>
                    <button className="text-foreground hover:text-primary transition-colors p-2">
                        <SkipForward className="w-8 h-8" />
                    </button>
                </div>

                <button className="p-3 text-muted-foreground hover:bg-muted rounded-full transition-colors">
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
