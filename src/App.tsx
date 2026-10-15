import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AppDemoVideo } from './components/AppDemoVideo';
import { WorkflowSection } from './components/WorkflowSection';
import { RoiCalculator } from './components/RoiCalculator';
import { CandidateScorecard } from './components/CandidateScorecard';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export const App: React.FC = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleOpenDemo = () => setDemoModalOpen(true);
  const handleCloseDemo = () => setDemoModalOpen(false);

  const handleScrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToWorkflow = () => {
    const el = document.getElementById('workflow');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToVideo = () => {
    const el = document.getElementById('demo-video');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-ink-primary font-sans selection:bg-mint selection:text-forest-dark">
      {/* 1. Sticky Navigation */}
      <Navbar
        onOpenDemo={handleOpenDemo}
        onOpenCalculator={handleScrollToCalculator}
      />

      {/* Main Content Sections - Streamlined & Focused */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenDemo={handleOpenDemo}
          onScrollToCalculator={handleScrollToCalculator}
          onScrollToWorkflow={handleScrollToWorkflow}
          onScrollToVideo={handleScrollToVideo}
        />

        {/* 3. Live Product Demo Video */}
        <AppDemoVideo onOpenDemo={handleOpenDemo} />

        {/* 4. Centerpiece: Interactive Recruitment Workflow */}
        <WorkflowSection />

        {/* 5. Interactive ROI & Capacity Savings Calculator */}
        <RoiCalculator onOpenDemo={handleOpenDemo} />

        {/* 6. Concrete Candidate Scorecard Preview */}
        <CandidateScorecard />

        {/* 7. FAQ Section */}
        <FAQSection onOpenDemo={handleOpenDemo} />

        {/* 8. Final High-Conversion CTA */}
        <FinalCTA
          onOpenDemo={handleOpenDemo}
          onScrollToCalculator={handleScrollToCalculator}
        />
      </main>

      {/* 9. Minimal Footer */}
      <Footer
        onOpenDemo={handleOpenDemo}
        onScrollToCalculator={handleScrollToCalculator}
      />

      {/* Interactive Demo Booking Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
};

export default App;
