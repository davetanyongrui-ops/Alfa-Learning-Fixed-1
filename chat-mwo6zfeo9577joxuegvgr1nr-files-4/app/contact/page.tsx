import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import dynamic from 'next/dynamic';

// Dynamically import the client component to avoid SSR issues with Convex hooks
const ContactPageContent = dynamic(() => import('@/components/contact-page-content'), {
  ssr: false, // Disable SSR for this component since it uses Convex hooks
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
    </div>
  ),
});

export const metadata: Metadata = siteMetadata['/contact'];

export default function ContactPage() {
  return <ContactPageContent />;
}