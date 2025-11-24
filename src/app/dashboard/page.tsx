import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { LessonCard } from "@/components/ui/LessonCard";
import { Trophy, Sprout, Target } from "lucide-react";

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
        <div className="container mx-auto px-4 py-8 space-y-10">
            {/* Header & Stats */}
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Good Evening, Alex</h1>
                    <p className="text-muted-foreground text-lg">Ready to grow your knowledge tonight?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-border p-6 rounded-2xl flex items-center gap-4 shadow-sm">
                        <div className="p-4 rounded-full bg-secondary/20 text-yellow-700">
                            <Trophy className="w-8 h-8" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Total Growth</p>
                            <p className="text-3xl font-bold text-foreground">1,250 XP</p>
                        </div>
                    </div>
                    <div className="bg-white border border-border p-6 rounded-2xl flex items-center gap-4 shadow-sm">
                        <div className="p-4 rounded-full bg-primary/10 text-primary">
                            <Sprout className="w-8 h-8" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Day Streak</p>
                            <p className="text-3xl font-bold text-foreground">5 Days</p>
                        </div>
                    </div>
                    <div className="bg-white border border-border p-6 rounded-2xl flex items-center gap-4 shadow-sm">
                        <div className="p-4 rounded-full bg-accent/10 text-accent">
                            <Target className="w-8 h-8" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Quiz Score</p>
                            <p className="text-3xl font-bold text-foreground">92%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Player Area */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">Your Lesson for Tonight</h2>
                    <AudioPlayer />

                    <div className="bg-secondary/20 border border-secondary/30 rounded-2xl p-6 mt-6">
                        <h3 className="font-bold text-lg text-yellow-900 mb-2">Why this lesson?</h3>
                        <p className="text-yellow-900/80 font-medium">
                            You did great on the quiz! This lesson on "Saving" will help you build on what you learned about money yesterday.
                        </p>
                    </div>
                </div>

                {/* Sidebar / Up Next */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-foreground">Next Steps</h2>
                        <button className="text-sm font-bold text-primary hover:underline">See All</button>
                    </div>
                    <div className="space-y-4">
                        {recommendedLessons.map((lesson) => (
                            <LessonCard key={lesson.id} {...lesson} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
