import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import GithubFeed from './components/GithubFeed.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import SiteFooter from './components/SiteFooter.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <GithubFeed />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
