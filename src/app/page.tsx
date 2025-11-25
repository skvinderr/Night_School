"use client";

import Link from "next/link";
import { Play, Sprout, Users, Sun, CheckCircle2, Star, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/languageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section - Realistic & Photographic */}
      <section className="w-full h-screen min-h-[600px] relative flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2940&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        </div>

        <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center space-y-8 pt-20">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-white mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
            {t("hero.new")}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-[900px] leading-[1.1] drop-shadow-lg animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            {t("hero.title")}
          </h1>

          <p className="max-w-[600px] text-gray-200 md:text-lg lg:text-xl font-normal leading-relaxed drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 min-w-[300px] justify-center pt-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-green-900 shadow-xl transition-all hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              {t("hero.cta")}
              <Play className="ml-2 h-4 w-4 fill-current" />
            </Link>
            <Link href="#how-it-works" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-black/20 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-black/40 hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              {t("hero.how")}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ArrowRight className="w-6 h-6 rotate-90" />
        </div>
      </section>

      {/* Features Grid - Clean & Minimal */}
      <section id="how-it-works" className="w-full py-24 bg-[#F9FAFB]">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                {t("features.title")}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("features.subtitle")}
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="p-1 rounded-full bg-green-100 text-green-700"><CheckCircle2 className="w-5 h-5" /></div>
                  <span className="font-medium">{t("features.1")}</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="p-1 rounded-full bg-green-100 text-green-700"><CheckCircle2 className="w-5 h-5" /></div>
                  <span className="font-medium">{t("features.2")}</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="p-1 rounded-full bg-green-100 text-green-700"><CheckCircle2 className="w-5 h-5" /></div>
                  <span className="font-medium">{t("features.3")}</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2942&auto=format&fit=crop')" }}
              />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col space-y-4 p-6">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-700 mb-2">
                <Sun className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t("step.1.title")}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t("step.1.desc")}
              </p>
            </div>

            <div className="flex flex-col space-y-4 p-6">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-700 mb-2">
                <Sprout className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t("step.2.title")}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t("step.2.desc")}
              </p>
            </div>

            <div className="flex flex-col space-y-4 p-6">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-700 mb-2">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t("step.3.title")}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t("step.3.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Realistic Portraits */}
      <section className="w-full py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">{t("stories.title")}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Sarah M.",
                role: "Small Farm Owner",
                quote: "I learned about soil health while I slept. My harvest this year is 30% better!",
                image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2940&auto=format&fit=crop"
              },
              {
                name: "David K.",
                role: "Shopkeeper",
                quote: "The finance lessons helped me manage my shop's money. I finally got a bank loan.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
              },
              {
                name: "Elena R.",
                role: "Community Leader",
                quote: "I recommend this to everyone in my village. It's so easy to use.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop"
              }
            ].map((testimonial, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <blockquote className="text-lg text-gray-600 italic max-w-xs">"{testimonial.quote}"</blockquote>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Simple & Direct */}
      <section className="w-full py-24 bg-green-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{t("cta.title")}</h2>
              <p className="max-w-[600px] text-green-100 md:text-xl mx-auto">
                {t("cta.subtitle")}
              </p>
            </div>

            <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-green-900 shadow-lg transition-transform hover:scale-105 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              {t("hero.cta")} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
