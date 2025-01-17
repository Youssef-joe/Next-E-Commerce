"use client";

import { useEffect, useRef, useState } from "react";
import { ShoppingCart, Menu, Search, X } from "lucide-react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // GSAP animation for navbar entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  // GSAP animation for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      gsap.from(mobileMenuRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    }
  }, [isMenuOpen]);

  return (
    <nav ref={navRef} className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <span className="text-xl font-bold">LUXE</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
              New Arrivals
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
              Men
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
              Women
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
              Collections
            </a>
            <a href="/login" className="text-foreground/80 hover:text-foreground transition-colors">
              Login
            </a>
            <a href="/register" className="text-foreground/80 hover:text-foreground transition-colors">
              Register
            </a>
            <a href="/" className="text-foreground/80 hover:text-foreground transition-colors">
              Home
            </a>
          </div>

          {/* Search and Cart Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden absolute top-16 left-0 w-full bg-background/80 backdrop-blur-md border-b"
          >
            <div className="flex flex-col space-y-4 p-4">
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
                New Arrivals
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
                Men
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
                Women
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
                Collections
              </a>
              <a href="/login" className="text-foreground/80 hover:text-foreground transition-colors">
                Login
              </a>
              <a href="/register" className="text-foreground/80 hover:text-foreground transition-colors">
                Register
              </a>
              <a href="/" className="text-foreground/80 hover:text-foreground transition-colors">
                Home
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}