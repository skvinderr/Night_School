import { Play, Clock, Star } from "lucide-react";
import Link from "next/link";

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
    return (
        <div className="group relative h-32 w-full overflow-hidden rounded-lg cursor-pointer">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                    backgroundImage: `url('${image || "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2940&auto=format&fit=crop"}')`
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-between px-6">
                <div className="flex-1 pr-4">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-amber-400">
                            {category}
                        </span>
                        <div className="flex items-center gap-1 text-white/60 text-[10px]">
                            <Clock className="w-3 h-3" />
                            {duration}
                        </div>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-200 transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-white/60 line-clamp-1 font-light mt-1">
                        {description}
                    </p>
                </div>

                {/* Play Button (Only visible on hover or always subtle) */}
                <Link
                    href={`/lesson/${id}`}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:scale-110"
                >
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                </Link>
            </div>
        </div>
    );
}
