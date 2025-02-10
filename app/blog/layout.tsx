import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Apex Labs - Insights on AI, Digital Transformation & Technology',
  description: 'Stay updated with the latest insights on AI, digital transformation, cybersecurity, and technology trends from Apex Labs experts.',
  keywords: 'AI blog, digital transformation insights, technology trends, cybersecurity blog, enterprise technology',
  openGraph: {
    title: 'Apex Labs Blog - Technology Insights & Trends',
    description: 'Expert insights on AI, digital transformation, and enterprise technology trends.',
    type: 'website',
    url: 'https://apexlabs.com/blog',
    siteName: 'Apex Labs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Labs Blog - Technology Insights & Trends',
    description: 'Expert insights on AI, digital transformation, and enterprise technology trends.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 