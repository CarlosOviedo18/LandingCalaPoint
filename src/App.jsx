import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Audience from './components/Audience'
import Pricing from './components/Pricing'
import EmailCTA from './components/EmailCTA'
import Footer from './components/Footer'

function App() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <Hero />
      <Problem />
      <HowItWorks />
      <Audience />
      <Pricing />
      <EmailCTA />
      <Footer />
    </main>
  )
}

export default App
