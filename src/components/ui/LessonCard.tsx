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
        <div className="group relative overflow-hidden rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
            <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {category}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-500 text-xs font-medium">
                        <Star className="w-3 h-3 fill-current" />
                        {rating}
                    </div>
                </div>

                <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {description}
                    </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {duration}
                    </div>
                    <Link href={`/lesson/${id}`} className="inline-flex items-center justify-center rounded-full bg-primary h-8 w-8 text-primary-foreground shadow transition-colors hover:bg-primary/90">
                        <Play className="h-3 w-3 fill-current ml-0.5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
