"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    id: 1,
    name: 'Classic Leather Jacket',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Premium Denim Jeans',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Wool Blend Coat',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    name: 'Cotton T-Shirt',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const productsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out",
      })

      // Products animations
      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: productsRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen">
      <section 
        ref={heroRef} 
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/6069075/pexels-photo-6069075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Discover Your Style</h1>
          <p className="text-xl mb-8">Explore our new collection of premium fashion items</p>
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            Shop Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <section 
        ref={productsRef} 
        className="py-24 bg-background"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card 
                key={product.id} 
                className="product-card overflow-hidden group"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-lg font-bold">${product.price}</p>
                  <Button className="w-full mt-4">Add to Cart</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}