import { useState } from 'react';
import { HeroSection } from './components/landing/HeroSection';
import { TargetAudienceSection } from './components/landing/TargetAudienceSection';
import { ServicesSection } from './components/landing/ServicesSection';
import { VideoSection } from './components/landing/VideoSection';
import { ScalabilitySection } from './components/landing/ScalabilitySection';
import { CtaSection } from './components/landing/CtaSection';

export default function App() {
  const [autoPlayVideo, setAutoPlayVideo] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      <HeroSection onDiscoverClick={() => setAutoPlayVideo(true)} />
      <TargetAudienceSection />
      <ServicesSection />
      <VideoSection autoPlay={autoPlayVideo} />
      <ScalabilitySection />
      <CtaSection />
    </div>
  );
}