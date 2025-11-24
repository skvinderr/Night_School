import { Play, Clock, Star } from "lucide-react";
import Link from "next/link";

interface LessonCardProps {
    id: string;
    title: string;
    description: string;
    duration: string;
    rating: number;
    category: string;
}

export function LessonCard({ id, title, description, duration, rating, category }: LessonCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/60 transition-all hover:shadow-xl hover:shadow-amber-500/5 hover:border-amber-500/30">
            <div className="p-5 space-y-3">
                <div className="flex justify-between items-start">
                    <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white/90 border border-white/10">
                        {category}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                        <Star className="w-3 h-3 fill-current" />
                        {rating}
                    </div>
                </div>

                <div className="space-y-1">
                    <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-white/60 line-clamp-2 font-medium">
                        {description}
                    </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-white/50 font-medium">
                        <Clock className="w-3 h-3" />
                        {duration}
                    </div>
                    <Link href={`/lesson/${id}`} className="inline-flex items-center justify-center rounded-full bg-amber-500 h-8 w-8 text-black shadow-lg shadow-amber-500/20 transition-all hover:bg-amber-400 hover:scale-105">
                        <Play className="h-3 w-3 fill-current ml-0.5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
