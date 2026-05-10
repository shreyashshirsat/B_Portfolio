import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Shreyash_Resume_Latex.pdf';
    link.download = 'Shreyash_Shirsat_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__bg" />
      <div className="hero__content">
        <p className="hero__greeting">Hello, I'm</p>
        <h1 className="hero__name">Shreyash Shirsat</h1>
        <p className="hero__title">
          DevOps Enthusiast
        </p>
        <p className="hero__intro">
          Building resilient cloud infrastructure and crafting clean web experiences.
          Passionate about automation, containers, and continuous delivery.
        </p>

        <div className="hero__actions">
          <button className="btn btn--primary" onClick={() => scrollTo('#projects')}>
            View Projects
          </button>
          <button className="btn btn--outline" onClick={downloadResume}>
            <Download size={16} style={{ marginRight: '8px' }} />
            Download Resume
          </button>
          <button className="btn btn--outline" onClick={() => scrollTo('#contact')}>
            Contact Me
          </button>
        </div>

        <div className="hero__socials">
          <a href="https://github.com/shreyashshirsat" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/shreyash-shirsat-728578281/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <button className="hero__scroll" onClick={() => scrollTo('#about')} aria-label="Scroll down">
        <ArrowDown size={20} className="hero__scroll-icon" />
      </button>
    </section>
  );
}
