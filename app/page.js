import Header from './components/Header'
import HeroSection from './components/HeroSection'
import OpportunitySection from './components/OpportunitySection'
import SolutionSection from './components/SolutionSection'
import DemoSection from './components/DemoSection'
import BlueprintSection from './components/BlueprintSection'
import CallToActionSection from './components/CallToActionSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <OpportunitySection />
        <SolutionSection />
        <DemoSection />
        <BlueprintSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  )
}
