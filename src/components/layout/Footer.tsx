import { Sprout } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary/20 border-t border-secondary/30 mt-auto">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-primary">
                        <Sprout className="w-5 h-5" />
                        <span className="font-bold">NightSchool AI</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                        © {new Date().getFullYear()} NightSchool AI. Growing knowledge, every night.
                    </p>
                    <div className="flex gap-4 text-sm font-medium text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms</a>
                        <a href="#" className="hover:text-primary transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
