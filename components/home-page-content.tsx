"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";
import { 
  BookOpen, 
  Users, 
  Award, 
  Globe, 
  Brain, 
  Zap,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Languages,
  Calculator,
  FileText,
  Star,
  Sparkles
} from "lucide-react";

export default function HomePageContent() {
  const { t } = useLanguage();

  const courses = [
    {
      title: t("courses.basic.title"),
      description: t("courses.basic.description"),
      subjects: [
        t("courses.basic.subjects.english"), 
        t("courses.basic.subjects.chinese"), 
        t("courses.basic.subjects.math")
      ],
      icon: BookOpen,
      color: "bg-gradient-to-br from-emerald-100 to-green-200 text-emerald-700",
      level: t("courses.basic.level"),
      gradient: "from-emerald-500 to-green-600"
    },
    {
      title: t("courses.intermediate.title"), 
      description: t("courses.intermediate.description"),
      subjects: [
        t("courses.intermediate.subjects.english"), 
        t("courses.intermediate.subjects.chinese"), 
        t("courses.intermediate.subjects.math")
      ],
      icon: Users,
      color: "bg-gradient-to-br from-blue-100 to-indigo-200 text-blue-700",
      level: t("courses.intermediate.level"),
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: t("courses.advanced.title"),
      description: t("courses.advanced.description"),
      subjects: [
        t("courses.advanced.subjects.oLevel"), 
        t("courses.advanced.subjects.aLevel"), 
        t("courses.advanced.subjects.lcci")
      ],
      icon: Award,
      color: "bg-gradient-to-br from-purple-100 to-violet-200 text-purple-700", 
      level: t("courses.advanced.level"),
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  const subjects = [
    { 
      name: t("subjects.english.name"), 
      icon: Languages, 
      description: t("subjects.english.description"), 
      color: "from-rose-500 to-pink-600" 
    },
    { 
      name: t("subjects.chinese.name"), 
      icon: Languages, 
      description: t("subjects.chinese.description"), 
      color: "from-red-500 to-orange-600" 
    },
    { 
      name: t("subjects.mathematics.name"), 
      icon: Calculator, 
      description: t("subjects.mathematics.description"), 
      color: "from-blue-500 to-cyan-600" 
    },
    { 
      name: t("subjects.lcci.name"), 
      icon: FileText, 
      description: t("subjects.lcci.description"), 
      color: "from-indigo-500 to-purple-600" 
    }
  ];

  const features = [
    {
      icon: Globe,
      title: t("features.international.title"),
      description: t("features.international.description"),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: t("features.futureReady.title"),
      description: t("features.futureReady.description"),
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: t("features.flexible.title"),
      description: t("features.flexible.description"),
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border-white/20">
              <Sparkles className="w-4 h-4 mr-2" />
              {t("hero.badge")}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight" data-macaly="hero-title">
              {t("hero.title")}
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t("hero.brandName")}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed" data-macaly="hero-description">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-2xl transform hover:scale-105 transition-all duration-200">
                <Link href="/classes">
                  {t("hero.exploreClasses")} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                <Link href="/about">{t("hero.learnMore")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Levels */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800">
              <Star className="w-4 h-4 mr-2" />
              {t("courses.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6" data-macaly="courses-title">
              {t("courses.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("courses.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const IconComponent = course.icon;
              return (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-2xl ${course.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl font-bold">{course.title}</CardTitle>
                      <Badge className={`bg-gradient-to-r ${course.gradient} text-white`}>{course.level}</Badge>
                    </div>
                    <CardDescription className="text-base">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {course.subjects.map((subject, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="font-medium">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-purple-100 text-purple-800">
              <BookOpen className="w-4 h-4 mr-2" />
              {t("subjects.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6" data-macaly="subjects-title">
              {t("subjects.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("subjects.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subjects.map((subject, index) => {
              const IconComponent = subject.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white/90 backdrop-blur-sm">
                  <CardHeader className="pb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${subject.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold mb-2">{subject.name}</CardTitle>
                    <CardDescription className="text-base">{subject.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              <Zap className="w-4 h-4 mr-2" />
              {t("features.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6" data-macaly="features-title">
              {t("features.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("features.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`w-24 h-24 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <GraduationCap className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" data-macaly="cta-title">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 font-bold shadow-2xl transform hover:scale-105 transition-all duration-200">
              <Link href="/contact">
                {t("cta.enrollNow")} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold">
              <Link href="/classes">{t("cta.viewClasses")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}