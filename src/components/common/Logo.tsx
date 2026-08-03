import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "header" | "footer";
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = "header", light = false }) => {
  const isFooter = size === "footer" || light;

  return (
    <Link href="/" className={`inline-flex items-center shrink-0 group ${className}`}>
      <Image
        src="/images/rj-traders-logo.png"
        alt="RJ Traders Logo"
        width={350}
        height={350}
        className={`object-contain transition-transform duration-200 group-hover:scale-[1.02] ${
          isFooter
            ? "h-[90px] sm:h-[100px] lg:h-[110px] w-auto filter brightness-0 invert"
            : "h-[54px] sm:h-[64px] lg:h-[74px] w-auto"
        }`}
        priority
      />
    </Link>
  );
};
