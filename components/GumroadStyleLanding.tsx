"use client";
import { Rocket, Code, Smartphone, Brain, ArrowRight, Star } from 'lucide-react';
import ProjectCard from './ProjectCard';

export default function GumroadLandingWithProjects() {
  const services = [
    {
      icon: <Code className="w-7 h-7 text-gray-900" />,
      title: "SaaS Platforms",
      description: "Build scalable, user-friendly SaaS solutions tailored to your business needs.",
      color: "bg-pink-100",
      accentColor: "bg-pink-500"
    },
    {
      icon: <Smartphone className="w-7 h-7 text-gray-900" />,
      title: "Mobile & Web Apps",
      description: "Create high-performance mobile and web apps designed for user engagement and success.",
      color: "bg-blue-100",
      accentColor: "bg-blue-500"
    },
    {
      icon: <Brain className="w-7 h-7 text-gray-900" />,
      title: "AI-Powered Apps",
      description: "Develop innovative AI applications to automate processes and drive business growth.",
      color: "bg-yellow-100",
      accentColor: "bg-yellow-500"
    }
  ];

  const projects = [
    { 
      name: "NoMoreCopyRight", 
      description: "An AI tool that creates copyright-free images, videos, and music, combined with a free stock content platform.", 
      color: "bg-purple-100",
      url: "https://nomorecopyright.com"
    },
    { 
      name: "StoryTyme.ai", 
      description: "Create custom children's books in 5 simple steps", 
      color: "bg-pink-100",
      url: "https://storytyme.ai"
    },
    { 
      name: "getsweet.ai", 
      description: "AI platform for the social media automation", 
      color: "bg-blue-100",
      url: "https://getsweet.ai"
    },
    { 
      name: "robotizia.ai", 
      description: "AI content & automation platform", 
      color: "bg-green-100",
      url: "https://robotizia.ai"
    },
    { 
      name: "sasgpt.com", 
      description: "AI SaaS GPT solutions", 
      color: "bg-yellow-100",
      url: "https://sasgpt.com"
    },
    { 
      name: "bevinzey.com", 
      description: "AI education assistant", 
      color: "bg-orange-100",
      url: "https://bevinzey.com"
    },
    { 
      name: "sedihisham.com", 
      description: "Ecom platform", 
      color: "bg-red-100",
      url: "https://sedihisham.com"
    },
    { 
      name: "cookeai.com", 
      description: "AI-powered recipe generator", 
      color: "bg-teal-100",
      url: "https://cookeai.com"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-24">
        
        {/* Hero Section */}
        <div className="mb-20 md:mb-32">
          {/* Logo */}
          <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 bg-black text-white rounded-full font-medium text-sm hover:scale-105 transition-transform cursor-pointer">
            <Rocket className="w-4 h-4" />
            <span>Ship AI Lab</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-7 tracking-tight text-gray-900">
            Launch Your Product<br />
            in Just{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-gray-900">15 Days</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-yellow-300 -rotate-1"></span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-10 leading-relaxed">
            With budget-friendly fixed pricing, we'll craft, build, and bring your idea to life within 15 days.
          </p>

          <a
            href="https://calendly.com/hzaydi24/codeblend"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all inline-flex items-center gap-2"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Services Section */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-14 tracking-tight">
            What We Build
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group border-2 border-black p-7 bg-white rounded-3xl hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
              >
                <div className={`${service.color} border-2 border-black w-14 h-14 flex items-center justify-center mb-5 rounded-2xl group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects Section - Using ProjectCard Component */}
        <div className="mb-20 md:mb-32">
          <div className="flex items-center gap-3 mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Featured Projects
            </h2>
            <Star className="w-8 h-8 fill-yellow-400 text-yellow-400 shrink-0" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                description={project.description}
                color={project.color}
                url={project.url}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20 md:mb-32">
          <div className="border-2 border-black rounded-3xl p-10 bg-linear-to-br from-pink-100 via-yellow-100 to-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2 text-gray-900">15</div>
                <div className="text-gray-800 font-medium">Days Delivery</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2 text-gray-900">100+</div>
                <div className="text-gray-800 font-medium">Projects Shipped</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2 text-gray-900">50+</div>
                <div className="text-gray-800 font-medium">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-2 border-black bg-black text-white p-12 md:p-16 rounded-3xl text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
          <div className="absolute bottom-4 left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight text-white tracking-tight">
              Ready to Ship Your<br />Next AI Product?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s turn your idea into reality with our proven 15-day delivery process.
            </p>
            
            <a
              href="https://calendly.com/hzaydi24/codeblend"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="border-t-2 border-gray-200 py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Rocket className="w-5 h-5 text-gray-900" />
            <span className="font-bold text-gray-900">Ship AI Lab</span>
          </div>
          <p className="text-sm text-gray-600">
            © 2024 Ship AI Lab. A brand of Ship AI Solutions, LLC.
          </p>
        </div>
      </footer>
    </div>
  );
}