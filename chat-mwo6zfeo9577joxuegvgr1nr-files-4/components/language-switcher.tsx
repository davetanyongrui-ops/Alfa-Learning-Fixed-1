"use client";

import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1">
      <Globe className="h-4 w-4 text-white/70" />
      <div className="flex items-center bg-white/10 rounded-lg p-1 backdrop-blur-sm">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage('en')}
          className={`px-2 py-1 text-xs font-medium transition-all duration-200 ${
            language === 'en'
              ? 'bg-white text-indigo-600 shadow-sm'
              : 'text-white/90 hover:text-white hover:bg-white/10'
          }`}
        >
          EN
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage('id')}
          className={`px-2 py-1 text-xs font-medium transition-all duration-200 ${
            language === 'id'
              ? 'bg-white text-indigo-600 shadow-sm'
              : 'text-white/90 hover:text-white hover:bg-white/10'
          }`}
        >
          ID
        </Button>
      </div>
    </div>
  );
}