"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { 
  Globe, 
  Cpu, 
  Factory, 
  Zap, 
  TrendingUp, 
  Bot, 
  Blocks, 
  Car,
  Smartphone,
  Clock,
  ArrowRight,
  Brain,
  Network,
  Shield,
  Sparkles,
  Star
} from "lucide-react";

export default function AboutPageContent() {
  const { t } = useLanguage();

  const techTrends = [
    {
      icon: Network,
      title: t("about.techTrends.items.web3.title"),
      description: t("about.techTrends.items.web3.description"),
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Blocks,
      title: t("about.techTrends.items.blockchain.title"),
      description: t("about.techTrends.items.blockchain.description"),
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Bot,
      title: t("about.techTrends.items.ai.title"),
      description: t("about.techTrends.items.ai.description"),
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Factory,
      title: t("about.techTrends.items.darkFactory.title"),
      description: t("about.techTrends.items.darkFactory.description"),
      color: "from-orange-500 to-red-600"
    }
  ];

  const aiImpacts = [
    {
      title: t("about.aiImpact.items.jobEvolution.title"),
      description: t("about.aiImpact.items.jobEvolution.description"),
      stat: t("about.aiImpact.items.jobEvolution.stat"),
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: t("about.aiImpact.items.manufacturing.title"), 
      description: t("about.aiImpact.items.manufacturing.description"),
      stat: t("about.aiImpact.items.manufacturing.stat"),
      color: "from-purple-500 to-pink-600"
    },
    {
      title: t("about.aiImpact.items.education.title"),
      description: t("about.aiImpact.items.education.description"),
      stat: t("about.aiImpact.items.education.stat"),
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border-white/20">
              <Sparkles className="w-4 h-4 mr-2" />
              {t("about.hero.badge")}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight" data-macaly="about-hero-title">
              {t("about.hero.title")}<span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">{t("about.hero.titleHighlight")}</span></h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed" data-macaly="about-hero-description">
              {t("about.hero.description")}</p>
          </div>
        </div>
      </section>

      {/* Technology Trends */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-purple-100 text-purple-800">
              <Star className="w-4 h-4 mr-2" />
              {t("about.techTrends.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6" data-macaly="tech-trends-title">
              {t("about.techTrends.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("about.techTrends.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techTrends.map((trend, index) => {
              const IconComponent = trend.icon;
              return (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${trend.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{trend.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {trend.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Impact Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800">
              <Brain className="w-4 h-4 mr-2" />
              {t("about.aiImpact.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6" data-macaly="ai-impact-title">
              {t("about.aiImpact.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("about.aiImpact.subtitle")}
            </p>
          </div>
          
          <div className="space-y-8">
            {aiImpacts.map((impact, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white/95 backdrop-blur-sm">
                <div className="md:flex">
                  <div className="md:flex-1 p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${impact.color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                        <Brain className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{impact.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {impact.description}
                    </p>
                    <Badge className={`bg-gradient-to-r ${impact.color} text-white font-semibold px-4 py-2`}>
                      📊 {impact.stat}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Factory Spotlight */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-slate-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border-white/20">
                {t("about.darkFactory.badge")}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight" data-macaly="dark-factory-title">
                {t("about.darkFactory.title")}
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {t("about.darkFactory.description")}
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                    <Car className="h-6 w-6 text-blue-400" />
                  </div>
                  <span className="text-lg text-white">{t("about.darkFactory.features.0")}</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-500/20 p-3 rounded-lg mr-4">
                    <Smartphone className="h-6 w-6 text-green-400" />
                  </div>
                  <span className="text-lg text-white">{t("about.darkFactory.features.1")}</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-purple-400" />
                  </div>
                  <span className="text-lg text-white">{t("about.darkFactory.features.2")}</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Factory className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-8 text-white">{t("about.darkFactory.stats.title")}</h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white/5 p-4 rounded-xl">
                  <div className="text-4xl font-bold text-blue-400 mb-2">76s</div>
                  <div className="text-sm text-gray-300">{t("about.darkFactory.stats.perCar")}</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl">
                  <div className="text-4xl font-bold text-green-400 mb-2">0</div>
                  <div className="text-sm text-gray-300">{t("about.darkFactory.stats.humanWorkers")}</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl">
                  <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-300">{t("about.darkFactory.stats.operation")}</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl">
                  <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
                  <div className="text-sm text-gray-300">{t("about.darkFactory.stats.automated")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-green-100 text-green-800">
              <Shield className="w-4 h-4 mr-2" />
              {t("about.mission.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6" data-macaly="mission-title">
              {t("about.mission.title")}: {t("about.mission.subtitle")}
            </h2>
            <div 
              className="text-gray-600 max-w-4xl mx-auto text-xl text-left"
              dangerouslySetInnerHTML={{ __html: t("about.mission.description") }}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{t("about.values.futureProof.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t("about.values.futureProof.description")}
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{t("about.values.globalStandards.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t("about.values.globalStandards.description")}
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-violet-50">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{t("about.values.continuousEvolution.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t("about.values.continuousEvolution.description")}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <Zap className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" data-macaly="about-cta-title">
            {t("about.cta.title")}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t("about.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold shadow-2xl transform hover:scale-105 transition-all duration-200">
              <Link href="/classes">
                {t("about.cta.exploreClasses")} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold">
              <Link href="/contact">{t("about.cta.startJourney")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}