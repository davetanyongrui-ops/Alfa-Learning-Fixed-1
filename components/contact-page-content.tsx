"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useLanguage } from "@/contexts/language-context";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  UserPlus,
  BookOpen,
  Users,
  Award,
  Globe,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Star,
  Loader2
} from "lucide-react";

export default function ContactPageContent() {
  const { t } = useLanguage();
  const [enrollmentForm, setEnrollmentForm] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    age: '',
    currentLevel: '',
    interestedSubjects: '',
    preferredSchedule: '',
    goals: '',
    message: ''
  });

  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const [enrollmentSubmitting, setEnrollmentSubmitting] = useState(false);
  const [inquirySubmitting, setInquirySubmitting] = useState(false);
  const [enrollmentSuccess, setEnrollmentSuccess] = useState(false);
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const submitEnrollment = useMutation(api.forms.submitEnrollment);
  const submitInquiry = useMutation(api.forms.submitInquiry);

  const handleEnrollmentChange = (field: string, value: string) => {
    setEnrollmentForm(prev => ({ ...prev, [field]: value }));
  };

  const handleInquiryChange = (field: string, value: string) => {
    setInquiryForm(prev => ({ ...prev, [field]: value }));
  };

  const handleEnrollmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnrollmentSubmitting(true);
    
    try {
      // Check if Convex is configured
      if (!process.env.NEXT_PUBLIC_CONVEX_URL || process.env.NEXT_PUBLIC_CONVEX_URL === "https://mock-convex-url.com") {
        // Fallback to email or show configuration message
        alert('Contact form not configured. Please email us directly at Enrol.AlfaLearning@gmail.com');
        return;
      }
      
      await submitEnrollment({
        studentName: enrollmentForm.studentName,
        parentName: enrollmentForm.parentName || undefined,
        email: enrollmentForm.email,
        phone: enrollmentForm.phone || undefined,
        age: enrollmentForm.age || undefined,
        currentLevel: enrollmentForm.currentLevel || undefined,
        interestedSubjects: enrollmentForm.interestedSubjects || undefined,
        preferredSchedule: enrollmentForm.preferredSchedule || undefined,
        goals: enrollmentForm.goals || undefined,
        message: enrollmentForm.message || undefined,
      });
      
      setEnrollmentSuccess(true);
      setEnrollmentForm({
        studentName: '',
        parentName: '',
        email: '',
        phone: '',
        age: '',
        currentLevel: '',
        interestedSubjects: '',
        preferredSchedule: '',
        goals: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setEnrollmentSuccess(false), 5000);
    } catch (error) {
      console.error('Enrollment submission error:', error);
      alert('Failed to submit enrollment. Please try again or contact us directly at Enrol.AlfaLearning@gmail.com');
    } finally {
      setEnrollmentSubmitting(false);
    }
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitting(true);
    
    try {
      // Check if Convex is configured
      if (!process.env.NEXT_PUBLIC_CONVEX_URL || process.env.NEXT_PUBLIC_CONVEX_URL === "https://mock-convex-url.com") {
        // Fallback to email or show configuration message
        alert('Contact form not configured. Please email us directly at Enrol.AlfaLearning@gmail.com');
        return;
      }
      
      await submitInquiry({
        name: inquiryForm.name,
        email: inquiryForm.email,
        phone: inquiryForm.phone || undefined,
        inquiryType: inquiryForm.inquiryType || undefined,
        message: inquiryForm.message,
      });
      
      setInquirySuccess(true);
      setInquiryForm({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setInquirySuccess(false), 5000);
    } catch (error) {
      console.error('Inquiry submission error:', error);
      alert('Failed to submit inquiry. Please try again or contact us directly at Enrol.AlfaLearning@gmail.com');
    } finally {
      setInquirySubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.contactInfo.items.email.title"),
      details: t("contact.contactInfo.items.email.details"),
      description: t("contact.contactInfo.items.email.description"),
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: MessageCircle,
      title: t("contact.contactInfo.items.whatsapp.title"),
      details: t("contact.contactInfo.items.whatsapp.details"),
      description: t("contact.contactInfo.items.whatsapp.description"),
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: MapPin,
      title: t("contact.contactInfo.items.location.title"),
      details: t("contact.contactInfo.items.location.details"),
      description: t("contact.contactInfo.items.location.description"),
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Clock,
      title: t("contact.contactInfo.items.hours.title"),
      details: t("contact.contactInfo.items.hours.details"),
      description: t("contact.contactInfo.items.hours.description"),
      color: "from-orange-500 to-red-600"
    }
  ];

  const subjects = [
    t("contact.forms.enrollment.subjects.0"),
    t("contact.forms.enrollment.subjects.1"),
    t("contact.forms.enrollment.subjects.2"),
    t("contact.forms.enrollment.subjects.3"),
    t("contact.forms.enrollment.subjects.4"),
    t("contact.forms.enrollment.subjects.5"),
    t("contact.forms.enrollment.subjects.6"),
    t("contact.forms.enrollment.subjects.7")
  ];

  const levels = [
    t("contact.forms.enrollment.levels.0"),
    t("contact.forms.enrollment.levels.1"),
    t("contact.forms.enrollment.levels.2"),
    t("contact.forms.enrollment.levels.3"),
    t("contact.forms.enrollment.levels.4"),
    t("contact.forms.enrollment.levels.5"),
    t("contact.forms.enrollment.levels.6")
  ];

  const inquiryTypes = [
    t("contact.forms.inquiry.inquiryTypes.0"),
    t("contact.forms.inquiry.inquiryTypes.1"),
    t("contact.forms.inquiry.inquiryTypes.2"),
    t("contact.forms.inquiry.inquiryTypes.3"),
    t("contact.forms.inquiry.inquiryTypes.4"),
    t("contact.forms.inquiry.inquiryTypes.5")
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border-white/20">
              <Sparkles className="w-4 h-4 mr-2" />
              {t("contact.hero.badge")}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight" data-macaly="contact-hero-title">
              {t("contact.hero.title")}
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">{t("contact.hero.titleHighlight")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed" data-macaly="contact-hero-description">
              {t("contact.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800">
              <Star className="w-4 h-4 mr-2" />
              {t("contact.contactInfo.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6" data-macaly="contact-info-title">
              {t("contact.contactInfo.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("contact.contactInfo.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className={`w-20 h-20 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-gray-900 mb-2">{info.details}</p>
                    <CardDescription className="text-base">{info.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">
              <Send className="w-4 h-4 mr-2" />
              {t("contact.forms.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6" data-macaly="forms-title">
              {t("contact.forms.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("contact.forms.subtitle")}
            </p>
          </div>
          
          <Tabs defaultValue="enrollment" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/80 backdrop-blur-sm">
              <TabsTrigger value="enrollment" className="text-base font-semibold">
                <UserPlus className="h-4 w-4 mr-2" />
                {t("contact.forms.enrollment.tab")}
              </TabsTrigger>
              <TabsTrigger value="inquiry" className="text-base font-semibold">
                <MessageCircle className="h-4 w-4 mr-2" />
                {t("contact.forms.inquiry.tab")}
              </TabsTrigger>
            </TabsList>
            
            {/* Enrollment Form */}
            <TabsContent value="enrollment">
              <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl text-center flex items-center justify-center">
                    <BookOpen className="h-6 w-6 mr-2" />
                    {t("contact.forms.enrollment.title")}
                  </CardTitle>
                  <CardDescription className="text-center text-cyan-100">
                    {t("contact.forms.enrollment.subtitle")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleEnrollmentSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="studentName" className="text-base font-semibold">{t("contact.forms.enrollment.fields.studentName")} *</Label>
                        <Input
                          id="studentName"
                          value={enrollmentForm.studentName}
                          onChange={(e) => handleEnrollmentChange('studentName', e.target.value)}
                          placeholder={t("contact.forms.enrollment.placeholders.studentName")}
                          className="h-12"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="parentName" className="text-base font-semibold">{t("contact.forms.enrollment.fields.parentName")}</Label>
                        <Input
                          id="parentName"
                          value={enrollmentForm.parentName}
                          onChange={(e) => handleEnrollmentChange('parentName', e.target.value)}
                          placeholder={t("contact.forms.enrollment.placeholders.parentName")}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base font-semibold">{t("contact.forms.enrollment.fields.email")} *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={enrollmentForm.email}
                          onChange={(e) => handleEnrollmentChange('email', e.target.value)}
                          placeholder={t("contact.forms.enrollment.placeholders.email")}
                          className="h-12"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-base font-semibold">{t("contact.forms.enrollment.fields.phone")} *</Label>
                        <Input
                          id="phone"
                          value={enrollmentForm.phone}
                          onChange={(e) => handleEnrollmentChange('phone', e.target.value)}
                          placeholder={t("contact.forms.enrollment.placeholders.phone")}
                          className="h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="age" className="text-base font-semibold">{t("contact.forms.enrollment.fields.age")}</Label>
                        <Input
                          id="age"
                          type="number"
                          value={enrollmentForm.age}
                          onChange={(e) => handleEnrollmentChange('age', e.target.value)}
                          placeholder={t("contact.forms.enrollment.placeholders.age")}
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currentLevel" className="text-base font-semibold">{t("contact.forms.enrollment.fields.currentLevel")} *</Label>
                        <Select onValueChange={(value) => handleEnrollmentChange('currentLevel', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder={t("contact.forms.enrollment.placeholders.currentLevel")} />
                          </SelectTrigger>
                          <SelectContent>
                            {levels.map((level) => (
                              <SelectItem key={level} value={level}>
                                {level}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="interestedSubjects" className="text-base font-semibold">{t("contact.forms.enrollment.fields.interestedSubjects")} *</Label>
                        <Select onValueChange={(value) => handleEnrollmentChange('interestedSubjects', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder={t("contact.forms.enrollment.placeholders.interestedSubjects")} />
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
                        <Label htmlFor="preferredSchedule" className="text-base font-semibold">{t("contact.forms.enrollment.fields.preferredSchedule")}</Label>
                        <Input
                          id="preferredSchedule"
                          value={enrollmentForm.preferredSchedule}
                          onChange={(e) => handleEnrollmentChange('preferredSchedule', e.target.value)}
                          placeholder={t("contact.forms.enrollment.placeholders.preferredSchedule")}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="goals" className="text-base font-semibold">{t("contact.forms.enrollment.fields.goals")}</Label>
                      <Textarea
                        id="goals"
                        value={enrollmentForm.goals}
                        onChange={(e) => handleEnrollmentChange('goals', e.target.value)}
                        placeholder={t("contact.forms.enrollment.placeholders.goals")}
                        rows={3}
                        className="resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base font-semibold">{t("contact.forms.enrollment.fields.message")}</Label>
                      <Textarea
                        id="message"
                        value={enrollmentForm.message}
                        onChange={(e) => handleEnrollmentChange('message', e.target.value)}
                        placeholder={t("contact.forms.enrollment.placeholders.message")}
                        rows={4}
                        className="resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" disabled={enrollmentSubmitting} className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold h-14 text-lg shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                      {enrollmentSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          {t("contact.forms.enrollment.submitting")}
                        </>
                      ) : (
                        <>
                          {t("contact.forms.enrollment.submit")} <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                    
                    {enrollmentSuccess && (
                      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          <p className="text-green-800 font-medium">
                            {t("contact.forms.enrollment.success")}
                          </p>
                        </div>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* General Inquiry Form */}
            <TabsContent value="inquiry">
              <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl text-center flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 mr-2" />
                    {t("contact.forms.inquiry.title")}
                  </CardTitle>
                  <CardDescription className="text-center text-blue-100">
                    {t("contact.forms.inquiry.subtitle")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleInquirySubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="inquiryName" className="text-base font-semibold">{t("contact.forms.inquiry.fields.name")} *</Label>
                        <Input
                          id="inquiryName"
                          value={inquiryForm.name}
                          onChange={(e) => handleInquiryChange('name', e.target.value)}
                          placeholder={t("contact.forms.inquiry.placeholders.name")}
                          className="h-12"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryEmail" className="text-base font-semibold">{t("contact.forms.inquiry.fields.email")} *</Label>
                        <Input
                          id="inquiryEmail"
                          type="email"
                          value={inquiryForm.email}
                          onChange={(e) => handleInquiryChange('email', e.target.value)}
                          placeholder={t("contact.forms.inquiry.placeholders.email")}
                          className="h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="inquiryPhone" className="text-base font-semibold">{t("contact.forms.inquiry.fields.phone")}</Label>
                        <Input
                          id="inquiryPhone"
                          value={inquiryForm.phone}
                          onChange={(e) => handleInquiryChange('phone', e.target.value)}
                          placeholder={t("contact.forms.inquiry.placeholders.phone")}
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType" className="text-base font-semibold">{t("contact.forms.inquiry.fields.inquiryType")} *</Label>
                        <Select onValueChange={(value) => handleInquiryChange('inquiryType', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder={t("contact.forms.inquiry.placeholders.inquiryType")} />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryMessage" className="text-base font-semibold">{t("contact.forms.inquiry.fields.message")} *</Label>
                      <Textarea
                        id="inquiryMessage"
                        value={inquiryForm.message}
                        onChange={(e) => handleInquiryChange('message', e.target.value)}
                        placeholder={t("contact.forms.inquiry.placeholders.message")}
                        rows={6}
                        className="resize-none"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" disabled={inquirySubmitting} className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold h-14 text-lg shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                      {inquirySubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          {t("contact.forms.inquiry.submitting")}
                        </>
                      ) : (
                        <>
                          {t("contact.forms.inquiry.submit")} <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                    
                    {inquirySuccess && (
                      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          <p className="text-green-800 font-medium">
                            {t("contact.forms.inquiry.success")}
                          </p>
                        </div>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-green-100 text-green-800">
              <CheckCircle className="w-4 h-4 mr-2" />
              {t("contact.quickActions.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6" data-macaly="quick-actions-title">
              {t("contact.quickActions.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("contact.quickActions.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{t("contact.quickActions.items.teachers.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6 text-base">
                  {t("contact.quickActions.items.teachers.description")}
                </CardDescription>
                <Button asChild className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold">
                  <a href="/teachers">
                    {t("contact.quickActions.items.teachers.action")} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{t("contact.quickActions.items.classes.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6 text-base">
                  {t("contact.quickActions.items.classes.description")}
                </CardDescription>
                <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold">
                  <a href="/classes">
                    {t("contact.quickActions.items.classes.action")} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-violet-50">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{t("contact.quickActions.items.mission.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6 text-base">
                  {t("contact.quickActions.items.mission.description")}
                </CardDescription>
                <Button asChild className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-semibold">
                  <a href="/about">
                    {t("contact.quickActions.items.mission.action")} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Response Time Promise */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <Clock className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" data-macaly="response-promise-title">
            {t("contact.responsePromise.title")}
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t("contact.responsePromise.description")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-4xl font-bold text-white mb-1">{t("contact.responsePromise.values.email")}</div>
              <div className="text-white/90 text-lg">{t("contact.responsePromise.times.email")}</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-4xl font-bold text-white mb-3">{t("contact.responsePromise.values.whatsapp")}</div>
              <div className="text-white/90 text-lg">{t("contact.responsePromise.times.whatsapp")}</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-4xl font-bold text-white mb-3">{t("contact.responsePromise.values.application")}</div>
              <div className="text-white/90 text-lg">{t("contact.responsePromise.times.application")}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}