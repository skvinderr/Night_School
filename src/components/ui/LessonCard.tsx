"use client";

import { Play, Clock, Star } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/languageContext";

interface LessonCardProps {
    id: string;
    title: string;
    description: string;
    duration: string;
    rating: number;
    category: string;
    image?: string;
}

export function LessonCard({ id, title, description, duration, rating, category, image }: LessonCardProps) {
    const { t } = useLanguage();
    // Simple mapping for demo purposes. In a real app, category IDs would be better.
    const categoryKey = `cat.${category.toLowerCase()}`;
    const translatedCategory = t(categoryKey) === categoryKey ? category : t(categoryKey);

    return (
        <div className="group relative h-36 w-full overflow-hidden rounded-xl cursor-pointer shadow-lg border border-white/5">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                    backgroundImage: `url('${image || "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2940&auto=format&fit=crop"}')`
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-between px-6">
                <div className="flex-1 pr-4">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
                            {translatedCategory}
                        </span>
                        <div className="flex items-center gap-1 text-white/80 text-xs font-medium">
                            <Clock className="w-3.5 h-3.5" />
                            {duration}
                        </div>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-200 transition-colors leading-tight">
                        {title}
                    </h3>
                    <p className="text-sm text-white/70 line-clamp-1 font-light mt-1.5">
                        {description}
                    </p>
                </div>

                {/* Play Button */}
                <Link
                    href={`/lesson/${id}`}
                    className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black transition-all hover:scale-110 shadow-xl"
                >
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                </Link>
            </div>
        </div>
    );
}
