"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Type,
  Youtube,
  Mail,
  Smile,
  Search,
  CheckCircle,
  Zap,
  Users,
} from "lucide-react";
import Header from "./_components/LandingPage/Header";
import Footer from "./_components/LandingPage/Footer";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  const navText = [
    { icon: Type, title: "Blog Posts" },
    { icon: Smile, title: "Text to Emoji" },
    { icon: Youtube, title: "YouTube Descriptions" },
    { icon: Mail, title: "Email Content" },
    { icon: Search, title: "SEO Title" },
    { icon: Type, title: "Text Improver" },
  ];

  return (
    <div className="flex flex-col bg-gradient-to-br from-[#434343] to-[#000000] text-white">
      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="flex min-h-screen w-full items-center justify-center py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                AI-Powered Content Creation
              </h1>
              <p className="mx-auto max-w-[700px] text-xl text-purple-100">
                Generate, edit, and customize AI-created content with pre-built
                templates.
              </p>
              <Button
                onClick={() => router.push("/dashboard", { scroll: false })}
                className="bg-yellow-400 text-purple-900 transition-colors hover:bg-yellow-300"
              >
                Get Started
              </Button>
            </div>
          </div>
        </section>

        {/* Content Templates Section */}
        <section
          id="about"
          className="w-full bg-white/10 py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-8 text-center text-2xl font-bold tracking-tighter sm:text-3xl">
              Content Templates
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {navText.map((item, index) => (
                <Card
                  key={index}
                  className="border-none bg-white/20 transition-colors hover:bg-white/30"
                >
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <item.icon className="mb-2 h-8 w-8 text-yellow-300" />
                    <h3 className="text-center text-sm font-semibold">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-8 text-center text-2xl font-bold tracking-tighter sm:text-3xl">
              Key Features
            </h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description:
                    "Generate content in seconds with our advanced AI technology.",
                },
                {
                  icon: CheckCircle,
                  title: "High Quality",
                  description:
                    "Our AI produces top-notch content that rivals human-written text.",
                },
                {
                  icon: Users,
                  title: "Customizable",
                  description:
                    "Tailor the AI output to match your unique voice and style.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <feature.icon className="mb-4 h-12 w-12 text-yellow-300" />
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-purple-100">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="howitworks"
          className="w-full bg-white/10 py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  How It Works
                </h2>
                <ul className="space-y-4">
                  {[
                    "Choose a content template",
                    "Input your topic or keywords",
                    "Generate AI-powered content",
                    "Edit and customize as needed",
                  ].map((step, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="text-lg font-bold text-yellow-300">
                        {index + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex h-64 w-full items-center justify-center rounded-lg bg-gradient-to-r from-yellow-300 to-pink-300 shadow-lg">
                  <Sparkles className="h-24 w-24 text-purple-900" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-8 text-center text-2xl font-bold tracking-tighter sm:text-3xl">
              Pricing Plans
            </h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Basic",
                  price: "$9.99",
                  features: [
                    "5 templates",
                    "100 generations/month",
                    "Email support",
                  ],
                },
                {
                  name: "Pro",
                  price: "$19.99",
                  features: [
                    "All templates",
                    "Unlimited generations",
                    "Priority support",
                  ],
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  features: [
                    "Custom templates",
                    "API access",
                    "Dedicated account manager",
                  ],
                },
              ].map((plan, index) => (
                <Card key={index} className="border-none bg-white/20">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {plan.name}
                    </h3>
                    <p className="mb-4 text-3xl font-bold text-slate-100">
                      {plan.price}
                    </p>
                    <ul className="mb-4 space-y-2 text-slate-200">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-yellow-300" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-yellow-400 text-purple-900 transition-colors hover:bg-yellow-300">
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section
          id="getstarted"
          className="w-full bg-white/10 py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[600px] text-lg text-purple-100">
                Join thousands of content creators using AI Content Genius.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1 border-white/40 bg-white/20 text-white placeholder-white/60"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-yellow-400 text-purple-900 transition-colors hover:bg-yellow-300">
                    Sign Up
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
