"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { 
  BookOpen, 
  Users, 
  Award, 
  Clock, 
  CheckCircle, 
  Star,
  Globe,
  Languages,
  Calculator,
  FileText,
  GraduationCap,
  ArrowRight,
  Target,
  Trophy,
  Brain,
  Sparkles
} from "lucide-react";

export default function ClassesPageContent() {
  const { t } = useLanguage();

  const courseLevels = [
    {
      id: "basic",
      title: t("classes.levels.basic.title"),
      subtitle: t("classes.levels.basic.subtitle"),
      description: t("classes.levels.basic.description"),
      icon: BookOpen,
      color: "bg-gradient-to-br from-emerald-100 to-green-200 text-emerald-700 border-emerald-300",
      badgeColor: "bg-gradient-to-r from-emerald-500 to-green-600",
      cardGradient: "from-emerald-50 to-green-50",
      duration: t("classes.levels.basic.duration"),
      students: t("classes.levels.basic.students"),
      subjects: [
        {
          name: t("classes.levels.basic.subjects.english.name"),
          description: t("classes.levels.basic.subjects.english.description"),
          topics: ["Basic Grammar", "Vocabulary Building", "Simple Conversations", "Reading Comprehension"]
        },
        {
          name: t("classes.levels.basic.subjects.chinese.name"), 
          description: t("classes.levels.basic.subjects.chinese.description"),
          topics: ["Pinyin System", "Basic Characters", "Simple Phrases", "Cultural Context"]
        },
        {
          name: t("classes.levels.basic.subjects.math.name"),
          description: t("classes.levels.basic.subjects.math.description"),
          topics: ["Arithmetic Operations", "Basic Algebra", "Geometry Basics", "Word Problems"]
        }
      ],
      goals: [
        "Master fundamental concepts in all subjects",
        "Develop strong study habits and learning strategies", 
        "Build confidence for intermediate-level coursework",
        "Achieve readiness for Singapore-standard education"
      ]
    },
    {
      id: "intermediate",
      title: t("classes.levels.intermediate.title"),
      subtitle: t("classes.levels.intermediate.subtitle"),
      description: t("classes.levels.intermediate.description"),
      icon: Users,
      color: "bg-gradient-to-br from-blue-100 to-indigo-200 text-blue-700 border-blue-300",
      badgeColor: "bg-gradient-to-r from-blue-500 to-indigo-600",
      cardGradient: "from-blue-50 to-indigo-50",
      duration: t("classes.levels.intermediate.duration"),
      students: t("classes.levels.intermediate.students"),
      subjects: [
        {
          name: t("classes.levels.intermediate.subjects.english.name"),
          description: t("classes.levels.intermediate.subjects.english.description"),
          topics: ["Literary Analysis", "Essay Writing", "Advanced Grammar", "Public Speaking"]
        },
        {
          name: t("classes.levels.intermediate.subjects.chinese.name"),
          description: t("classes.levels.intermediate.subjects.chinese.description"),
          topics: ["Classical Poetry", "Modern Literature", "Cultural Studies", "Advanced Writing"]
        },
        {
          name: t("classes.levels.intermediate.subjects.math.name"),
          description: t("classes.levels.intermediate.subjects.math.description"),
          topics: ["Advanced Algebra", "Trigonometry", "Statistics", "Pre-Calculus"]
        }
      ],
      goals: [
        "Meet Singapore educational standards",
        "Develop critical thinking and analytical skills",
        "Prepare for GCE-level examinations",
        "Build academic research and presentation abilities"
      ]
    },
    {
      id: "advanced",
      title: t("classes.levels.advanced.title"), 
      subtitle: t("classes.levels.advanced.subtitle"),
      description: t("classes.levels.advanced.description"),
      icon: Award,
      color: "bg-gradient-to-br from-purple-100 to-violet-200 text-purple-700 border-purple-300",
      badgeColor: "bg-gradient-to-r from-purple-500 to-violet-600",
      cardGradient: "from-purple-50 to-violet-50",
      duration: t("classes.levels.advanced.duration"),
      students: t("classes.levels.advanced.students"),
      subjects: [
        {
          name: t("classes.levels.advanced.subjects.oLevel.name"),
          description: t("classes.levels.advanced.subjects.oLevel.description"),
          topics: ["Exam Techniques", "Subject Mastery", "Practice Tests", "Time Management"]
        },
        {
          name: t("classes.levels.advanced.subjects.aLevel.name"),
          description: t("classes.levels.advanced.subjects.aLevel.description"),
          topics: ["Advanced Topics", "University Prep", "Research Projects", "Critical Analysis"]
        },
        {
          name: t("classes.levels.advanced.subjects.lcci.name"),
          description: t("classes.levels.advanced.subjects.lcci.description"),
          topics: ["Business Studies", "Accounting", "Marketing", "International Trade"]
        },
        {
          name: t("classes.levels.advanced.subjects.specialized.name"),
          description: t("classes.levels.advanced.subjects.specialized.description"),
          topics: ["Sciences", "Humanities", "Languages", "Mathematics"]
        }
      ],
      goals: [
        "Achieve excellent GCE O-Level and A-Level results",
        "Gain internationally recognized qualifications",
        "Prepare for university admission worldwide",
        "Develop professional business skills through LCCI"
      ]
    }
  ];

  const subjects = [
    {
      name: t("classes.subjectsOverview.subjects.english.name"),
      icon: Languages,
      description: t("classes.subjectsOverview.subjects.english.description"),
      levels: ["Basic Grammar & Vocabulary", "Intermediate Literature", "Advanced Academic Writing"],
      color: "from-red-500 to-rose-600"
    },
    {
      name: t("classes.subjectsOverview.subjects.chinese.name"),
      icon: Languages, 
      description: t("classes.subjectsOverview.subjects.chinese.description"),
      levels: ["Pinyin & Basic Characters", "Intermediate Conversation", "Classical Literature"],
      color: "from-yellow-500 to-orange-600"
    },
    {
      name: t("classes.subjectsOverview.subjects.mathematics.name"),
      icon: Calculator,
      description: t("classes.subjectsOverview.subjects.mathematics.description"),
      levels: ["Basic Arithmetic", "Algebra & Geometry", "Calculus & Statistics"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: t("classes.subjectsOverview.subjects.lcci.name"),
      icon: FileText,
      description: t("classes.subjectsOverview.subjects.lcci.description"),
      levels: ["Business Fundamentals", "Accounting Principles", "International Trade"],
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border-white/20">
              <Sparkles className="w-4 h-4 mr-2" />
              {t("classes.hero.badge")}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight" data-macaly="classes-hero-title">
              {t("classes.hero.title")}
              <span className="block bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">{t("classes.hero.titleHighlight")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed" data-macaly="classes-hero-description">
              {t("classes.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Course Levels Tabs */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-16 bg-white/80 backdrop-blur-sm shadow-lg">
              {courseLevels.map((level) => (
                <TabsTrigger key={level.id} value={level.id} className="text-sm md:text-base font-semibold">
                  {level.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {courseLevels.map((level) => {
              const IconComponent = level.icon;
              return (
                <TabsContent key={level.id} value={level.id}>
                  <div className="space-y-12">
                    {/* Level Overview */}
                    <Card className={`border-2 ${level.color} shadow-2xl bg-gradient-to-br ${level.cardGradient}`}>
                      <CardHeader className="text-center pb-8">
                        <div className={`w-20 h-20 ${level.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                          <IconComponent className="h-10 w-10" />
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
                          <CardTitle className="text-4xl font-bold">{level.title}</CardTitle>
                          <Badge className={`${level.badgeColor} text-white px-4 py-2 text-base font-semibold`}>
                            {level.subtitle}
                          </Badge>
                        </div>
                        <CardDescription className="text-xl max-w-4xl mx-auto leading-relaxed">
                          {level.description}
                        </CardDescription>
                        <div className="flex justify-center gap-12 mt-8 text-base text-gray-600">
                          <div className="flex items-center bg-white/50 px-4 py-2 rounded-lg">
                            <Clock className="h-5 w-5 mr-2" />
                            {level.duration}
                          </div>
                          <div className="flex items-center bg-white/50 px-4 py-2 rounded-lg">
                            <Users className="h-5 w-5 mr-2" />
                            {level.students}
                          </div>
                        </div>
                      </CardHeader>
                    </Card>

                    {/* Subjects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {level.subjects.map((subject, index) => (
                        <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/95 backdrop-blur-sm">
                          <CardHeader>
                            <CardTitle className="flex items-center text-2xl font-bold">
                              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                <Target className="h-4 w-4 text-white" />
                              </div>
                              {subject.name}
                            </CardTitle>
                            <CardDescription className="text-base leading-relaxed">
                              {subject.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <h4 className="font-semibold text-base text-gray-700 mb-4">{t("classes.subjectsOverview.keyTopics")}</h4>
                              <div className="grid grid-cols-1 gap-3">
                                {subject.topics.map((topic, idx) => (
                                  <div key={idx} className="flex items-center text-gray-700 bg-gray-50 p-2 rounded-lg">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span className="font-medium">{topic}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* Learning Goals */}
                    <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                      <CardHeader>
                        <CardTitle className="flex items-center text-3xl font-bold">
                          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                            <Trophy className="h-6 w-6 text-white" />
                          </div>
                          {t("classes.learningGoals")}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {level.goals.map((goal, index) => (
                            <div key={index} className="flex items-start bg-white/60 p-4 rounded-lg">
                              <Star className="h-6 w-6 text-yellow-500 mr-4 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 font-medium text-lg">{goal}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Subjects Overview */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800">
              <BookOpen className="w-4 h-4 mr-2" />
              {t("classes.subjectsOverview.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6" data-macaly="subjects-overview-title">
              {t("classes.subjectsOverview.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("classes.subjectsOverview.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subjects.map((subject, index) => {
              const IconComponent = subject.icon;
              return (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/95 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${subject.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold">{subject.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {subject.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-base text-gray-700">{t("classes.subjectsOverview.progressionPath")}</h4>
                      {subject.levels.map((level, idx) => (
                        <div key={idx} className="flex items-center bg-gray-50 p-3 rounded-lg">
                          <div className={`w-8 h-8 bg-gradient-to-r ${subject.color} rounded-full flex items-center justify-center mr-4 shadow-sm`}>
                            <span className="text-sm font-bold text-white">{idx + 1}</span>
                          </div>
                          <span className="text-gray-700 font-medium">{level}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teacher Quality */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
                {t("classes.teacherQuality.badge")}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8 leading-tight" data-macaly="teacher-quality-title">
                {t("classes.teacherQuality.title")}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t("classes.teacherQuality.description")}
              </p>
              <div className="space-y-6">
                <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg font-medium text-gray-700">{t("classes.teacherQuality.qualifications.0")}</span>
                </div>
                <div className="flex items-center bg-purple-50 p-4 rounded-lg">
                  <div className="bg-gradient-to-r from-purple-500 to-violet-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg font-medium text-gray-700">{t("classes.teacherQuality.qualifications.1")}</span>
                </div>
                <div className="flex items-center bg-green-50 p-4 rounded-lg">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg font-medium text-gray-700">{t("classes.teacherQuality.qualifications.2")}</span>
                </div>
              </div>
            </div>
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200 shadow-2xl">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">{t("classes.teacherQuality.standards.title")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center bg-white/60 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-base text-gray-600 font-medium">{t("classes.teacherQuality.standards.singaporeTeachers")}</div>
                </div>
                <div className="text-center bg-white/60 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-base text-gray-600 font-medium">{t("classes.teacherQuality.standards.successRate")}</div>
                </div>
                <div className="text-center bg-white/60 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-base text-gray-600 font-medium">{t("classes.teacherQuality.standards.experience")}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <BookOpen className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" data-macaly="classes-cta-title">
            {t("classes.cta.title")}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t("classes.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 font-bold shadow-2xl transform hover:scale-105 transition-all duration-200">
              <Link href="/contact">
                {t("classes.cta.enrollNow")} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold">
              <Link href="/teachers">{t("classes.cta.meetTeachers")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}