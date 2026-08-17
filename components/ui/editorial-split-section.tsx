'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface MetricRowItem {
  id: string
  metric: string
  title: string
  description: string
  href?: string
  icon?: React.ComponentType<{ className?: string }>
}

export interface EditorialSplitSectionProps {
  imageSrc: string
  imageAlt: string
  imageBadge?: string
  eyebrow: string
  title: string
  description?: string
  rows: MetricRowItem[]
  footnote?: string
  reverse?: boolean
  className?: string
}

export function EditorialSplitSection({
  imageSrc,
  imageAlt,
  imageBadge = 'FOTOGRAFÍA OFICIAL JAWIRA',
  eyebrow,
  title,
  description,
  rows,
  footnote = '* CADA EJE POTENCIA A LOS DEMÁS EN SINERGIA MULTIDIMENSIONAL. MODELO HOLÍSTICO DE DESARROLLO FUNDACIÓN JAWIRA.',
  reverse = false,
  className,
}: EditorialSplitSectionProps) {
  return (
    <section
      data-header-theme="light"
      className={cn("bg-background relative z-10 border-y border-border/50 overflow-hidden", className)}
    >
      <div className={cn("w-full flex flex-col min-h-[700px] lg:min-h-[800px]", reverse ? "lg:flex-row-reverse" : "lg:flex-row")}>
        
        {/* Photo Half */}
        <div className="w-full lg:w-1/2 relative min-h-[380px] sm:min-h-[480px] lg:min-h-full overflow-hidden bg-black/90 group">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover object-center opacity-95 transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          
          {imageBadge && (
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <span className="inline-block font-mono text-[11px] text-white/90 uppercase tracking-widest bg-black/60 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/20">
                {imageBadge}
              </span>
            </div>
          )}
        </div>

        {/* Warm Editorial Content Panel */}
        <div className={cn(
          "w-full lg:w-1/2 bg-[#F6F4EE] dark:bg-[#111827] p-8 sm:p-12 lg:p-16 flex flex-col justify-between border-t lg:border-t-0 border-border/60",
          reverse ? "lg:border-r" : "lg:border-l"
        )}>
          
          {/* Top Header & Intro Description */}
          <div className="mb-8 lg:mb-10">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-secondary">
                {eyebrow}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-foreground/50 hidden sm:inline-block">
                Fundación JAWIRA
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1B361F] dark:text-foreground leading-[1.08] mb-5">
              {title}
            </h2>

            {description && (
              <p className="text-base sm:text-lg text-foreground/80 font-medium leading-relaxed max-w-xl">
                {description}
              </p>
            )}
          </div>

          {/* Middle: Data Rows List */}
          <div className="space-y-0 flex-1 flex flex-col justify-center">
            {rows.map((row) => {
              const Icon = row.icon
              const content = (
                <div className="grid grid-cols-[auto_1fr_auto] gap-4 sm:gap-6 items-center">
                  {/* Metric Number */}
                  <div className="flex items-baseline min-w-[3rem] sm:min-w-[4rem]">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-[#27381A] dark:text-secondary group-hover:text-primary transition-colors leading-none font-mono">
                      {row.metric}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      {Icon && <Icon className="w-4 h-4 text-secondary flex-shrink-0" />}
                      <h3 className="font-mono text-xs sm:text-sm font-bold tracking-wider text-foreground/90 group-hover:text-primary transition-colors uppercase">
                        {row.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/70 font-medium leading-relaxed">
                      {row.description}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="flex items-center justify-end pl-2">
                    <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4 text-foreground/60 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              )

              if (row.href) {
                return (
                  <Link
                    key={row.id}
                    href={row.href}
                    className="group block py-5 sm:py-6 border-t border-[#DCD6CA] dark:border-border/60 transition-all duration-200 hover:px-3 -mx-3 rounded-lg hover:bg-[#ECE8DC] dark:hover:bg-[#192336]"
                  >
                    {content}
                  </Link>
                )
              }

              return (
                <div
                  key={row.id}
                  className="group block py-5 sm:py-6 border-t border-[#DCD6CA] dark:border-border/60 transition-all duration-200 hover:px-3 -mx-3 rounded-lg hover:bg-[#ECE8DC] dark:hover:bg-[#192336]"
                >
                  {content}
                </div>
              )
            })}
          </div>

          {/* Footnote */}
          {footnote && (
            <div className="mt-8 pt-5 border-t border-[#DCD6CA] dark:border-border/60">
              <p className="font-mono text-[10px] sm:text-xs text-foreground/60 tracking-wider uppercase leading-relaxed">
                {footnote}
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  )
}

export default EditorialSplitSection
