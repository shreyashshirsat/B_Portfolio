import { Cloud, Container, Code2, Server } from 'lucide-react';
import './About.css';

const highlights = [
  { icon: <Cloud size={22} />, label: 'Cloud Computing', desc: 'AWS & cloud architecture' },
  { icon: <Container size={22} />, label: 'Containers', desc: 'Docker & Kubernetes' },
  { icon: <Server size={22} />, label: 'DevOps', desc: 'CI/CD & automation' },
  { icon: <Code2 size={22} />, label: 'Web Dev', desc: 'React & full-stack' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section__container">
        <h2 className="section__heading">About Me</h2>
        <p className="section__subheading">A quick overview of who I am and what I do</p>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I’m a Computer Engineering student passionate about cloud computing, DevOps, full-stack development, and intelligent automation. I enjoy building practical systems that solve real-world problems through clean and scalable engineering.
            </p>
            <p>
              I’ve worked on projects ranging from productivity applications to a local-first self-healing cloud platform capable of automatically detecting failures and recovering services without human intervention. Through these projects, I’ve gained hands-on experience with technologies like React, Python, Docker, Kubernetes, AWS, Linux, and modern backend systems.
            </p>
            <p>
              I’m driven by continuous learning and the challenge of turning complex ideas into reliable solutions. I aim to build technology that is efficient, meaningful, and impactful.
            </p>
          </div>

          <div className="about__highlights">
            {highlights.map((h) => (
              <div className="about__highlight" key={h.label}>
                <div className="about__highlight-icon">{h.icon}</div>
                <div>
                  <strong>{h.label}</strong>
                  <span>{h.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
