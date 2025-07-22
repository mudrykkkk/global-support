'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { translations } from '@/lib/translations';

interface FormData {
  name: string;
  phone: string;
  email: string;
  country: string;
  comment?: string;
}

export default function Application() {
  const [currentLanguage, setCurrentLanguage] = useState('ua');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  
  const t = translations[currentLanguage];

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const countries = [
    { code: 'ua', name: 'Ukraine' },
    { code: 'pl', name: 'Poland' },
    { code: 'us', name: 'United States' },
    { code: 'ca', name: 'Canada' },
    { code: 'de', name: 'Germany' },
    { code: 'fr', name: 'France' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'it', name: 'Italy' },
    { code: 'es', name: 'Spain' },
    { code: 'other', name: 'Other' },
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Validate that country is selected
      if (!selectedCountry) {
        console.error('Country not selected');
        setIsSubmitting(false);
        return;
      }

      console.log('Submitting form data:', {
        ...data,
        country: selectedCountry,
      });

      // Try Supabase Edge Function first, fallback to local API
      let response;
      try {
        // Replace with your actual Supabase URL when deployed
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co';
        response = await fetch(`${supabaseUrl}/functions/v1/telegram-webhook`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''}`,
          },
          body: JSON.stringify({
            ...data,
            country: selectedCountry,
          }),
        });
      } catch (edgeError) {
        console.log('Edge function failed, trying local API...');
        response = await fetch('/api/telegram', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...data,
            country: selectedCountry,
          }),
        });
      }

      if (!response) {
        throw new Error('No response from server');
      }

      const result = await response.json();
      
      if (response.ok && result.success) {
        setIsSuccess(true);
        reset();
        setSelectedCountry('');
      } else {
        const errorMessage = result.message || result.error || 'Помилка при надсиланні форми';
        console.error('Form submission error:', errorMessage);
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error submitting form. Please try again.';
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Layout currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange}>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="w-full max-w-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t.application.success.title}
                </h2>
                <p className="text-gray-600 mb-8">
                  {t.application.success.message}
                </p>
                <Link href="/">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {t.application.success.backHome}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange}>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {t.application.title}
            </h1>
            <p className="text-lg text-gray-600">
              {t.application.subtitle}
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  {t.application.formTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.application.name} *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      {...register('name', { required: t.application.nameRequired })}
                      className={errors.name ? 'border-red-500' : ''}
                      placeholder={t.application.name}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.application.phone} *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register('phone', { required: t.application.phoneRequired })}
                      className={errors.phone ? 'border-red-500' : ''}
                      placeholder="+380 XX XXX XX XX"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.application.email} *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email', { 
                        required: t.application.emailRequired,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: t.application.emailInvalid
                        }
                      })}
                      className={errors.email ? 'border-red-500' : ''}
                      placeholder="email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Country */}
                  <div>
                    <Label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.application.country} *
                    </Label>
                    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                      <SelectTrigger className={!selectedCountry ? 'border-red-500' : ''}>
                        <SelectValue placeholder={t.application.selectCountry} />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country.code} value={country.name}>
                            {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {!selectedCountry && (
                      <p className="mt-1 text-sm text-red-600">
                        {t.application.countryRequired}
                      </p>
                    )}
                  </div>

                  {/* Comment */}
                  <div>
                    <Label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.application.comment}
                    </Label>
                    <Textarea
                      id="comment"
                      {...register('comment')}
                      rows={4}
                      placeholder={t.application.commentPlaceholder}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/" className="sm:w-auto">
                      <Button type="button" variant="outline" className="w-full sm:w-auto">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        {t.application.back}
                      </Button>
                    </Link>
                    <Button
                      type="submit"
                      disabled={isSubmitting || !selectedCountry}
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          {t.application.submitting}
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          {t.application.submit}
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}