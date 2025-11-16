"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface RefinedCardProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  onClick?: () => void;
}

export const RefinedCard: React.FC<RefinedCardProps> = ({
  children,
  containerClassName,
  className,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Smooth spring animations for mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), springConfig);
  
  // Gradient position based on mouse
  const gradientX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const gradientY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative rounded-2xl overflow-hidden",
        "transition-shadow duration-300",
        "hover:shadow-2xl hover:shadow-black/20",
        onClick && "cursor-pointer",
        containerClassName
      )}
    >
      {/* Gradient border effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${gradientX}% ${gradientY}%, rgba(255,255,255,0.15), transparent 40%)`,
        }}
      />
      
      {/* Inner card with glass morphism effect */}
      <div
        className={cn(
          "relative h-full backdrop-blur-sm",
          "bg-gradient-to-br from-white/5 to-transparent",
          "border border-white/10",
          "rounded-2xl overflow-hidden",
          "transition-all duration-300",
          "group-hover:border-white/20",
          className
        )}
        style={{
          transform: "translateZ(20px)",
        }}
      >
        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: "url(/noise.webp)",
            backgroundSize: "200px",
          }}
        />
        
        {/* Ambient light effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(255,255,255,0.08) 0%, transparent 50%)`,
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 h-full px-5 py-5 sm:px-6 sm:py-6">
          {children}
        </div>
        
        {/* Bottom gradient overlay for depth */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>
      
      {/* Outer glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-white/5 -z-10" />
    </motion.div>
  );
};

// Variant with simpler animation for performance (for grids with many cards)
export const RefinedCardSimple: React.FC<RefinedCardProps> = ({
  children,
  containerClassName,
  className,
  onClick,
}) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ 
        y: -4,
        scale: 1.01,
        transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] }
      }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative rounded-2xl overflow-hidden",
        "transition-all duration-300",
        "hover:shadow-2xl hover:shadow-black/20",
        onClick && "cursor-pointer",
        containerClassName
      )}
    >
      {/* Inner card */}
      <div
        className={cn(
          "relative h-full backdrop-blur-sm",
          "bg-gradient-to-br from-white/5 to-transparent",
          "border border-white/10",
          "rounded-2xl overflow-hidden",
          "transition-all duration-300",
          "group-hover:border-white/20",
          "group-hover:from-white/8",
          className
        )}
      >
        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: "url(/noise.webp)",
            backgroundSize: "200px",
          }}
        />
        
        {/* Top highlight */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content */}
        <div className="relative z-10 h-full px-5 py-5 sm:px-6 sm:py-6">
          {children}
        </div>
        
        {/* Bottom gradient overlay for depth */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
};
