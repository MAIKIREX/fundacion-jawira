import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export type JawiraButtonVariant =
  | "primary"
  | "secondary"
  | "olive"
  | "black"
  | "white"
  | "navy"
  | "green"
  | "outline-white"
  | "outline-dark"

export type JawiraButtonSize = "sm" | "default" | "md" | "lg" | "xl"

export interface JawiraButtonProps {
  href?: string
  variant?: JawiraButtonVariant
  size?: JawiraButtonSize
  bullets?: boolean
  className?: string
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  target?: string
  rel?: string
  "aria-label"?: string
}

export function JawiraButton({
  href,
  variant = "black",
  size = "default",
  bullets = false,
  className,
  children,
  onClick,
  type = "button",
  disabled,
  target,
  rel,
  "aria-label": ariaLabel,
}: JawiraButtonProps) {
  const variantClass = `btn-jawira-${variant}`
  const sizeClass = `btn-jawira-${size}`

  const content = (
    <span>
      {bullets ? (
        <>
          <span className="opacity-70 mr-1.5">•</span>
          {children}
          <span className="opacity-70 ml-1.5">•</span>
        </>
      ) : (
        children
      )}
    </span>
  )

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={cn("btn-35 btn-jawira", variantClass, sizeClass, className)}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn("btn-35 btn-jawira", variantClass, sizeClass, className)}
    >
      {content}
    </button>
  )
}

export default JawiraButton
