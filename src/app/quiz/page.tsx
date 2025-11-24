"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function QuizPage() {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const question = {
        text: "What is the primary benefit of 'Crop Rotation' as discussed in last night's lesson?",
        options: [
            "It makes the farm look more organized",
            "It depletes soil nutrients faster",
            "It breaks pest cycles and improves soil health",
            "It requires less water immediately",
        ],
        correctIndex: 2,
    };

    const handleSubmit = () => {
        if (selectedOption === null) return;
        setIsSubmitted(true);
        setIsCorrect(selectedOption === question.correctIndex);
    };

    return (
        <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[80vh]">
            <div className="w-full max-w-2xl space-y-8">
                <div className="text-center space-y-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        Morning Quiz • Streak: 5 Days
                    </span>
                    <h1 className="text-3xl font-bold">Good Morning! ☀️</h1>
                    <p className="text-muted-foreground">Let's see what you retained from "Sustainable Farming Techniques".</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8 shadow-lg space-y-8">
                    <h2 className="text-xl font-semibold">{question.text}</h2>

                    <div className="space-y-3">
                        {question.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => !isSubmitted && setSelectedOption(index)}
                                disabled={isSubmitted}
                                className={cn(
                                    "w-full text-left p-4 rounded-xl border transition-all",
                                    selectedOption === index
                                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                                        : "border-border hover:bg-accent hover:text-accent-foreground",
                                    isSubmitted && index === question.correctIndex && "border-green-500 bg-green-500/10 text-green-500",
                                    isSubmitted && selectedOption === index && index !== question.correctIndex && "border-destructive bg-destructive/10 text-destructive"
                                )}
                            >
                                <div className="flex items-center justify-between">
                                    <span>{option}</span>
                                    {isSubmitted && index === question.correctIndex && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                                    {isSubmitted && selectedOption === index && index !== question.correctIndex && <XCircle className="w-5 h-5 text-destructive" />}
                                </div>
                            </button>
                        ))}
                    </div>

                    {!isSubmitted ? (
                        <button
                            onClick={handleSubmit}
                            disabled={selectedOption === null}
                            className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Submit Answer
                        </button>
                    ) : (
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {isCorrect ? (
                                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-center gap-4">
                                    <div className="p-2 bg-green-500/20 rounded-full text-green-500">
                                        <Trophy className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-green-500">Correct! +50 XP</p>
                                        <p className="text-sm text-muted-foreground">You're mastering this topic perfectly.</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4">
                                    <p className="font-bold text-destructive">Not quite right.</p>
                                    <p className="text-sm text-muted-foreground">The correct answer was: {question.options[question.correctIndex]}</p>
                                </div>
                            )}

                            <Link href="/dashboard" className="w-full inline-flex items-center justify-center bg-secondary text-secondary-foreground py-3 rounded-xl font-medium hover:bg-secondary/80 transition-colors">
                                Continue to Dashboard <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
