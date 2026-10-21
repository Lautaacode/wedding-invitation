import './App.css'
import { CountdownSection } from './components/CountdownSection'
import { DaySection } from './components/DaySection'
import { DressCodeSection } from './components/DressCodeSection'
import { Footer } from './components/Footer'
import { GallerySection } from './components/GallerySection'
import { Hero } from './components/Hero'
import { MusicPlayer } from './components/MusicPlayer'
import { Navigation } from './components/Navigation'
import { PaperGrain } from './components/PaperGrain'
import { RegistrySection } from './components/RegistrySection'
import { RSVPSection } from './components/RSVPSection'
import { StaySection } from './components/StaySection'
import { StorySection } from './components/StorySection'

function App() {
  return (
    <main>
      <PaperGrain className='paper-grain' />
      <Navigation />
      <Hero />
      <hr className="section-divider" />
      <StorySection />
      <hr className="section-divider" />
      <CountdownSection />
      <hr className="section-divider" />
      <DaySection />
      <hr className="section-divider" />
      <DressCodeSection />
      <hr className="section-divider" />
      <StaySection />
      <hr className="section-divider" />
      <GallerySection />
      <hr className="section-divider" />
      <RSVPSection />
      <hr className="section-divider" />
      <RegistrySection />
      <Footer />
      <MusicPlayer />
    </main>
  )
}

export default App
