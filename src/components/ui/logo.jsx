"use client";

import React from "react";
import { cn } from "@/lib/utils";

const Logo = ({ className, size = "md" }) => {
  const sizeClasses = {
    sm: "w-6 h-6 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-base",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Icon part with improved design */}
      <div className="relative">
        <div
          className={cn(
            "relative flex items-center justify-center rounded-xl font-bold transition-all duration-300 group-hover:scale-110",
            "bg-blue-600 text-white shadow-lg shadow-blue-500/30 border border-blue-400/20",
            "dark:bg-blue-500 dark:shadow-blue-400/40 dark:border-blue-300/30",
            sizeClasses[size],
          )}
        >
          {/* Icon */}
          <span
            className={cn(
              "relative z-10 font-mono font-bold",
              size === "sm"
                ? "text-xs"
                : size === "md"
                  ? "text-sm"
                  : "text-base",
            )}
          >
            {"</>"}
          </span>
        </div>
      </div>

      {/* Text part with improved typography */}
      <div className="flex flex-col">
        <span
          className={cn(
            "font-bold tracking-tight transition-colors duration-200 leading-tight",
            "text-gray-900 dark:text-white",
            textSizeClasses[size],
          )}
        >
          Coder
        </span>
        <span
          className={cn(
            "text-xs font-medium tracking-wider uppercase transition-colors duration-200",
            "text-gray-600 dark:text-gray-300",
          )}
        >
          IDE
        </span>
      </div>
    </div>
  );
};

export default Logo;
