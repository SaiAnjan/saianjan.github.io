'use client'

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <NavigationMenu className="max-w-screen-xl mx-auto p-4">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="font-medium">
                Sai Anjan
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Hero Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="flex items-center gap-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/Images/me.jpg" alt="Sai Anjan" />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-semibold">Sai Anjan</h1>
            <p className="text-muted-foreground">UX Designer in DuPont India</p>
            <Button variant="outline" className="mt-2" asChild>
              <Link href="/resume.pdf">📄 Resume</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-8">
        <h2 className="text-lg font-semibold mb-4">About</h2>
        <p className="text-muted-foreground">
          I'm a Product Designer with over 5 years of experience in UX research and interaction design. 
          I've worked with companies like Microsoft, Dell, and Jio Platforms, focusing on creating 
          user-centered designs and solving complex problems through innovation.
        </p>
      </section>

      {/* Interaction Techniques Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-8">
        <h2 className="text-lg font-semibold mb-4">Interaction Techniques</h2>
        <div className="grid gap-6">
          <Card>
            <Link href="https://v0.dev/chat/dual-thumb-range-slider-fkMr4tGGxdp" target="_blank" className="block">
              <CardHeader>
                <CardTitle>Dual Thumb Range Slider</CardTitle>
                <CardDescription>Interactive demo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-ratio aspect-[16/9] relative overflow-hidden rounded-lg">
                  <img 
                    src="/Images/interactions/range-slider.png" 
                    alt="Dual Thumb Range Slider" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-8">
        <h2 className="text-lg font-semibold mb-4">Projects</h2>
        <div className="grid gap-6">
          <Card>
            <Link href="/gpay" className="block">
              <CardHeader>
                <CardTitle>Google Pay + Wallet</CardTitle>
                <CardDescription>2024 • 7 min read</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-ratio aspect-[16/9] relative overflow-hidden rounded-lg">
                  <img 
                    src="/Images/gpay.png" 
                    alt="Google Pay Project" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardContent>
            </Link>
          </Card>
          {/* Add more project cards here */}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-screen-xl mx-auto px-4 py-12 text-center">
        <p className="text-muted-foreground">Made with ❤️ in Hyderabad, India</p>
        <div className="flex justify-center gap-4 mt-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://x.com/Dhaathre" target="_blank">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://dribbble.com/saianjan" target="_blank">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.85 5.943 2.072zm-8.228-1.22c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zM1.662 12c0-.177.012-.354.027-.53 3.853-.005 7.216-.448 10.085-1.347.233.475.456.952.67 1.432-3.37 1.561-6.016 3.886-7.932 7.079C2.679 17.15 1.662 14.707 1.662 12zm3.657 7.043c1.767-3.021 4.243-5.203 7.47-6.606 1.018 2.639 1.765 5.367 2.239 8.184C13.74 21.165 12.251 21.5 10.7 21.5c-2.194 0-4.217-.756-5.381-2.457zm7.44 2.457c-.386-2.515-1.053-4.999-1.992-7.406 1.907-.314 3.945-.25 6.197.145-.335 2.919-2.059 5.403-4.205 7.261z"/>
              </svg>
            </Link>
          </Button>
        </div>
      </footer>
    </main>
  )
} 