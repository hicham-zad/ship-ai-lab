"use client";
import { Code, Smartphone, Brain, ArrowRight, Star } from 'lucide-react';
import ProjectCard from './ProjectCard';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function GumroadLandingWithProjects() {
  const t = useTranslations('HomePage');
  const services = [
    {
      icon: <Code className="w-7 h-7 text-gray-900" />,
      title: t('services.saas.title'),
      description: t('services.saas.description'),
      color: "bg-pink-100",
      accentColor: "bg-pink-500"
    },
    {
      icon: <Smartphone className="w-7 h-7 text-gray-900" />,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      color: "bg-blue-100",
      accentColor: "bg-blue-500"
    },
    {
      icon: <Brain className="w-7 h-7 text-gray-900" />,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
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
      <LanguageSwitcher />
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f5c4c4,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 
      
      bg-[radial-gradient(circle_500px_at_50%_200px,#fcaeae,transparent)]"></div></div>
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-24">

        {/* Hero Section */}
        <div className="mb-20 md:mb-32 flex flex-col items-center text-center">
          <div className="max-w-4xl flex flex-col items-center">
            {/* Logo */}
            <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 bg-black text-white rounded-full font-medium text-sm hover:scale-105 transition-transform cursor-pointer">
              <Image src="/logo-home.png" alt="Ship AI Lab Logo" width={24} height={24} className="w-6 h-6" />
              <span className='-ml-[13px] pt-[1px] font-bold text-lg'>hip AI Lab</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-7 tracking-tight text-gray-900">
              {t('hero.title')}
              {' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-gray-900">{t('hero.titleHighlight')}</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-[#ff5859] -rotate-1"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-10 leading-relaxed mx-auto">
              {t('hero.subtitle')}
            </p>
            <a
              href="https://calendly.com/hzaydi24/codeblend"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* Services Section */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-14 tracking-tight">
            {t('services.title')}
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
              {t('work.title')}
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

        {/* Mobile Apps We Build Section */}
        <div className="mb-20 md:mb-32">
          <div className="flex items-center gap-3 mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              {t('mobileApps.title')}
            </h2>
            <Smartphone className="w-8 h-8 text-gray-900 shrink-0" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* TikoNote App */}
            <a
              href="https://tikonote.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-black p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-purple-100 border-2 border-black w-14 h-14 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                  <Brain className="w-7 h-7 text-purple-600" />
                </div>
                <ArrowRight className="w-6 h-6 text-gray-600 group-hover:translate-x-1 transition-transform" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {t('mobileApps.tikonote.name')}
              </h3>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                {t('mobileApps.tikonote.description')}
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white border border-black rounded-full text-xs font-medium text-gray-900">
                  {t('mobileApps.tikonote.tags.aiPowered')}
                </span>
                <span className="px-3 py-1 bg-white border border-black rounded-full text-xs font-medium text-gray-900">
                  {t('mobileApps.tikonote.tags.mobileApp')}
                </span>
                <span className="px-3 py-1 bg-white border border-black rounded-full text-xs font-medium text-gray-900">
                  {t('mobileApps.tikonote.tags.education')}
                </span>
              </div>
            </a>

            {/* SeenAndFeel App */}
            <a
              href="https://seenandfeel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-black p-8 bg-gradient-to-br from-pink-50 to-red-50 rounded-3xl hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-pink-100 border-2 border-black w-14 h-14 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                  <Star className="w-7 h-7 text-pink-600 fill-pink-600" />
                </div>
                <ArrowRight className="w-6 h-6 text-gray-600 group-hover:translate-x-1 transition-transform" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {t('mobileApps.seenandfeel.name')}
              </h3>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                {t('mobileApps.seenandfeel.description')}
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white border border-black rounded-full text-xs font-medium text-gray-900">
                  {t('mobileApps.seenandfeel.tags.aiRecommendations')}
                </span>
                <span className="px-3 py-1 bg-white border border-black rounded-full text-xs font-medium text-gray-900">
                  {t('mobileApps.seenandfeel.tags.mobileApp')}
                </span>
                <span className="px-3 py-1 bg-white border border-black rounded-full text-xs font-medium text-gray-900">
                  {t('mobileApps.seenandfeel.tags.entertainment')}
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20 md:mb-32">
          <div className="border-2 border-black rounded-3xl p-10 bg-linear-to-br from-pink-100 via-yellow-100 to-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2 text-gray-900">15</div>
                <div className="text-gray-800 font-medium">{t('stats.delivery')}</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2 text-gray-900">11+</div>
                <div className="text-gray-800 font-medium">{t('stats.projects')}</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2 text-gray-900">10+</div>
                <div className="text-gray-800 font-medium">{t('stats.clients')}</div>
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
              {t('cta.title')}
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>

            <a
              href="https://calendly.com/hzaydi24/codeblend"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              {t('cta.button')}
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
              <span className="font-bold text-gray-900">{t('footer.brand')}</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{t('footer.copyright')}</p>
            <p className="text-xs text-gray-400">{t('footer.address')}</p>
            <p className="text-xs text-gray-400">{t('footer.contact')}</p>
          </div>
          <div className="flex text-sm flex-col gap-2 md:items-end items-center">
            <a href="/privacy-policy" className="text-gray-700 hover:text-primary transition">{t('footer.privacyPolicy')}</a>
            <a href="/terms-of-service" className="text-gray-700 hover:text-primary transition">{t('footer.termsOfService')}</a>
            {/* <a href="/cookie-policy" className="text-gray-700 hover:text-primary transition">Cookie Policy</a>
            <a href="/contact" className="text-gray-700 hover:text-primary transition">Contact</a> */}
          </div>
        </div>
      </footer>
    </div>
  );
}