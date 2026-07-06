"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, Building2, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const teamMembers = [
    {
        nombre: "Lic. Jose Tambo",
        rol: "Director Ejecutivo",
        area: "Presidente Ejecutivo",
        image: "/images/jose_tambo.png",
    },
    {
        nombre: "Ing. Tupac Lima Chuquimia",
        rol: "Coordinador en Desarrollo Productivo",
        area: "tecnologia productiva",
        image: "/images/tupac_lima.png",
    },
    {
        nombre: "Dr. Henrry Patty",
        rol: "Coordinador de proyectos en Prevención  de la Salud",
        area: "Salud",
        image: "/images/henrry_patty.png",
    },
    {
        nombre: "Abg. Angel Quispe",
        rol: "Coordinador Jurídico",
        area: "Secretario General",
        image: "/images/angel_quispe.png",
    },
    {
        nombre: "Dra. Ana Ramos",
        rol: "Responsable de Investigación",
        area: "Investigación",
        image: "",
    },
    {
        nombre: "Lic. Carlos Pinto",
        rol: "Coordinador Territorial",
        area: "Territorio",
        image: "",
    },
];

const allies = [
    { nombre: "Fundación Qamañani Arka", image: "/images/logo_1.png" },
    { nombre: "Aliado 1", image: "/aliados/aliado-1.jpeg" },
    { nombre: "Aliado 2", image: "/aliados/aliado-2.jpeg" },
    { nombre: "Aliado 3", image: "/aliados/aliado-3.jpeg" },
    { nombre: "Aliado 4", image: "/aliados/aliado-4.jpeg" },
];

// Se duplica la lista para lograr un loop continuo sin saltos
const marqueeAllies = [...allies, ...allies];

export default function EquipoAliadosSection() {
    const sectionRef = useRef<HTMLElement>(null);

    // Plugin de Autoplay para Shadcn Carousel
    const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                // --- Animación del Encabezado del Equipo ---
                const headerTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".equipo-header",
                        start: "top 85%",
                    },
                });

                headerTl
                    .from(".equipo-subtitle", {
                        y: 20,
                        autoAlpha: 0,
                        duration: 0.6,
                        ease: "power3.out",
                    })
                    .from(
                        ".equipo-title",
                        {
                            y: 30,
                            autoAlpha: 0,
                            duration: 0.8,
                            ease: "power3.out",
                        },
                        "-=0.4",
                    )
                    .from(
                        ".equipo-desc",
                        {
                            y: 20,
                            autoAlpha: 0,
                            duration: 0.6,
                            ease: "power2.out",
                        },
                        "-=0.4",
                    );

                // Animación de cascada al entrar el slider
                gsap.from(".team-card", {
                    y: 60,
                    autoAlpha: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: ".carousel-container",
                        start: "top 85%",
                    },
                });
            });

            // --- Animación de los Aliados ---
            gsap.from(".aliados-header-item", {
                y: 25,
                autoAlpha: 0,
                duration: 0.6,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".aliados-section",
                    start: "top 85%",
                },
            });

            gsap.from(".ally-card", {
                y: 30,
                autoAlpha: 0,
                duration: 0.6,
                ease: "power3.out",
                stagger: 0.05,
                scrollTrigger: {
                    trigger: ".ally-grid",
                    start: "top 85%",
                },
            });
        },
        { scope: sectionRef, dependencies: [] },
    );

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 bg-background border-t border-border/20 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* --- EQUIPO --- */}
                <div className="mb-24 md:mb-32">
                    {/* Header Asimétrico Editorial */}
                    <div className="equipo-header mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16">
                        <div className="max-w-2xl">
                            <span className="equipo-subtitle block text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
                                Directorio y Equipo
                            </span>
                            <h2 className="equipo-title text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tighter leading-[1.1]">
                                Profesionales que
                                <br className="hidden md:block" />
                                impulsan el cambio.
                            </h2>
                        </div>
                        <p className="equipo-desc text-lg text-muted-foreground leading-relaxed max-w-[40ch] lg:pb-2">
                            La Fundación JAWIRA cuenta con un equipo
                            interdisciplinario compuesto por expertos en salud,
                            educación, tecnología e investigación.
                        </p>
                    </div>

                    {/* Minimalist Editorial Carousel */}
                    <div className="carousel-container relative w-full -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                        <Carousel
                            plugins={[plugin.current]}
                            opts={{
                                align: "start",
                                loop: true,
                                dragFree: true,
                            }}
                            className="w-full cursor-grab active:cursor-grabbing"
                            onMouseEnter={() => plugin.current.stop()}
                            onMouseLeave={() => plugin.current.play()}
                        >
                            <CarouselContent className="-ml-6 md:-ml-8">
                                {teamMembers.map((member, i) => (
                                    <CarouselItem
                                        key={i}
                                        className="pl-6 md:pl-8 basis-[80%] sm:basis-[320px] md:basis-[380px]"
                                    >
                                        <div className="team-card group flex flex-col gap-6">
                                            {/* Image Container */}
                                            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-muted/40 border border-border/40">
                                                {member.image ? (
                                                    <img
                                                        src={member.image}
                                                        alt={member.nombre}
                                                        className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)]"
                                                        draggable={false}
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex flex-col items-center justify-center bg-muted/30">
                                                        <Briefcase className="w-12 h-12 text-muted-foreground/20 mb-4" />
                                                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/30">
                                                            Fotografía pendiente
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Subtle Overlay on Hover */}
                                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                            </div>

                                            {/* Content (Outside Image) */}
                                            <div className="flex flex-col gap-1.5 px-2">
                                                <div className="flex items-center gap-3">
                                                    <span className="w-6 h-[2px] bg-secondary rounded-full" />
                                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary">
                                                        {member.area}
                                                    </span>
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-foreground mt-2 group-hover:text-primary transition-colors duration-300">
                                                    {member.nombre}
                                                </h3>
                                                <p className="text-muted-foreground font-medium text-sm md:text-base">
                                                    {member.rol}
                                                </p>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>

                {/* --- ALIADOS --- */}
                <div className="aliados-section pt-10 md:pt-20">
                    {/* Header */}
                    <div className="mb-12 max-w-2xl">
                        <span className="aliados-header-item block text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
                            Red de colaboración
                        </span>
                        <h2 className="aliados-header-item text-3xl md:text-5xl font-black text-foreground tracking-tighter leading-tight">
                            Aliados institucionales
                        </h2>
                        <p className="aliados-header-item text-lg text-muted-foreground mt-4 leading-relaxed max-w-[50ch]">
                            La Fundación JAWIRA trabaja en alianza estratégica
                            con instituciones públicas, privadas y comunitarias
                            para amplificar nuestro impacto.
                        </p>
                    </div>

                    {/* Allies marquee: loop horizontal automático */}
                    <div className="ally-grid group/marquee relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                        <div className="ally-marquee-track flex w-max items-stretch gap-4">
                            {marqueeAllies.map((ally, idx) => (
                                <div
                                    key={idx}
                                    className="ally-card h-28 w-48 md:w-56 flex-shrink-0 flex items-center justify-center bg-muted/20 rounded-[1.5rem] border border-border/30 hover:border-border/60 hover:bg-muted/40 transition-colors px-6 group"
                                >
                                    {ally.image ? (
                                        <div className="relative w-full h-16 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                                            <Image
                                                src={ally.image}
                                                alt={ally.nombre}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center gap-2">
                                            <Building2 className="w-6 h-6 text-muted-foreground/30 group-hover:text-muted-foreground/60 transition-colors" />
                                            <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground/40 text-center leading-tight">
                                                {ally.nombre}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <style jsx>{`
                            .ally-marquee-track {
                                animation: ally-marquee 28s linear infinite;
                            }
                            .group\\/marquee:hover .ally-marquee-track {
                                animation-play-state: paused;
                            }
                            @keyframes ally-marquee {
                                from {
                                    transform: translateX(0);
                                }
                                to {
                                    transform: translateX(-50%);
                                }
                            }
                        `}</style>
                    </div>

                    {/* Alliance CTA */}
                    <div className="mt-8">
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors group"
                        >
                            Explorar oportunidades de colaboración
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
