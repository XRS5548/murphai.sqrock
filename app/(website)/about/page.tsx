// app/about/page.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const features = [
    {
      title: "Smart AI Conversations",
      description: "Natural, context-aware conversations that feel human and intuitive.",
      icon: "💬",
    },
    {
      title: "Coding & Development Help",
      description: "Expert assistance with programming, debugging, and software architecture.",
      icon: "👨‍💻",
    },
    {
      title: "Learning & Research Assistance",
      description: "Accelerate your learning with personalized guidance and explanations.",
      icon: "📚",
    },
    {
      title: "Problem Solving",
      description: "Break down complex problems and find elegant solutions together.",
      icon: "🔍",
    },
    {
      title: "Fast and Reliable Responses",
      description: "Lightning-fast answers you can count on, 24/7.",
      icon: "⚡",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="relative w-32 h-32 mb-4">
            <Image
              src="/headerlogo.png"
              alt="Murph AI Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <Badge variant="outline" className="text-sm py-1 px-3">
            Meet Murph AI
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            About Murph AI
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Your intelligent companion for coding, learning, and everyday questions
          </p>
          
          <p className="text-lg text-muted-foreground max-w-3xl">
            Created by SQROCK, Murph is an advanced AI assistant designed to make 
            technology and knowledge accessible to everyone, everywhere.
          </p>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* About Murph Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
            Meet Your AI Assistant
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Murph is more than just an AI assistant — she's your friendly, intelligent 
              companion in the digital world. Whether you're diving deep into complex 
              coding problems, exploring new technologies, or simply need answers to 
              everyday questions, Murph is here to help.
            </p>
            <p>
              With a warm and approachable personality, Murph makes learning and problem-solving 
              feel natural and engaging. She specializes in coding, engineering concepts, 
              technology explanations, and academic research, but she's equally comfortable 
              helping with practical day-to-day queries.
            </p>
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Murph Can Do</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful AI capabilities at your fingertips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Our Mission
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Making AI Assistance Accessible to Everyone
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            At Murph AI, we're on a mission to help people learn faster, solve problems 
            more effectively, and harness the power of artificial intelligence in their 
            daily lives. We believe that advanced AI assistance should be accessible, 
            intuitive, and genuinely helpful for everyone.
          </p>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* About SQROCK Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8">
            <Badge variant="outline" className="mb-4">
              The Company Behind Murph
            </Badge>
            <h2 className="text-3xl font-bold mb-6">About SQROCK</h2>
          </div>
          
          <Card className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              SQROCK is a forward-thinking technology company dedicated to building 
              innovative AI tools and digital products that make a difference. We combine 
              cutting-edge artificial intelligence with thoughtful design to create 
              solutions that are both powerful and accessible. Our team is passionate 
              about pushing the boundaries of what's possible with AI while keeping the 
              human experience at the center of everything we build.
            </p>
          </Card>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Meet Murph?
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the future of AI assistance today. Start chatting with Murph and 
            discover how she can help you learn, create, and solve problems.
          </p>
          <div className="pt-4">
            <Link href="/chat" passHref>
              <Button size="lg" className="text-lg px-8 py-6">
                Start Chatting with Murph
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}