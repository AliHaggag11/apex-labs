import dynamic from 'next/dynamic';

// Dynamically import client components
const Hero = dynamic(() => import('./components/home/Hero'));
const Services = dynamic(() => import('./components/home/Services'));
const AIAutomation = dynamic(() => import('./components/home/AIAutomation'));
const Contact = dynamic(() => import('./components/home/Contact'));

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Services />
        <AIAutomation />
        <Contact />
      </main>
    </div>
  );
}
