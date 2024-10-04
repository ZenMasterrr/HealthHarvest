"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Search, Home, LayoutGrid, User, Clock } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function GroceryStore() {
  const headerRef = useRef(null)
  const bannersRef = useRef(null)
  const categoriesRef = useRef(null)
  const popularItemsRef = useRef(null)

  useEffect(() => {
    gsap.from(headerRef.current, { y: -50, opacity: 0, duration: 1 })
    gsap.from(bannersRef.current, { x: -100, opacity: 0, duration: 1, delay: 0.5 })
    gsap.from(categoriesRef.current, { y: 50, opacity: 0, duration: 1, delay: 1 })
    
    gsap.from(".popular-item", {
      scrollTrigger: {
        trigger: popularItemsRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
    })
  }, [])

  const categories = [
    { name: "Snacks", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Breakfast", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Drinks", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Coffee", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Canned", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Fruits", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Sauce", icon: "/placeholder.svg?height=64&width=64" },
    { name: "Vegetables", icon: "/placeholder.svg?height=64&width=64" },
  ]

  const popularItems = [
    { name: "Mushroom Sauce", price: "$8.92", image: "/placeholder.svg?height=100&width=100" },
    { name: "Deliciously Ella", price: "$20.72", image: "/placeholder.svg?height=100&width=100" },
    { name: "Mixed Nuts", price: "$3.01", image: "/placeholder.svg?height=100&width=100" },
    { name: "Seasoned Avocado", price: "$4.29", image: "/placeholder.svg?height=100&width=100" },
    { name: "6 Pieces Eggs", price: "$6.92", image: "/placeholder.svg?height=100&width=100" },
    { name: "Premium Muffin", price: "$8.92", image: "/placeholder.svg?height=100&width=100" },
  ]

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100">
      <header ref={headerRef} className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-green-500 rounded-full mr-2" />
          <div>
            <h1 className="font-bold">2464 Royal Ln, Mesa</h1>
            <p className="text-xs text-gray-500">Your address</p>
          </div>
        </div>
        <div className="relative flex-grow mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-8 pr-4 py-2 rounded-full border border-gray-300 text-sm"
          />
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
        <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">02</div>
      </header>

      <div ref={bannersRef} className="flex space-x-4 mb-6 overflow-x-auto pb-4 -mx-4 px-4">
        <div className="flex-shrink-0 w-64 h-32 bg-green-600 rounded-lg flex items-center justify-center text-white text-center p-4">
          <p className="font-bold text-lg">MEAL PLAN WITH GROCERY STORE</p>
        </div>
        <div className="flex-shrink-0 w-64 h-32 bg-purple-600 rounded-lg flex items-center justify-center text-white text-center p-4">
          <p className="font-bold text-lg">MAKING THE MOST OF YOUR GROCERY</p>
        </div>
        <div className="flex-shrink-0 w-64 h-32 bg-teal-600 rounded-lg flex items-center justify-center text-white text-center p-4">
          <p className="font-bold text-lg">SHOPPING WITH GROCERY STORE</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Categories</h2>
        <button className="text-green-500 text-sm font-semibold">View All</button>
      </div>
      <div ref={categoriesRef} className="flex space-x-4 mb-6 overflow-x-auto pb-4 -mx-4 px-4">
        {categories.map((category, index) => (
          <div key={index} className="flex-shrink-0 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image src={category.icon} alt={category.name} width={64} height={64} />
            </div>
            <p className="mt-2 text-xs">{category.name}</p>
          </div>
        ))}
      </div>

      <h2 className="font-bold text-lg mb-4">Popular Items</h2>
      <div ref={popularItemsRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16">
        {popularItems.map((item, index) => (
          <div key={index} className="popular-item bg-white p-4 rounded-lg shadow">
            <Image src={item.image} alt={item.name} width={100} height={100} className="mx-auto mb-2" />
            <h3 className="font-semibold text-sm">{item.name}</h3>
            <p className="text-gray-600 text-xs">{item.price}</p>
            <button className="mt-2 bg-green-500 text-white w-6 h-6 rounded-full text-lg font-bold flex items-center justify-center">+</button>
          </div>
        ))}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
        <Home className="text-gray-400 w-6 h-6" />
        <LayoutGrid className="text-gray-400 w-6 h-6" />
        <User className="text-gray-400 w-6 h-6" />
        <Clock className="text-gray-400 w-6 h-6" />
      </nav>
    </div>
  )
}
