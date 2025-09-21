import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import TeachersPageContent from '@/components/teachers-page-content';

export const metadata: Metadata = siteMetadata['/teachers'];

export default function TeachersPage() {
  return <TeachersPageContent />;
}