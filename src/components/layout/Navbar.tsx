import Link from "next/link";
import { Sprout, BookOpen, BarChart } from "lucide-react";

export function Navbar() {
    return (
        <nav className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                    <Sprout className="w-6 h-6" />
                    <span className="font-bold text-xl tracking-tight">NightSchool AI</span>
                </Link>

                <div className="flex items-center gap-6">
                    <Link href="/dashboard" className="text-sm font-bold text-primary-foreground/90 hover:text-white transition-colors flex items-center gap-2">
                        <BarChart className="w-4 h-4" />
                        My Progress
                    </Link>
                    <Link href="/courses" className="text-sm font-bold text-primary-foreground/90 hover:text-white transition-colors flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        All Lessons
                    </Link>
                    <button className="bg-white text-primary px-5 py-2 rounded-full text-sm font-bold hover:bg-secondary hover:text-secondary-foreground transition-colors shadow-sm">
                        Sign In
                    </button>
                </div>
            </div>
        </nav>
    );
}

