import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ClassesPageContent from '@/components/classes-page-content';

export const metadata: Metadata = siteMetadata['/classes'];

export default function ClassesPage() {
  return <ClassesPageContent />;
}