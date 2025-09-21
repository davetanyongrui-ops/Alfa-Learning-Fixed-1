"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { 
  Users, 
  Award, 
  Globe, 
  BookOpen,
  CheckCircle,
  Star,
  GraduationCap,
  MapPin,
  Clock,
  DollarSign,
  Send,
  UserPlus,
  Target,
  Briefcase,
  Heart,
  TrendingUp,
  Sparkles
} from "lucide-react";

export default function TeachersPageContent() {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    experience: '',
    qualifications: '',
    location: '',
    availability: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Teacher application submitted:', formData);
    // Create mailto link with form data
    const subject = encodeURIComponent('Teacher Application - ALFA LEARNING');
    const body = encodeURIComponent(`
Teacher Application

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.location}
Primary Subject: ${formData.subject}
Years of Experience: ${formData.experience}

Qualifications & Certifications:
${formData.qualifications}

Availability:
${formData.availability}

Why I want to join ALFA LEARNING:
${formData.message}

Best regards,
${formData.name}
    `);
    window.location.href = `mailto:Alfanugerah.yongrui@gmail.com?subject=${subject}&body=${body}`;
  };

  const requirements = [
    {
      icon: Award,
      title: t("teachers.requirements.items.qualifications.title"),
      description: t("teachers.requirements.items.qualifications.description"),
      details: [
        "Singapore university graduates preferred",
        "International teaching certifications",
        "Subject-specific qualifications"
      ],
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Globe,
      title: t("teachers.requirements.items.experience.title"),
      description: t("teachers.requirements.items.experience.description"),
      details: [
        "Online teaching experience preferred",
        "Experience with international curricula",
        "GCSE/A-Level teaching background"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: BookOpen,
      title: t("teachers.requirements.items.expertise.title"),
      description: t("teachers.requirements.items.expertise.description"),
      details: [
        "English Language & Literature",
        "Chinese Language & Literature",
        "Mathematics",
        "LCCI Business Studies"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: t("teachers.requirements.items.communication.title"),
      description: t("teachers.requirements.items.communication.description"),
      details: [
        "Fluent in English",
        "Comfortable with online platforms",
        "Student-centered teaching approach"
      ],
      color: "from-purple-500 to-violet-600"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: t("teachers.benefits.items.compensation.title"),
      description: t("teachers.benefits.items.compensation.description"),
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: t("teachers.benefits.items.schedule.title"),
      description: t("teachers.benefits.items.schedule.description"),
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Globe,
      title: t("teachers.benefits.items.impact.title"),
      description: t("teachers.benefits.items.impact.description"),
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: TrendingUp,
      title: t("teachers.benefits.items.growth.title"),
      description: t("teachers.benefits.items.growth.description"),
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Heart,
      title: t("teachers.benefits.items.meaningful.title"),
      description: t("teachers.benefits.items.meaningful.description"),
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: Target,
      title: t("teachers.benefits.items.curriculum.title"),
      description: t("teachers.benefits.items.curriculum.description"),
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const subjects = [
    "English Language",
    "English Literature", 
    "Chinese Language",
    "Chinese Literature",
    "Mathematics",
    "LCCI Business Studies",
    "Science (General)",
    "Other"
  ];

  const experienceOptions = [
    "1-2 years",
    "3-5 years",
    "6-10 years",
    "10+ years"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border-white/20">
              <Sparkles className="w-4 h-4 mr-2" />
              {t("teachers.hero.badge")}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight" data-macaly="teachers-hero-title">
              {t("teachers.hero.title")}
              <span className="block bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">{t("teachers.hero.titleHighlight")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed" data-macaly="teachers-hero-description">
              {t("teachers.hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-2xl transform hover:scale-105 transition-all duration-200">
                <Link href="#application">
                  {t("teachers.hero.applyNow")} <UserPlus className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                <Link href="#requirements">{t("teachers.hero.learnMore")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">
              <Star className="w-4 h-4 mr-2" />
              {t("teachers.benefits.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6" data-macaly="why-join-title">
              {t("teachers.benefits.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("teachers.benefits.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800">
              <CheckCircle className="w-4 h-4 mr-2" />
              {t("teachers.requirements.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6" data-macaly="requirements-title">
              {t("teachers.requirements.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("teachers.requirements.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((requirement, index) => {
              const IconComponent = requirement.icon;
              return (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white/95 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${requirement.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold">{requirement.title}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          {requirement.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {requirement.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="font-medium">{detail}</span>
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

      {/* Singapore Standards Highlight */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border-white/20">
                {t("teachers.singaporeStandards.badge")}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight" data-macaly="singapore-standards-title">
                {t("teachers.singaporeStandards.title")}
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {t("teachers.singaporeStandards.description")}
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-yellow-400/20 p-3 rounded-lg mr-4">
                    <Star className="h-6 w-6 text-yellow-400" />
                  </div>
                  <span className="text-lg text-white">{t("teachers.singaporeStandards.highlights.0")}</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-400/20 p-3 rounded-lg mr-4">
                    <Award className="h-6 w-6 text-yellow-400" />
                  </div>
                  <span className="text-lg text-white">{t("teachers.singaporeStandards.highlights.1")}</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-400/20 p-3 rounded-lg mr-4">
                    <Target className="h-6 w-6 text-yellow-400" />
                  </div>
                  <span className="text-lg text-white">{t("teachers.singaporeStandards.highlights.2")}</span>
                </div>
              </div>
            </div>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="text-center">
                <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-white font-bold">{t("teachers.singaporeStandards.preferredQualifications.title")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/90">
                <div className="flex items-center bg-white/5 p-3 rounded-lg">
                  <MapPin className="h-5 w-5 mr-3 text-blue-300" />
                  <span>{t("teachers.singaporeStandards.preferredQualifications.items.0")}</span>
                </div>
                <div className="flex items-center bg-white/5 p-3 rounded-lg">
                  <Briefcase className="h-5 w-5 mr-3 text-green-300" />
                  <span>{t("teachers.singaporeStandards.preferredQualifications.items.1")}</span>
                </div>
                <div className="flex items-center bg-white/5 p-3 rounded-lg">
                  <Globe className="h-5 w-5 mr-3 text-purple-300" />
                  <span>{t("teachers.singaporeStandards.preferredQualifications.items.2")}</span>
                </div>
                <div className="flex items-center bg-white/5 p-3 rounded-lg">
                  <BookOpen className="h-5 w-5 mr-3 text-yellow-300" />
                  <span>{t("teachers.singaporeStandards.preferredQualifications.items.3")}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">
              <Send className="w-4 h-4 mr-2" />
              {t("teachers.application.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6" data-macaly="application-title">
              {t("teachers.application.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("teachers.application.subtitle")}
            </p>
          </div>
          
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center font-bold">{t("teachers.application.form.title")}</CardTitle>
              <CardDescription className="text-center text-emerald-100">
                {t("teachers.application.form.subtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-semibold">{t("teachers.application.form.fields.name")} *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder={t("teachers.application.form.placeholders.name")}
                      className="h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-semibold">{t("teachers.application.form.fields.email")} *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder={t("teachers.application.form.placeholders.email")}
                      className="h-12"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-semibold">{t("teachers.application.form.fields.phone")}</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder={t("teachers.application.form.placeholders.phone")}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-base font-semibold">{t("teachers.application.form.fields.location")} *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder={t("teachers.application.form.placeholders.location")}
                      className="h-12"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-base font-semibold">{t("teachers.application.form.fields.subject")} *</Label>
                    <Select onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder={t("teachers.application.form.placeholders.subject")} />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject} value={subject}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-base font-semibold">{t("teachers.application.form.fields.experience")} *</Label>
                    <Select onValueChange={(value) => handleInputChange('experience', value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder={t("teachers.application.form.placeholders.experience")} />
                      </SelectTrigger>
                      <SelectContent>
                        {experienceOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="qualifications" className="text-base font-semibold">{t("teachers.application.form.fields.qualifications")} *</Label>
                  <Textarea
                    id="qualifications"
                    value={formData.qualifications}
                    onChange={(e) => handleInputChange('qualifications', e.target.value)}
                    placeholder={t("teachers.application.form.placeholders.qualifications")}
                    rows={4}
                    className="resize-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability" className="text-base font-semibold">{t("teachers.application.form.fields.availability")}</Label>
                  <Textarea
                    id="availability"
                    value={formData.availability}
                    onChange={(e) => handleInputChange('availability', e.target.value)}
                    placeholder={t("teachers.application.form.placeholders.availability")}
                    rows={3}
                    className="resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base font-semibold">{t("teachers.application.form.fields.message")}</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder={t("teachers.application.form.placeholders.message")}
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold h-14 text-lg shadow-xl transform hover:scale-105 transition-all duration-200">
                  {t("teachers.application.form.submit")} <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800">
            <Users className="w-4 h-4 mr-2" />
            {t("teachers.contactInfo.badge")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6" data-macaly="contact-info-title">
            {t("teachers.contactInfo.title")}
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            {t("teachers.contactInfo.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold shadow-xl">
              <Link href="/contact">
                {t("teachers.contactInfo.contactUs")}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-semibold">
              <Link href="/about">
                {t("teachers.contactInfo.learnMission")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}