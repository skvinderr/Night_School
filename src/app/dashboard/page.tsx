import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { LessonCard } from "@/components/ui/LessonCard";
import { Trophy, Sprout, Target, Sparkles } from "lucide-react";

export default function Dashboard() {
    const recommendedLessons = [
        {
            id: "1",
            title: "Better Crops: Soil Health",
            description: "Simple ways to keep your land healthy for years.",
            duration: "15 min",
            rating: 4.8,
            category: "Farming",
        },
        {
            id: "2",
            title: "Money Basics: Saving",
            description: "How to save small amounts safely for the future.",
            duration: "12 min",
            rating: 4.9,
            category: "Money",
        },
        {
            id: "3",
            title: "Small Loans Explained",
            description: "Understanding how loans work before you borrow.",
            duration: "18 min",
            rating: 4.7,
            category: "Business",
        },
    ];

    return (
        <div className="min-h-screen w-full relative flex flex-col">
            {/* Background Image with Heavy Overlay for Readability */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat fixed"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop')", // Darker, moody rural field at night/dusk
                }}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
            </div>

            <div className="container mx-auto px-4 py-8 space-y-10 relative z-10">
                {/* Header & Stats */}
                <div className="space-y-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-md">
                                Good Evening, Alex
                            </h1>
                            <p className="text-white/80 text-lg mt-2 font-medium">
                                Ready to grow your knowledge tonight?
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-amber-400 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-amber-500/30">
                            <Sparkles className="w-5 h-5" />
                            <span className="font-bold">Premium Member</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Glassmorphism Stats Cards */}
                        <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center gap-5 shadow-xl hover:bg-black/50 transition-all group">
                            <div className="p-4 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 text-amber-400 border border-amber-500/20 group-hover:scale-110 transition-transform">
                                <Trophy className="w-8 h-8" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white/60 uppercase tracking-wider">Total Growth</p>
                                <p className="text-3xl font-bold text-white">1,250 XP</p>
                            </div>
                        </div>

                        <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center gap-5 shadow-xl hover:bg-black/50 transition-all group">
                            <div className="p-4 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                                <Sprout className="w-8 h-8" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white/60 uppercase tracking-wider">Day Streak</p>
                                <p className="text-3xl font-bold text-white">5 Days</p>
                            </div>
                        </div>

                        <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center gap-5 shadow-xl hover:bg-black/50 transition-all group">
                            <div className="p-4 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                                <Target className="w-8 h-8" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white/60 uppercase tracking-wider">Quiz Score</p>
                                <p className="text-3xl font-bold text-white">92%</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Player Area */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold text-white/90 flex items-center gap-2">
                            <span className="w-1 h-8 bg-amber-500 rounded-full block"></span>
                            Your Lesson for Tonight
                        </h2>

                        {/* Audio Player Container - Darker Glass */}
                        <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                            <AudioPlayer />
                        </div>

                        {/* Context Card */}
                        <div className="bg-gradient-to-r from-amber-900/40 to-black/40 backdrop-blur-md border border-amber-500/20 rounded-2xl p-6 mt-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Trophy className="w-24 h-24 text-amber-500" />
                            </div>
                            <h3 className="font-bold text-lg text-amber-400 mb-2 flex items-center gap-2">
                                <Sparkles className="w-4 h-4" />
                                Why this lesson?
                            </h3>
                            <p className="text-white/90 font-medium leading-relaxed relative z-10">
                                You did great on the quiz! This lesson on <span className="text-amber-300 font-bold">"Saving"</span> will help you build on what you learned about money yesterday.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar / Up Next */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white/90">Next Steps</h2>
                            <button className="text-sm font-bold text-amber-400 hover:text-amber-300 hover:underline transition-colors">See All</button>
                        </div>
                        <div className="space-y-4">
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
