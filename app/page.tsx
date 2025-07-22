'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award, 
  TrendingUp, 
  Star,
  ChevronDown,
  DollarSign,
  GraduationCap,
  Settings,
  User,
  Building2,
  PieChart,
  Shield,
  Target,
  Lightbulb,
  BarChart3,
  Briefcase,
  Sparkles,
  Zap,
  Globe,
  Rocket
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import { translations } from '@/lib/translations';

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState('ua');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const t = translations[currentLanguage];

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
  };

  const stats = [
    { number: '500+', label: t.stats.clients, icon: <Users className="h-8 w-8" />, color: 'from-blue-500 to-cyan-500' },
    { number: '1000+', label: t.stats.projects, icon: <Award className="h-8 w-8" />, color: 'from-purple-500 to-pink-500' },
    { number: '10+', label: t.stats.experience, icon: <TrendingUp className="h-8 w-8" />, color: 'from-green-500 to-emerald-500' },
    { number: '98%', label: t.stats.satisfaction, icon: <Star className="h-8 w-8" />, color: 'from-yellow-500 to-orange-500' },
  ];

  const directions = [
    {
      id: 'finance',
      icon: <DollarSign className="h-12 w-12 text-white" />,
      title: t.directions.finance.title,
      subtitle: t.directions.finance.subtitle,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      description: t.directions.finance.description,
      details: t.directions.finance.details,
      gradient: 'from-blue-600 via-purple-600 to-blue-800',
      accent: 'text-blue-400'
    },
    {
      id: 'education',
      icon: <GraduationCap className="h-12 w-12 text-white" />,
      title: t.directions.education.title,
      subtitle: t.directions.education.subtitle,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      description: t.directions.education.description,
      details: t.directions.education.details,
      gradient: 'from-emerald-600 via-teal-600 to-cyan-800',
      accent: 'text-emerald-400'
    },
    {
      id: 'management',
      icon: <Settings className="h-12 w-12 text-white" />,
      title: t.directions.management.title,
      subtitle: t.directions.management.subtitle,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      description: t.directions.management.description,
      details: t.directions.management.details,
      gradient: 'from-purple-600 via-pink-600 to-rose-800',
      accent: 'text-purple-400'
    }
  ];

  const services = {
    individual: {
      title: t.services.individual.title,
      icon: <User className="h-8 w-8" />,
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
      gradient: 'from-indigo-500 to-purple-600',
      items: [
        {
          id: 'personal-planning',
          title: t.services.individual.personalPlanning.title,
          icon: <PieChart className="h-6 w-6 text-indigo-600" />,
          description: t.services.individual.personalPlanning.description,
          details: t.services.individual.personalPlanning.details
        },
        {
          id: 'investing',
          title: t.services.individual.investing.title,
          icon: <TrendingUp className="h-6 w-6 text-green-600" />,
          description: t.services.individual.investing.description,
          details: t.services.individual.investing.details
        },
        {
          id: 'tax-optimization',
          title: t.services.individual.taxOptimization.title,
          icon: <Shield className="h-6 w-6 text-purple-600" />,
          description: t.services.individual.taxOptimization.description,
          details: t.services.individual.taxOptimization.details
        },
        {
          id: 'asset-protection',
          title: t.services.individual.assetProtection.title,
          icon: <Shield className="h-6 w-6 text-orange-600" />,
          description: t.services.individual.assetProtection.description,
          details: t.services.individual.assetProtection.details
        }
      ]
    },
    business: {
      title: t.services.business.title,
      icon: <Building2 className="h-8 w-8" />,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      gradient: 'from-cyan-500 to-blue-600',
      items: [
        {
          id: 'financial-planning',
          title: t.services.business.financialPlanning.title,
          icon: <Target className="h-6 w-6 text-blue-600" />,
          description: t.services.business.financialPlanning.description,
          details: t.services.business.financialPlanning.details
        },
        {
          id: 'profitability',
          title: t.services.business.profitability.title,
          icon: <BarChart3 className="h-6 w-6 text-green-600" />,
          description: t.services.business.profitability.description,
          details: t.services.business.profitability.details
        },
        {
          id: 'investment-attraction',
          title: t.services.business.investmentAttraction.title,
          icon: <Lightbulb className="h-6 w-6 text-yellow-600" />,
          description: t.services.business.investmentAttraction.description,
          details: t.services.business.investmentAttraction.details
        },
        {
          id: 'automation',
          title: t.services.business.automation.title,
          icon: <Settings className="h-6 w-6 text-purple-600" />,
          description: t.services.business.automation.description,
          details: t.services.business.automation.details
        },
        {
          id: 'cashflow',
          title: t.services.business.cashflow.title,
          icon: <DollarSign className="h-6 w-6 text-orange-600" />,
          description: t.services.business.cashflow.description,
          details: t.services.business.cashflow.details
        }
      ]
    }
  };

  const advantages = [
    {
      icon: <Award className="h-10 w-10 text-white" />,
      title: t.advantages.experience.title,
      description: t.advantages.experience.description,
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: t.advantages.expertise.title,
      description: t.advantages.expertise.description,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-white" />,
      title: t.advantages.approach.title,
      description: t.advantages.approach.description,
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Star className="h-10 w-10 text-white" />,
      title: t.advantages.results.title,
      description: t.advantages.results.description,
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg',
      gradient: 'from-yellow-500 to-orange-600'
    },
  ];

  const testimonials = t.testimonials.items.map((item, index) => ({
    ...item,
    avatar: [
      'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
      'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg',
      'https://images.pexels.com/photos/3760265/pexels-photo-3760265.jpeg'
    ][index],
    gradient: [
      'from-blue-500 to-purple-600',
      'from-green-500 to-teal-600',
      'from-pink-500 to-rose-600'
    ][index]
  }));

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <Layout currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg')] bg-cover bg-center opacity-10"></div>
          
          {/* Floating Orbs */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-72 h-72 rounded-full opacity-20 blur-3xl bg-gradient-to-r ${
                ['from-blue-400 to-purple-600', 'from-purple-400 to-pink-600', 'from-cyan-400 to-blue-600'][i % 3]
              }`}
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}

          {/* Particle System */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              animate={{
                y: [-20, -100],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: '100%',
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Global Support</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="text-white">{t.hero.title.split(' ')[0]}</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t.hero.title.split(' ')[1]}
              </span>
              <br />
              <span className="text-white">{t.hero.title.split(' ')[2]}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="/application">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl border-0 group-hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <Rocket className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    {t.hero.ctaConsultation}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
                  onClick={() => {
                    const element = document.querySelector('#about');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Globe className="mr-2 h-5 w-5" />
                  {t.hero.ctaLearnMore}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6"
              >
                <Zap className="h-4 w-4 mr-2" />
                <span className="text-sm font-semibold">{t.stats.title}</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              >
                {t.stats.title.split(' ')[0]} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t.stats.title.split(' ').slice(1).join(' ')}</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group"
                >
                  <Card className="text-center border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <CardContent className="p-8">
                      <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        <div className="text-white">
                          {stat.icon}
                        </div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                        className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2"
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-gray-600 font-medium text-sm lg:text-base">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Directions Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-600 mb-6"
              >
                <Target className="h-4 w-4 mr-2" />
                <span className="text-sm font-semibold">{t.directions.title}</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                {t.directions.title} <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{t.directions.subtitle.split(' ').slice(-2).join(' ')}</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                {t.directions.subtitle}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {directions.map((direction, index) => (
                <motion.div
                  key={direction.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={direction.image}
                        alt={direction.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${direction.gradient} opacity-80`}></div>
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30"
                        >
                          {direction.icon}
                        </motion.div>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-1">{direction.title}</h3>
                        <p className={`text-sm ${direction.accent} font-medium`}>{direction.subtitle}</p>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {direction.description}
                      </p>

                      <motion.button
                        onClick={() => toggleCard(direction.id)}
                        className={`flex items-center justify-between w-full ${direction.accent} hover:opacity-80 font-semibold transition-all duration-300 group-hover:translate-x-2`}
                        whileHover={{ x: 5 }}
                      >
                        <span>{t.directions.learnMore}</span>
                        <motion.div
                          animate={{ rotate: expandedCard === direction.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-5 w-5" />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {expandedCard === direction.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="mt-6 pt-6 border-t border-gray-100"
                          >
                            <ul className="space-y-4">
                              {direction.details.map((detail, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                  className="flex items-start group/item"
                                >
                                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                    <CheckCircle className="h-3 w-3 text-white" />
                                  </div>
                                  <span className="text-gray-700 leading-relaxed">{detail}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 mb-6"
              >
                <Briefcase className="h-4 w-4 mr-2" />
                <span className="text-sm font-semibold">{t.services.title}</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                {t.services.subtitle.split(' ')[0]} <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{t.services.subtitle.split(' ').slice(1).join(' ')}</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                {t.services.subtitle}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {Object.entries(services).map(([key, service], serviceIndex) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: serviceIndex === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full border-0 shadow-2xl overflow-hidden bg-white">
                    <div className="relative h-64">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-90`}></div>
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30"
                        >
                          <div className="text-white">
                            {service.icon}
                          </div>
                        </motion.div>
                      </div>

                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <div className="space-y-4">
                        {service.items.map((item, i) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 bg-gradient-to-r from-white to-gray-50">
                              <motion.button
                                onClick={() => toggleService(item.id)}
                                className="flex items-center justify-between w-full text-left"
                                whileHover={{ x: 5 }}
                              >
                                <div className="flex items-center flex-1">
                                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                  </div>
                                </div>
                                <motion.div
                                  animate={{ rotate: expandedService === item.id ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="ml-4"
                                >
                                  <ChevronDown className="h-5 w-5 text-gray-400" />
                                </motion.div>
                              </motion.button>

                              <AnimatePresence>
                                {expandedService === item.id && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-4 pt-4 border-t border-gray-100"
                                  >
                                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4">
                                      <p className="text-gray-700 leading-relaxed font-medium">
                                        {item.details}
                                      </p>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-600 mb-6"
              >
                <Award className="h-4 w-4 mr-2" />
                <span className="text-sm font-semibold">{t.advantages.title}</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                {t.advantages.title} <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{t.advantages.subtitle.split(' ').slice(-2).join(' ')}</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                {t.advantages.subtitle}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={advantage.image}
                        alt={advantage.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${advantage.gradient} opacity-80`}></div>
                    </div>
                    
                    <CardContent className="p-8 relative">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-20 h-20 bg-gradient-to-br ${advantage.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl -mt-16 relative z-10 border-4 border-white`}
                      >
                        {advantage.icon}
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {advantage.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {advantage.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-600 mb-6"
              >
                <Star className="h-4 w-4 mr-2" />
                <span className="text-sm font-semibold">{t.testimonials.title}</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              >
                {t.testimonials.subtitle.split(' ').slice(0, 2).join(' ')} <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">{t.testimonials.subtitle.split(' ').slice(-2).join(' ')}</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                {t.testimonials.subtitle}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
                    <CardContent className="p-8">
                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            whileHover={{ scale: 1.2 }}
                          >
                            <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                          </motion.div>
                        ))}
                      </div>
                      
                      <blockquote className="text-gray-700 mb-8 leading-relaxed italic text-lg">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div className="flex items-center pt-6 border-t border-gray-100">
                        <div className="relative">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-white shadow-lg"
                          />
                          <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center`}>
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-lg">
                            {testimonial.author}
                          </p>
                          <p className="text-gray-600 font-medium">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg')] bg-cover bg-center opacity-10"></div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 12 + i * 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection>
            <div className="text-center text-white max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8"
              >
                <Rocket className="h-5 w-5 mr-2" />
                <span className="font-semibold">{t.cta.title}</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold mb-8"
              >
                {t.cta.title}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl mb-6 text-white/90"
              >
                {t.cta.subtitle}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg mb-12 text-white/80 leading-relaxed"
              >
                {t.cta.description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Link href="/application">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-block"
                  >
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl border-0 group-hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      <Sparkles className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                      {t.cta.button}
                      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}