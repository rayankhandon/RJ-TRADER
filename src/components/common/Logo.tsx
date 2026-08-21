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
        className={`object-contain transition-transform duration-200 ${
          isFooter
            ? "h-[70px] sm:h-[85px] lg:h-[95px] w-auto filter brightness-0 invert group-hover:scale-[1.02]"
            : "h-[40px] sm:h-[48px] lg:h-[56px] w-auto group-hover:scale-[1.03]"
        }`}
        priority
      />
    </Link>
  );
};
