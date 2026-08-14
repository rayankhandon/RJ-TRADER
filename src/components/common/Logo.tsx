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
        width={400}
        height={400}
        className={`object-contain transition-transform duration-200 group-hover:scale-[1.02] ${
          isFooter
            ? "h-[95px] sm:h-[110px] lg:h-[120px] w-auto filter brightness-0 invert"
            : "h-[58px] sm:h-[68px] lg:h-[76px] w-auto"
        }`}
        priority
      />
    </Link>
  );
};
