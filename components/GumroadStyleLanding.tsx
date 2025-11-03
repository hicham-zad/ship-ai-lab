"use client";
import { Code, Smartphone, Brain, ArrowRight, Star } from 'lucide-react';
import ProjectCard from './ProjectCard';
import Image from 'next/image';

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
      color: "bg-cyan-100",
      url: "https://nomorecopyright.com"
    },
    {
      name: "Reisknaller",
      description: "A Dutch travel platform offering unbeatable travel deals and packages.",
      color: "bg-amber-100",
      url: "https://www.reisknaller.nl"

    },
    { 
      name: "StoryTyme", 
      description: "Create custom children's books in 5 simple steps", 
      color: "bg-purple-100",
      url: "https://storytyme.ai"
    },
    { 
      name: "GetsweetAI", 
      description: "AI platform for the social media automation", 
      color: "bg-pink-100",
      url: "https://getsweet.ai"
    },
    // { 
    //   name: "robotizia.ai", 
    //   description: "AI content & automation platform", 
    //   color: "bg-green-100",
    //   url: "https://robotizia.ai"
    // },
    { 
      name: "SASGPT", 
      description: "SASGPT is an AI-powered SAS code editor that lets you write, generate, and analyze SAS code instantly.", 
      color: "bg-blue-100",
      url: "https://sasgpt.com"
    },
    { 
      name: "Bevinzey", 
      description: "AI education assistant", 
      color: "bg-orange-100",
      url: "https://bevinzey.com"
    },
    // { 
    //   name: "sedihisham.com", 
    //   description: "Ecom platform", 
    //   color: "bg-red-100",
    //   url: "https://sedihisham.com"
    // },
    { 
      name: "cookeai.com", 
      description: "AI-powered recipe generator", 
      color: "bg-teal-100",
      url: "https://cookeai.com"
    }
  ];

  return (
    <div className="min-h-screen  relative">
      {/* Background Gradient */}
     <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f5c4c4,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 
      
      bg-[radial-gradient(circle_500px_at_50%_200px,#fcaeae,transparent)]"></div></div>
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-24">
        
        {/* Hero Section */}
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          {/* Left: Text Content */}
          <div className="flex-1">
            {/* Logo */}
            <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 bg-black text-white rounded-full font-medium text-sm hover:scale-105 transition-transform cursor-pointer">
              <Image src="/logo-home.png" alt="Ship AI Lab Logo" width={24} height={24} className="w-6 h-6" />
              <span className='-ml-[13px] pt-[1px] font-bold text-lg'>hip AI Lab</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-7 tracking-tight text-gray-900">
              Launch Your AI App
              in Just{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-gray-900">15 Days</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-[#ff5859] -rotate-1"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-10 leading-relaxed">
With our fixed, budget-friendly pricing, we design, build, and launch your idea — all in just 15 days.
            </p>
            <a
              href="https://calendly.com/hzaydi24/codeblend"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
            Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          {/* Right: GIF Image */}
          <div className="flex-1 flex justify-center  items-center md:w-1/2 w-full  h-full">
            <div className="w-full max-w-[450px] 
            aspect-square md:aspect-auto md:h-[500px]
             flex items-center justify-center">
              <Image
                src="/shipailab.gif"
                alt="Ship AI Lab Demo"
                width={420}
                height={420}
                className="w-full h-full object-contain rounded-2xl shadow-sm  bg-white"
                priority
              />
            </div>
          </div>
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
              Our Work
            </h2>
            {/* <Star className="w-8 h-8 fill-yellow-400 text-yellow-400 shrink-0" /> */}
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
                <div className="text-5xl font-bold mb-2 text-gray-900">11+</div>
                <div className="text-gray-800 font-medium">Projects Shipped</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2 text-gray-900">10+</div>
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
      <footer className="border-t-2 border-gray-200 py-10 bg-gray-50 mt-10">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="font-bold text-gray-900">Ship AI Lab</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">© 2024-2025 Ship AI Lab. A brand of Ship AI Solutions, LLC.</p>
            <p className="text-xs text-gray-400">Ship AI Solutions, LLC · 30 N Gould St Ste R, Sheridan, WY 82801, USA</p>
            <p className="text-xs text-gray-400">Email: contact@shipailab.com · Phone: 251-332-3311</p>
          </div>
          <div className="flex text-sm flex-col gap-2 md:items-end items-center">
            <a href="/privacy-policy" className="text-gray-700 hover:text-primary transition">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-700 hover:text-primary transition">Terms of Service</a>
            {/* <a href="/cookie-policy" className="text-gray-700 hover:text-primary transition">Cookie Policy</a>
            <a href="/contact" className="text-gray-700 hover:text-primary transition">Contact</a> */}
          </div>
        </div>
      </footer>
    </div>
  );
}